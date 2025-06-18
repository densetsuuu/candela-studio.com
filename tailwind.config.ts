import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            keyframes: {
                'blob': {
                    '0%': {transform: 'translate(0px, 0px) scale(1)'},
                    '33%': {transform: 'translate(30px, -20px) scale(1.05)'},
                    '66%': {transform: 'translate(-20px, 20px) scale(0.95)'},
                    '100%': {transform: 'translate(0px, 0px) scale(1)'},
                },
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'blob': 'blob 20s infinite ease-in-out',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
};
export default config;
