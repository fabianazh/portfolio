import z from 'zod'

export const mailSchema = z.object({
    name: z
        .string()
        .min(4, 'Name must be at least 4 characters long.')
        .max(64, 'Name must be at most 64 characters long.'),
    email: z.string().email().nonempty('Display email is required.'),
    message: z
        .string()
        .min(4, 'Message must be at least 4 characters long.')
        .max(255, 'Message must be at most 255 characters long.')
        .nonempty('Message is required.'),
})
