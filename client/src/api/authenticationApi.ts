import axiosClient from "./axiosClient"

export const signIn = async (email: string, password: string) => {
    const response = await axiosClient.post("/auth/login", {
        email: email,
        password: password
    })
    return response.data
}   