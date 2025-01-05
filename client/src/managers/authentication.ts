const API_URL = "/api/authorization"

export async function login(email: string, password: string) {
    const url = `${API_URL}/login`

    const response = await fetch(url, {
        credentials: "same-origin",
        headers: {
            Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
        method: "POST",
    })

    if (response.status !== 200) {
        return Promise.resolve(null)
    } else {
        console.log("did it work???")
        return tryGetLoggedInUser()
    }
}

export async function logout() {
    const url = `${API_URL}/logout`

    await fetch(url)
}

type UserInformation = {
    address: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    userName: string
}

function HashPassword(password: string) {
    return btoa(password)
}

export async function register(userInformation: UserInformation) {
    userInformation.password = HashPassword(userInformation.password)

    console.log(userInformation.password)

    const url = `${API_URL}/register`

    console.log(url)

    await fetch(url, {
        body: JSON.stringify(userInformation),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    })

    await tryGetLoggedInUser()
}

export async function tryGetLoggedInUser() {
    const url = `${API_URL}/me`

    const response = await fetch(url)

    if (response.status === 401) {
        return Promise.resolve(null)
    } else {
        return response.json()
    }
}
