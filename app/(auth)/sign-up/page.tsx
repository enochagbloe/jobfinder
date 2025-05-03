"use client"
import AuthForm from "@/components/forms/AuthForm"; 
import React from "react";
import { SignUpSchema } from "@/lib/validation";



const SignUP = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", username: "", name: "" }}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUP;
