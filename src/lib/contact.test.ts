import { getContactSubmitErrorMessage, validateContactForm } from "@/lib/contact";

describe("contact helpers", () => {
  it("returns a Bulgarian retry message for rate-limited Formspree responses", () => {
    expect(getContactSubmitErrorMessage(429)).toMatch(/Твърде много изпратени запитвания/i);
  });

  it("prefers a Formspree API error message when one is returned", () => {
    expect(
      getContactSubmitErrorMessage(422, {
        errors: [{ message: "Невалиден email адрес." }],
      }),
    ).toBe("Невалиден email адрес.");
  });

  it("returns Bulgarian validation messages for empty fields", () => {
    expect(
      validateContactForm({
        name: "",
        phone: "",
        service: "",
        message: "",
      }),
    ).toEqual({
      name: "Моля, въведете име.",
      phone: "Моля, въведете телефон.",
      service: "Моля, изберете тип заснемане.",
      message: "Моля, опишете какво ви е необходимо.",
    });
  });
});
