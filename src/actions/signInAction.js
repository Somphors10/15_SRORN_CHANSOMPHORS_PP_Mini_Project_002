// src/actions/signInAction.js
"use server";

import { signIn } from "@/auth";

export const signInAction = async (prevState, formData) => {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, 
    });

    return { success: true, redirectTo: "/dashboard" };
  } catch (error) {
    let errorMessage;;
    
    if (error.type === "CredentialsSignin") {
      errorMessage = "Bad credentials";
    } 

    return { success: false, message: errorMessage };
  }
};