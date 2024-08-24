export const perspectiveItemVariant = {
    initial: {
        opacity: 0,
    },
    enter: (i: number) => ({
        transition: { delay: 0.5 + i * 0.1 },
        opacity: 1,
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
}

export const perspectiveVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.4,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
}

export const overlayVariant = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.3,
            duration: 0.3,
        },
    },
}
