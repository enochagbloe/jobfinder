"use client"

import AuthForm from '@/components/forms/AuthForm'
import { SignInSchema } from '@/lib/validation'
import React from 'react'

const SignIn = () => {
  return (
    <div>
      <AuthForm
      FormType = "SIGN_IN"
      schema = {SignInSchema}
      defaultValues = {{email: '', password: ''}}
      onsubmit = {(data) => Promise.resolve({success: true, data})}
      />
    </div>
  )
}

export default SignIn