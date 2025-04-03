// src/services/signInService.js
export const signInService = async (credentials) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Invalid credentials");
    }

    return await response.json();
  } catch (error) {
    console.error("SignIn error:", error);
    throw error; 
  }
};