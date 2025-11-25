'use client'

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'

const defaultLocale = 'en'

type LocaleContextType = {
    locale: string
    setLocale: (value: string) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function useLocale() {
    const context = useContext(LocaleContext)
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider')
    }
    return context
}

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<string>(defaultLocale)

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale')

        if (storedLocale) setLocale(storedLocale)
    }, [])

    useEffect(() => {
        localStorage.setItem('locale', locale)
    }, [locale])

    return (
        <LocaleContext.Provider
            value={{
                locale,
                setLocale,
            }}
        >
            {children}
        </LocaleContext.Provider>
    )
}
