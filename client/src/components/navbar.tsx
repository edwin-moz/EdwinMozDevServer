function Img({ alt, src }) {
    return <img alt={alt} className="object-cover h-[75px] rounded-full w-[75px]" src={src} />
}

const list = [
    {
        id: 1,
        name: "First server",
        image: "https://placehold.co/600x400",
        uniqueId: 8264852859
    },
    {
        id: 2,
        name: "Second server",
        image: "https://placehold.co/600x400",
        uniqueId: 8173956293
    },
    {
        id: 3,
        name: "Third server",
        image: "https://placehold.co/600x400",
        uniqueId: 9164860937
    },
    {
        id: 4,
        name: "Fourth server",
        image: "https://placehold.co/600x400",
        uniqueId: 3748591275
    },
]

export default function Navbar() {
    return (
        <ul className="bg-gray-500 flex flex-col">
            {list.map((li) => (
                <li className="flex hover:bg-gray-400">
                    <a className="flex flex-col items-center py-3 w-full" href={`${li.uniqueId}`}>
                        <p>{li.name}</p>

                        <Img alt={li.id} src={li.image} />
                    </a>
                </li>
            ))}
        </ul>
    )
}
