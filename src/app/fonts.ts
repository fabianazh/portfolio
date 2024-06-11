import {
    Poppins,
    Quicksand,
    Urbanist,
    DM_Sans,
    Unbounded,
} from 'next/font/google'

// export const poppins = Poppins({
//     subsets: ['latin'],
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//     display: 'swap',
// })

// export const quicksand = Quicksand({
//     subsets: ['latin'],
//     weight: ['300', '400', '500', '600', '700'],
//     display: 'swap',
// })

export const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const unbounded = Unbounded({
    subsets: ['cyrillic'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
})
