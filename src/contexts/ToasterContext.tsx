'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ToasterContextType {
    messages: { id: number; message: string; type: 'success' | 'error' }[]
    addMessage: (type: 'success' | 'error', message: string) => void
    removeMessage: (id: number) => void
}

const ToasterContext = createContext<ToasterContextType | undefined>(undefined)

export const ToasterProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [messages, setMessages] = useState<
        { id: number; message: string; type: 'success' | 'error' }[]
    >([])

    const addMessage = (type: 'success' | 'error', message: string) => {
        const id = Date.now()
        setMessages((prev) => [...prev, { id, message, type }])
        setTimeout(() => {
            removeMessage(id)
        }, 3500)
    }

    const removeMessage = (id: number) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id))
    }

    return (
        <ToasterContext.Provider
            value={{ messages, addMessage, removeMessage }}
        >
            {children}
        </ToasterContext.Provider>
    )
}

export const useToaster = () => {
    const context = useContext(ToasterContext)
    if (!context) {
        throw new Error('useToaster must be used within a ToasterProvider')
    }
    return context
}
