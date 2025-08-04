"use server";

import { z } from "zod";

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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Please fix the errors below.",
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.info("Contact form submission:", { name, email, subject, message });

    return {
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
      errors: {},
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      errors: {},
    };
  }
}
