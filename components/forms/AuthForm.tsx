//import { cn } from "@/lib/utils"
//import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
//import { Label } from "@/components/ui/label"
//import ROUTES from "@/constants/route"

"use client";
import SocialAuthForms from "@/components/forms/SocialAuthForms";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  useForm,
  DefaultValues,
  SubmitHandler,
} from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ROUTES from "@/constants/route";

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  FormType: "SIGN_IN" | "SIGN_UP";
  defaultValues: DefaultValues<T>;
  onsubmit: (data: T) => Promise<{ success: boolean; data: T }>;
}

const AuthForm = <T extends FieldValues>({
  schema,
  FormType,
  defaultValues,
  onsubmit,
}: AuthFormProps<T>) => {
  // 1. Define your form.
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  // 2. Define your onSubmit function.
  const handleSubmit: SubmitHandler<T> = async (data) => {
    const response = await onsubmit(data);
    if (response.success) {
      console.log("Form submitted successfully:", response.data);
    } else {
      console.error("Form submission failed:", response.data);
    }
  };

  // 3. Render the form.
  const buttonText = FormType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <>
      <div>
        {FormType === "SIGN_IN" ? (
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Create a new account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Sign up for a free account
            </p>
          </div>
        )}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="mt-10 space-y-6"
        >
          {Object.keys(defaultValues).map((fieldName) => (
            <FormField
              key={fieldName}
              name={fieldName as keyof T}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-2.5">
                  <FormLabel className="paragraph-medium text-dark300_light700">
                    {fieldName === "email"
                      ? "Email Address"
                      : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={fieldName === "password" ? "password" : "text"}
                      {...field}
                      className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-w-32 rounded-md border focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            disabled={form.formState.isSubmitting}
            className="primary-gradient paragraph-medium my-2 w-full rounded-2  font-inter !text-light-900 "
            type="submit"
          >
            {form.formState.isSubmitting
              ? buttonText === "Sign In"
                ? "SigningIn...."
                : "Sign Up"
              : buttonText}
          </Button>
          <p className="items-center">or</p>
          <SocialAuthForms />
          {FormType === "SIGN_IN" ? (
            <p>
              {" "}
              Don't have an account? {""}{" "}
              <Link
                className="primary-text-gradient paragraph-semibold text-green-400"
                href={ROUTES.SIGN_UP}
              >
                {" "}
                Sign up
              </Link>{" "}
            </p>
          ) : (
            <p>
              {" "}
              Already have account {""}{" "}
              <Link
                className="primary-text-gradient text-green-400 paragraph-semibold"
                href={ROUTES.SIGN_IN}
              >
                {" "}
                Sign in
              </Link>{" "}
            </p>
          )}
        </form>
      </Form>
    </>
  );
};

export default AuthForm;
