export type Localizable = string | { [locale: string]: string }

export function localize(value: Localizable, locale = 'en') {
    if (!value) return ''
    if (typeof value === 'string') return value
    return value[locale] ?? value['en'] ?? Object.values(value)[0] ?? ''
}

export default localize
