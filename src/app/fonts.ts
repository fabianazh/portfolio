import { Urbanist, DM_Sans, Inter_Tight } from 'next/font/google'

import LocalFont from 'next/font/local'

export const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const inter = Inter_Tight({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const mona = LocalFont({
    src: './fonts/Mona-Sans.woff2',
    display: 'swap',
})
