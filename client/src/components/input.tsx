type InputType = {
    className?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    value: string
}

export default function Input({ className, onChange, placeholder, value }: InputType) {
    return (
        <input
            className={className || "border px-3 py-2 rounded-md"}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
    )
}
