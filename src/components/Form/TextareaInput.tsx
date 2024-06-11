export default function TextareaInput({
    id,
    className,
    label,
    placeholder,
}: TextareaInput) {
    return (
        <>
            <div className="mb-5">
                <label
                    htmlFor={id}
                    className="mb-2 block text-base font-semibold text-black"
                >
                    {label}
                </label>
                <textarea
                    id={id}
                    rows={4}
                    placeholder={placeholder}
                    className={`w-full rounded text-sm border-gray-200 resize-none bg-white py-3 px-5 text-gray-700 outline-none focus:border-stone-500 border-2 focus:shadow-md ${className}`}
                ></textarea>
            </div>
        </>
    )
}
