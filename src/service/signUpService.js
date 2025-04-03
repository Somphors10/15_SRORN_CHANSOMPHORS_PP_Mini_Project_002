// src/services/signUpService.js
export const signUp = async (credentials) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: credentials.username,
                    email: credentials.email,
                    password: credentials.password,
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Registration failed");
        }

        return await response.json();
    } catch (error) {
        console.error("SignUp error:", error);
        throw error;
    }
};