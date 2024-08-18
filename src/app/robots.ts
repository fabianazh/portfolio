import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
