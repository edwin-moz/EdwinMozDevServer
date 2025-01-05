type InputType = {
    className: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    value: string
}

export default function Input({ className, onChange, placeholder, value }: InputType) {
    return (
        <input
            className={className}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
    )
}
