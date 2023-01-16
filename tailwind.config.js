/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f5f9fa',
                    100: '#def1fc',
                    200: '#b9def8',
                    300: '#8abdee',
                    400: '#5b97e0',
                    500: '#4674d3',
                    600: '#3a58c0',
                    700: '#2e429d',
                    800: '#202d72',
                    900: '#131b49',
                },
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
}
