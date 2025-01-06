type ButtonProps = {
    children: React.ReactNode
    className?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button
            className={className || "border px-3 py-2 rounded-md"}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
