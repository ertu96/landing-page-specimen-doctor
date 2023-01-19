/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#E4F7F8',
                    100: '#CCEEF2',
                    200: '#9CD7E5',
                    300: '#6CB9D8',
                    400: '#3B94CB',
                    500: '#2A669F',
                    600: '#234B83',
                    700: '#1B3366',
                    800: '#14204A',
                    900: '#0C102E',
                },
                secondary: {
                    50: '#C5E9E4',
                    100: '#B6E3DD',
                    200: '#99D8CF',
                    300: '#7BCDC1',
                    400: '#5DC1B3',
                    500: '#44B2A2',
                    600: '#34897D',
                    700: '#256158',
                    800: '#153833',
                    900: '#06100E',
                },
                accent: {
                    50: '#EFD8FD',
                    100: '#E7C5FB',
                    200: '#D79EF9',
                    300: '#C778F7',
                    400: '#B751F4',
                    500: '#A72BF2',
                    600: '#8B0DD8',
                    700: '#690AA3',
                    800: '#47076E',
                    900: '#250439',
                },
                gray: {
                    DEFAULT: '#738D9F',
                    50: '#E0E6EA',
                    100: '#D4DCE1',
                    200: '#BCC8D1',
                    300: '#A3B4C0',
                    400: '#8BA1B0',
                    500: '#738D9F',
                    600: '#597181',
                    700: '#425460',
                    800: '#2B373F',
                    900: '#141A1D',
                },
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
}
