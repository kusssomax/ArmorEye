
import React, { useMemo, useState } from "react"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import {Button} from "@/components/ui/button.tsx";
import { useTranslation } from "react-i18next";

type FormValues = {
  name: string
  surname: string
  contact: string // phone or email
  message: string
}

const initialValues: FormValues = {
  name: "",
  surname: "",
  contact: "",
  message: "",
}

function isEmail(value: string): boolean {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)
}

function isPhone(value: string): boolean {
  return /^(\+)?[0-9\s().-]{7,}$/.test(value)
}

const ContactUs = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState<FormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    const list: Partial<Record<keyof FormValues, string>> = {}
    if (!values.name || values.name.trim().length < 2) {
      list.name = t("contact.nameError")
    }
    if (!values.surname || values.surname.trim().length < 2) {
      list.surname = t("contact.surnameError")
    }
    if (!values.contact || (!isEmail(values.contact) && !isPhone(values.contact))) {
      list.contact = t("contact.contactError")
    }
    if (!values.message || values.message.trim().length < 10) {
      list.message = t("contact.messageError")
    }
    return list
  }, [values, t])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    if (Object.keys(errors).length === 0) {
      setValues(initialValues)
      setSubmitted(false)
    }
  }

  return (
    <section id="contacts">
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl p-5">
        <FieldSet>
          <FieldLegend>{t("contact.title")}</FieldLegend>

          <FieldGroup>
            <Field data-invalid={submitted && !!errors.name}>
              <FieldLabel htmlFor="contact-name">{t("contact.name")}</FieldLabel>
              <FieldContent>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={submitted && !!errors.name}
                  className="border-input bg-[#eddee9] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  placeholder={t("contact.namePlaceholder")}
                />
                {submitted && errors.name && (
                  <FieldError errors={[{ message: errors.name }]} />
                )}
              </FieldContent>
            </Field>

            <Field data-invalid={submitted && !!errors.surname}>
              <FieldLabel htmlFor="contact-surname">{t("contact.surname")}</FieldLabel>
              <FieldContent>
                <input
                  id="contact-surname"
                  name="surname"
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  aria-invalid={submitted && !!errors.surname}
                  className="border-input bg-[#eddee9] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  placeholder={t("contact.surnamePlaceholder")}
                />
                {submitted && errors.surname && (
                  <FieldError errors={[{ message: errors.surname }]} />
                )}
              </FieldContent>
            </Field>

            <Field data-invalid={submitted && !!errors.contact}>
              <FieldLabel htmlFor="contact-contact">{t("contact.contact")}</FieldLabel>
              <FieldContent>
                <input
                  id="contact-contact"
                  name="contact"
                  type="text"
                  value={values.contact}
                  onChange={handleChange}
                  aria-invalid={submitted && !!errors.contact}
                  className="border-input bg-[#eddee9] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  placeholder={t("contact.contactPlaceholder")}
                />
                {submitted && errors.contact && (
                  <FieldError errors={[{ message: errors.contact }]} />
                )}
              </FieldContent>
            </Field>

            <Field data-invalid={submitted && !!errors.message}>
              <FieldLabel htmlFor="contact-message">{t("contact.message")}</FieldLabel>
              <FieldContent>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={submitted && !!errors.message}
                  className="border-input bg-[#eddee9] ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  placeholder={t("contact.messagePlaceholder")}
                />
                {submitted && errors.message && (
                  <FieldError errors={[{ message: errors.message }]} />
                )}
              </FieldContent>
            </Field>
          </FieldGroup>

          <FieldSeparator />

          <div className="flex items-center justify-end gap-3">
           <Button type={"submit"} className={"bg-[#eddee9] rounded-md transition-colors ease-in"}>{t("contact.send")}</Button>
          </div>
        </FieldSet>
      </form>
    </section>
  )
}

export default ContactUs