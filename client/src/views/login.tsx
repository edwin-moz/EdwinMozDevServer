import { useState } from "react"
import { login } from "../managers/authentication"
import Input from "../components/input"
import Button from "../components/button"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return (
        <form>
            <Input
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                value={email}
            />

            <Input
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                value={password}
            />

            <Button
                onClick={async (event) => {
                    event.preventDefault()

                    await login(email, password)
                }}
            >
                Login
            </Button>
        </form>
    )
}
