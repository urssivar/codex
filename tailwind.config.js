/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./docs/**/*.md",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./.vitepress/**/*.{vue,js,ts,jsx,tsx}",
    ],
    prefix: 'tw-',
    theme: {
        extend: {},
    },
    plugins: [],
}
