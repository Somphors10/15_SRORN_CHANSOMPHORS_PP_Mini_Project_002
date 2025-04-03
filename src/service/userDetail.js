import headerToken from "@/lib/hearderToken"

export const getUserDatial = async() => {
    const headers = await headerToken();
    
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/user`, 
        {
            headers,
        }
    );
    // console.log("Response", response.status);
    const userDetail = await response.json();
    // console.log("user Detail : ", userDetail);
    return userDetail;
};