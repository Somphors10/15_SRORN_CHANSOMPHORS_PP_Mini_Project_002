import headerToken from "@/lib/hearderToken"

export const getAllWorkSpace = async() => {
    const headers = await headerToken();
    
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`, 
        {
            headers,
        }
    );
    // console.log("Response", response.status);
    const workspaces = await response.json();
    // console.log("workspace : ",workspaces);
    return workspaces;
};