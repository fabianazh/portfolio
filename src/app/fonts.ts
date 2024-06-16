import {
    Poppins,
    Quicksand,
    Urbanist,
    DM_Sans,
    Unbounded,
} from 'next/font/google'

import LocalFont from 'next/font/local'

export const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const mona = LocalFont({
    src: './fonts/Mona-Sans.woff2',
    display: 'swap',
})
