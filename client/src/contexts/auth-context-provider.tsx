import { createContext, useEffect, useState } from "react"
import { tryGetLoggedInUser } from "../managers/authentication"
import { TUser } from "../lib/types"

type TAuthContext = {
    user: TUser | null
}

export const AuthContext = createContext<TAuthContext | null>(null)

export default function AuthContextProvider({ children }: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState<TUser | null>(null)

    const handleGetUser = () => tryGetLoggedInUser().then(setUser)

    useEffect(() => { handleGetUser() }, [])

    return (
        <AuthContext.Provider
            value={{
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
