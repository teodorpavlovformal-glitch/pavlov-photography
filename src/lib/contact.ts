import type { ContactFormValues } from "@/lib/content-types";

interface FormspreeErrorPayload {
  errors?: Array<{
    message?: string;
  }>;
}

export function validateContactForm(
  values: ContactFormValues,
): Partial<Record<keyof ContactFormValues, string>> {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.name.trim()) {
    errors.name = "Моля, въведете име.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Моля, въведете телефон.";
  }

  if (!values.service.trim()) {
    errors.service = "Моля, изберете тип заснемане.";
  }

  if (!values.message.trim()) {
    errors.message = "Моля, опишете какво ви е необходимо.";
  }

  return errors;
}

export function getContactSubmitErrorMessage(
  status: number,
  payload?: FormspreeErrorPayload,
): string {
  const apiMessage = payload?.errors?.find((error) => error.message?.trim())?.message?.trim();

  if (apiMessage) {
    return apiMessage;
  }

  if (status === 429) {
    return "Твърде много изпратени запитвания. Моля, опитайте отново след малко.";
  }

  return "Не успях да изпратя запитването. Моля, опитайте отново след малко.";
}

export async function submitContactForm(
  values: ContactFormValues,
  endpoint: string,
) {
  const formData = new FormData();

  formData.set("name", values.name.trim());
  formData.set("phone", values.phone.trim());
  formData.set("service", values.service.trim());
  formData.set("message", values.message.trim());
  formData.set("source", "website-contact");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const contentType = response.headers.get("Content-Type") ?? response.headers.get("content-type");
  let payload: FormspreeErrorPayload | undefined;

  if (contentType?.includes("application/json")) {
    payload = (await response.json()) as FormspreeErrorPayload;
  }

  if (!response.ok) {
    throw new Error(getContactSubmitErrorMessage(response.status, payload));
  }
}
