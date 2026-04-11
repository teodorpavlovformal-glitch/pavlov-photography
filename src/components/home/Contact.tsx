"use client";

import { useMemo, useState } from "react";
import type { ContactContent, ContactFormValues } from "@/lib/content-types";
import { submitContactForm, validateContactForm } from "@/lib/contact";
import { IconToken } from "@/components/ui/IconToken";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface ContactProps {
  content: ContactContent;
}

const initialValues: ContactFormValues = {
  name: "",
  phone: "",
  service: "",
  message: "",
};

function renderTitle(content: ContactContent["title"]) {
  return (
    <>
      {content.lead} <span className="editorial-word">{content.accent}</span>
      {content.tail}
    </>
  );
}

export function Contact({ content }: ContactProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] =
    useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    tone: "success" | "error";
    text: string;
  } | null>(null);

  const canSubmit = useMemo(() => Object.values(values).every((value) => value.trim()), [values]);

  function updateField<Key extends keyof ContactFormValues>(
    key: Key,
    value: ContactFormValues[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatusMessage(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatusMessage(null);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      await submitContactForm(values, content.formEndpoint);
      setValues(initialValues);
      setStatusMessage({
        tone: "success",
        text: "Запитването беше изпратено успешно. Ще се свържа с вас възможно най-скоро.",
      });
    } catch (error) {
      setStatusMessage({
        tone: "error",
        text:
          error instanceof Error
            ? error.message
            : "Не успях да изпратя запитването. Моля, опитайте отново след малко.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionShell
      id="contact"
      eyebrow={content.eyebrow}
      title={renderTitle(content.title)}
      description={content.description}
      contentClassName="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,1.02fr)]"
    >
      <Reveal>
        <div className="grid gap-4">
          {content.details.map((detail) => (
            <article key={detail.label} className="soft-card flex items-start gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--accent-bright)]">
                <IconToken name={detail.icon} className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                  {detail.label}
                </p>
                <p className="mt-2 text-lg text-white">{detail.value}</p>
              </div>
            </article>
          ))}

          <article className="soft-card p-5">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
              Наличност
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content.availability}</p>
          </article>
        </div>
      </Reveal>

      <Reveal>
        <form className="soft-card p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Изпрати запитване
          </p>
          <div className="mt-6 grid gap-5">
            <label className="grid gap-2 text-sm text-white">
              Име
              <input
                className="form-input"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Вашето име"
              />
              {errors.name ? <span className="form-error">{errors.name}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-white">
              Телефон
              <input
                className="form-input"
                value={values.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Вашият телефон"
              />
              {errors.phone ? <span className="form-error">{errors.phone}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-white">
              Тип заснемане
              <select
                className="form-input"
                value={values.service}
                onChange={(event) => updateField("service", event.target.value)}
              >
                <option value="">Изберете услуга</option>
                {content.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service ? <span className="form-error">{errors.service}</span> : null}
            </label>

            <label className="grid gap-2 text-sm text-white">
              Съобщение
              <textarea
                className="form-input min-h-36 resize-y"
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Опишете кратко какво ви е необходимо..."
              />
              {errors.message ? <span className="form-error">{errors.message}</span> : null}
            </label>
          </div>

          <button
            type="submit"
            className="button-primary mt-8 w-full justify-center"
            disabled={!canSubmit || isSubmitting}
          >
            Изпрати запитване
          </button>

          {statusMessage ? (
            <p
              role="status"
              aria-live="polite"
              className={[
                "mt-5 text-sm leading-7",
                statusMessage.tone === "success" ? "text-[var(--foreground)]" : "text-[#ffb9a9]",
              ].join(" ")}
            >
              {statusMessage.text}
            </p>
          ) : null}
        </form>
      </Reveal>
    </SectionShell>
  );
}
