import toast from "react-hot-toast";
import authApi from "./authApi"


export const login = async (email: string, password: string) => {
    const response = await authApi.post("/auth/login", {
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

export const register = async (username: string, email: string, password: string) => {
    const response = await authApi.post("/auth/register", {
        username: username,
        email: email,
        password: password
    })
    return response.data
}

export const logout = () => {
    sessionStorage.removeItem("session-token");
    localStorage.removeItem("user-info");
    window.location.reload();
    toast.success("Successfully logged out!")
}