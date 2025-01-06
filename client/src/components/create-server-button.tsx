import { useServerContext } from "../lib/hooks"
import Input from "./input"
import Button from "./button"

export default function CreateServerButton() {
    const { handleCreateNewServer, handleNewServerImageUrlChange, handleNewServerNameChange, newServerImageUrl, newServerName } = useServerContext()

    return (
        <li className="mt-auto space-y-3">
            <Input
                onChange={(event) => handleNewServerNameChange(event.target.value)}
                placeholder="Enter server name"
                value={newServerName}
            />
            <Input
                onChange={(event) => handleNewServerImageUrlChange(event.target.value)}
                placeholder="Enter server image Url"
                value={newServerImageUrl}
            />

            <Button onClick={handleCreateNewServer}>Create</Button>
        </li>
    )
}
