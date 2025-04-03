// src/actions/signUpAction.js
"use server";

export const signUpAction = async (prevState, formData) => {
    console.log("formdata", formData);
    
    try {
        const credentials = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Registration failed");
        }

        const data = await response.json();
        
        return { 
            success: true, 
            message: "Registration successful!",
            redirectTo: "/login",
            user: data.user // if your API returns user data
        };
    } catch (error) {
        console.error("Registration error:", error);
        return { 
            success: false, 
            message: error.message || "Registration failed" 
        };
    }
};