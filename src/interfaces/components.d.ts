interface TextInput {
    type: string
    id: string
    className?: string
    label: string
    placeholder: string
}

interface TextareaInput {
    id: string
    className?: string
    label: string
    placeholder: string
}

interface ToasterContext {
    messages: { id: number; message: string; type: 'success' | 'error' }[]
    addMessage: (message: string, type: 'success' | 'error') => void
    removeMessage: (id: number) => void
}
