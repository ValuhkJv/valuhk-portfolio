"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
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

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      // Reset form on successful submission
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  }, [state.success]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Send Me a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={formAction} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                className={state.errors?.name ? "border-red-500" : ""}
                disabled={isPending}
              />
              {state.errors?.name && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {state.errors.name[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className={state.errors?.email ? "border-red-500" : ""}
                disabled={isPending}
              />
              {state.errors?.email && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {state.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
              className={state.errors?.subject ? "border-red-500" : ""}
              disabled={isPending}
            />
            {state.errors?.subject && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {state.errors.subject[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, ideas, or just say hello!"
              rows={6}
              required
              className={state.errors?.message ? "border-red-500" : ""}
              disabled={isPending}
            />
            {state.errors?.message && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {state.message && (
            <Alert
              className={
                state.success
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : "border-red-500 bg-red-50 dark:bg-red-950"
              }
            >
              <div className="flex items-center gap-2">
                {state.success ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription
                  className={
                    state.success
                      ? "text-green-700 dark:text-green-300"
                      : "text-red-700 dark:text-red-300"
                  }
                >
                  {state.message}
                </AlertDescription>
              </div>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
