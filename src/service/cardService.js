import headerToken from "@/lib/hearderToken"

export const getAllTask = async (id) => {
    // console.log("task id", id);

    const headers = await headerToken();
    console.log("task header", headers)
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/tasks/workspace/${id}`,
        {
            headers,
        }
    );
    // console.log("Response taks", response)
    const taskList = await response.json();
    return taskList;
};