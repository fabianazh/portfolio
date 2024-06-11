export default function Chip({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="text-xs text-white font-medium bg-white/30 rounded block w-auto h-auto py-1 px-2.5">
                {children}
            </div>
        </>
    )
}
