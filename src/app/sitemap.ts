export default async function sitemap() {
    let routes = ['', '/projects'].map((route) => ({
        url: `https://fabianazh.vercel.app${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes]
}
