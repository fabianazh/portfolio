export default function TextInput({
    type,
    id,
    className,
    label,
    placeholder,
}: TextInput) {
    return (
        <>
            <div className="mb-5">
                <label
                    htmlFor={id}
                    className="mb-2 block text-base font-semibold text-black"
                >
                    {label}
                </label>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`w-full rounded text-sm border-gray-200 bg-white py-3 px-5 text-gray-700 outline-none focus:border-stone-500 border-2 focus:shadow-md ${className}`}
                />
            </div>
        </>
    )
}
