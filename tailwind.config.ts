import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                Button: `6px 6px 10px -1px rgba(0,0,0,0.15),
      -6px -6px 10px -1px rgba(255,255,255,0.7)`,
                Hover: `inset 4px 4px 6px -1px rgba(0,0,0,0.2),
        inset -4px -4px 6px -1px rgba(255,255,255,0.7),
        -0.5px -0.5px 0px rgba(255,255,255,1),
        0.5px 0.5px 0px rgba(0,0,0,0.15),
        0px 12px 10px -10px rgba(0,0,0,0.05)`,
            },
            colors: {
                Gray: {
                    100: '#F9FAFB',
                    200: '#FAFAFA',
                    300: '#D9CAB3',
                },
            },
        },
    },
    plugins: [],
}
export default config
