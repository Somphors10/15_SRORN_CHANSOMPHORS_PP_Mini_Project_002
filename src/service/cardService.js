import headerToken from "@/lib/hearderToken"

export const getAllTask = async() => {
    const headers = await headerToken();
    
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/tasks/workspace`, 
        {
            headers,
        }
    );
    console.log("Response", response);
    const task = await response.json();
    console.log("task ", task);
    return task;
};