import headerToken from "@/lib/hearderToken"

export const getAllWorkSpace = async () => {
    const headers = await headerToken();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`,
        {
            headers,

            next: { tags: "workspace" }
        }
    );
    // console.log("Response", response.status);
    const workspaces = await response.json();
    // console.log("workspace : ",workspaces);
    return workspaces;
};



export const saveWorkspace = async (workspaceName) => {
    console.log("worksapce: ", workspaceName);

    try {
        const headers = await headerToken();
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace`,
            {
                method: "POST",
                headers,
                body: JSON.stringify(
                    workspaceName,
                ),

            }
        );


        if (!response.ok) {
            throw new Error('Failed to create workspace');
        }

        return await response.json();
    } catch (error) {
        console.error("workspace error:", error);
        throw error;
    }
};