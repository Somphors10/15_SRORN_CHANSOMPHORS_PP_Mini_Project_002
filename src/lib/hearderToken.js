// lib/headerToken.js
import { auth } from "@/auth";

const headerToken = async () => {
    const session = await auth();
    if (!session?.user?.payload?.token) {
        throw new Error('No authentication token found');
    }
    
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session.user.payload.token}`
    };
};

export default headerToken; 