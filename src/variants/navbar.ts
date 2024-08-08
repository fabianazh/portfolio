export const navContainerVariant = {
    open: {
        width: 'auto',
        height: 'auto',
        top: -10,
        right: -15,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
        },
        opacity: 100,
    },
    closed: {
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        padding: 0,
        transition: {
            duration: 0.5,
            delay: 0.35,
            ease: [0.76, 0, 0.24, 1],
        },
        opacity: 0,
    },
}

export const perspectiveTextVariant = {
    initial: {
        opacity: 0,
    },
    enter: (i: number) => ({
        transition: { delay: 0.5 + i * 0.1 },
        opacity: 1,
    }),
    exit: {
        opacity: 0,
    },
}

export const overlayVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        transition: { delay: 0.3 },
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}
