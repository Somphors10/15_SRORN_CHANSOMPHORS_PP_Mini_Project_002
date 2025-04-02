import { auth } from "@/auth";

const headerToken = async () => {
    const session = await auth();
    // console.log("Header Token Session : ", session);
    
    return{
        "Content-Type": "application/json",
        Authorization : `Bearer ${session?.user?.payload?.token}`,
    }

  };
  export default headerToken;