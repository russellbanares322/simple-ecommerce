import axiosClient from "./axiosClient"

export const signIn = async (email: string, password: string) => {
    const response = await axiosClient.post("/auth/login", {
        email: email,
        password: password
    })
    const sessionToken = response.data.authentication.sessionToken
    const userInfo = {
        email: response.data.email,
        username: response.data.username
    }
    sessionStorage.setItem("session-token", sessionToken);
    localStorage.setItem("user-info", JSON.stringify(userInfo))
    return response.data
}

export const logout = () => {
    sessionStorage.removeItem("session-token");
    localStorage.removeItem("user-info");
}