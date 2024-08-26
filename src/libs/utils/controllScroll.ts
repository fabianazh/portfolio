export function disableScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.classList.add('overflow-hidden')
}

export function enableScroll() {
    const scrollY = Math.abs(parseInt(document.body.style.top, 10))
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.classList.remove('overflow-hidden')
    window.scrollTo(0, scrollY)
}
