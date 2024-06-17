import { Urbanist, DM_Sans } from 'next/font/google'

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

export const mori = LocalFont({
    src: './fonts/PPMori-Regular.otf',
    display: 'swap',
})

export const mona = LocalFont({
    src: './fonts/Mona-Sans.woff2',
    display: 'swap',
})
