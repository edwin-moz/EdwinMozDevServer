import { createContext, useEffect, useState } from "react"
import { tryGetLoggedInUser } from "../managers/authentication"

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    console.log(user)

    useEffect(() => {
        async function getUser() {
            const data = await tryGetLoggedInUser()

            setUser(data)
        }

        getUser()
    }, [])

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
