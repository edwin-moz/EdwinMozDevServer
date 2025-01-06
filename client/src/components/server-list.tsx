import CreateServerButton from "./create-server-button"
import { useServerContext } from "../lib/hooks"

type TypeServerImageProps = {
    alt: string
    src: string
}

function ServerImage({ alt, src }: TypeServerImageProps) {
    return <img alt={alt} className="object-cover h-[75px] rounded-full w-[75px]" src={src} />
}

export default function ServerList() {
    const { serverList } = useServerContext()

    return (
        <ul className="bg-gray-500 flex flex-col">
            {serverList.map((server) => (
                <li className="flex hover:bg-gray-400" key={server.id}>
                    <a className="flex flex-col items-center py-3 w-full" href={`${server.id}`}>
                        <p>{server.name}</p>

                        <ServerImage alt={`${server.name}`} src={server.imageUrl} />
                    </a>
                </li>
            ))}

            <CreateServerButton />
        </ul>
    )
}
