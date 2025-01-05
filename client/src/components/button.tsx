type ButtonProps = {
    children: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}
