"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "../actions/contact";

type ContactFormState = {
  success: boolean;
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};

const inputClass =
  "w-full border-[3px] bg-black px-3.5 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none disabled:opacity-50";

type FieldProps = {
  name: keyof ContactFormState["errors"];
  label: string;
  errors?: string[];
  disabled: boolean;
} & (
  | { multiline?: false; type: string; placeholder: string }
  | { multiline: true; placeholder: string }
);

function Field(props: FieldProps) {
  const { name, label, errors, disabled } = props;
  const errorId = `${name}-error`;
  const shared = {
    id: name,
    name,
    required: true,
    disabled,
    placeholder: props.placeholder,
    "aria-invalid": errors ? true : undefined,
    "aria-describedby": errors ? errorId : undefined,
    className: `${inputClass} ${errors ? "border-[#ff6b6b]" : "border-line"}`,
  };

  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label htmlFor={name} className="text-sm text-muted">
        {label}
      </label>
      {props.multiline ? (
        <textarea rows={4} {...shared} className={`${shared.className} resize-y`} />
      ) : (
        <input type={props.type} {...shared} />
      )}
      {errors && (
        <p id={errorId} className="text-[13px] text-[#ff8a8a]">
          ✕ {errors[0]}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex w-full flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="PLAYER NAME" type="text" placeholder="Your name" errors={state.errors?.name} disabled={isPending} />
        <Field name="email" label="EMAIL" type="email" placeholder="you@example.com" errors={state.errors?.email} disabled={isPending} />
      </div>
      <Field name="subject" label="SUBJECT" type="text" placeholder="Internship, freelance, collab…" errors={state.errors?.subject} disabled={isPending} />
      <Field name="message" label="MESSAGE" multiline placeholder="Tell me about the next level we'll build together." errors={state.errors?.message} disabled={isPending} />

      {state.message && (
        <p
          role="status"
          className={`border-[3px] px-4 py-3 text-left text-sm ${
            state.success ? "border-accent text-accent" : "border-[#ff6b6b] text-[#ff8a8a]"
          }`}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="h-[52px] cursor-pointer self-start bg-accent px-6 font-mono text-xs text-black shadow-[4px_4px_0_#3a3a3a] disabled:cursor-wait disabled:opacity-60"
      >
        {isPending ? "SENDING…" : "▶ SEND MESSAGE"}
      </button>
    </form>
  );
}
