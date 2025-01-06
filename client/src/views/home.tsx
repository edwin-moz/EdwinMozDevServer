import ServerList from "../components/server-list";

export default function Home() {
    return (
        <div className="bg-gray-100 grid grid-cols-[1fr,2fr,7fr] h-screen w-full">
            <ServerList />
            <div className="bg-gray-600"></div>
        </div>
    )
}
