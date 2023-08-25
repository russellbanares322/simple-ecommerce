import { create } from "zustand";
import { TAuthenticationProps } from "./types";


const useAuth = create<TAuthenticationProps>((set) => ({
    sessionToken: null,
    getSessionToken: (passedSessionToken) => set({sessionToken: passedSessionToken})
}))

export default useAuth