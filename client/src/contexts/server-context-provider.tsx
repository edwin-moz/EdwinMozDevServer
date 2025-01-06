import { createContext, useEffect, useState } from "react";
import { addNewServer, getServers } from "../managers/server";
import { useAuthContext } from "../lib/hooks";
import { TServer } from "../lib/types";

type TypeServerContext = {
    handleCreateNewServer: () => void
    handleGetServerList: () => void
    handleNewServerImageUrlChange: (text: string) => void
    handleNewServerNameChange: (text: string) => void
    newServerImageUrl: string
    newServerName: string
    serverList: TServer[]
}

export const ServerContext = createContext<TypeServerContext | null>(null)

export default function ServerContextProvider({ children }: {
    children: React.ReactNode
}) {
    const [serverList, setServerList] = useState<TServer[]>([])
    const [newServerName, setNewServerName] = useState("")
    const [newServerImageUrl, setNewServerImageUrl] = useState("")

    const { user } = useAuthContext()

    const clearNewServerData = () => {
        setNewServerImageUrl("")
        setNewServerName("")
    }

    const handleCreateNewServer = () => {
        if (user !== null) {
            addNewServer({
                identityUserId: user.identityUserId,
                imageUrl: newServerImageUrl,
                name: newServerName,
            }).then(() => handleGetServerList())

            clearNewServerData()
        } else if (user === null) {
            console.log("error creating server: user is null")
        }
    }

    const handleGetServerList = () => getServers().then(setServerList)

    const handleNewServerImageUrlChange = (text: string) => setNewServerImageUrl(text)
    const handleNewServerNameChange = (text: string) => setNewServerName(text)

    useEffect(() => { handleGetServerList() }, [])

    return (
        <ServerContext.Provider value={{
            handleCreateNewServer,
            handleGetServerList,
            handleNewServerImageUrlChange,
            handleNewServerNameChange,
            newServerImageUrl,
            newServerName,
            serverList
        }}>
            {children}
        </ServerContext.Provider>
    )
}
