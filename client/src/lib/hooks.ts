import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context-provider";
import { ServerContext } from "../contexts/server-context-provider";

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("Auth context needs to be used inside of a auth context provider component")
    }

    return context
}

export function useServerContext() {
    const context = useContext(ServerContext)

    if (!context) {
        throw new Error("Auth context needs to be used inside of a auth context provider component")
    }

    return context
}
