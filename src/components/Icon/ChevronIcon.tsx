export default function ChevronIcon() {
    return (
        <div className="group relative w-6 h-6 inline-block transition-transform duration-300 ease-in-out hover:translate-x-1">
            <span
                className="
            absolute top-1/2 right-0 
            w-3 h-3 
            border-t-2 border-r-2 border-current 
            transform -translate-y-1/2 rotate-45 
            transition-all duration-300 ease-in-out
            group-hover:translate-x-0.5
          "
            ></span>
            <span
                className="
            absolute top-1/2 left-0 
            h-0.5 bg-current 
            transform -translate-y-1/2 
            transition-all duration-300 ease-in-out
            w-0 group-hover:w-3
          "
            ></span>
        </div>
    )
}
