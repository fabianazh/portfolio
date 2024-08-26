// import { getSession } from 'next-auth/react'

// const headers: { [key: string]: string } = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Cache-Control': 'no-cache',
//     Expires: '0',
// }

// const baseURL = process.env.NEXT_PUBLIC_API_URL
// const timeout = 60 * 1000

// export async function adminFetchInstance(
//     url: string,
//     options: RequestInit = {}
// ) {
//     try {
//         const session = await getSession()

//         const config: RequestInit = {
//             ...options,
//             headers: {
//                 ...headers,
//                 ...(session && {
//                     Authorization: `Bearer ${session.accessToken}`,
//                 }),
//                 ...options.headers,
//             },
//         }

//         const controller = new AbortController()
//         const id = setTimeout(() => controller.abort(), timeout)
//         config.signal = controller.signal

//         const response = await fetch(`${baseURL}${url}`, config)
//         clearTimeout(id)

//         if (!response.ok) {
//             const error = new Error(
//                 'An error occurred while fetching the data.'
//             )
//             ;(error as any).info = await response.json()
//             ;(error as any).status = response.status
//             throw error
//         }

//         return response.json()
//     } catch (error) {
//         if ((error as any).name === 'AbortError') {
//             console.error('Request timed out')
//         }
//         return Promise.reject(error)
//     }
// }
