import headerToken from "@/lib/hearderToken"

export const getAllTask = async (id) => {
    console.log("task id", id);
    
    const headers = await headerToken();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/task/workspace/${id}`,
        {
            headers,
        }
    );
    // console.log("Response", response.status);
    // const taskDetail = await response.json();
    // console.log("task : ", userDetail);
    // return taskDetail;
};