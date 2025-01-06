import { TServerEssentials } from "../lib/types"

const API_URL = "/api/server"

export async function getServers() {
    const response = await fetch(API_URL)
    const data = await response.json()

    return data
}

export async function addNewServer(server: TServerEssentials) {
    const response = await fetch(API_URL, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(server)
    })
    const data = await response.json()

    return data
}
