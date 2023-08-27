
const useAuthentication = () => {
    const sessionToken = sessionStorage.getItem("session-token");
    const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
    const username = userInfo.username;
    const email = userInfo.email
    
    const checkUserIfAuthenticated = () => {
        if(sessionToken){
            return true
        }
        return false
    }

  return { isAuthenticated: checkUserIfAuthenticated(), email, username }
}

export default useAuthentication