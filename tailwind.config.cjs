/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#526eff',
                brandHover: '#3652e3',
                brandActive: '#233fd1',
                errorEasy: 'rgba(242,202,202,0.72)',
                errorJuice: '#db524e',
                attentionEasy: 'rgba(255,215,96,0.24)',
                attentionJuice: '#db524e',
                successEasy: 'rgba(90, 205, 102, 0.24)',
                successJuice: '#5acd66',
                link: '#0086FF',
                linkHover: '#0068C6',
                submarineEasy: '#FAF8F3',
                submarineJuice: '#FFCC81',
                lightBlue: { 100: '#f5f7f9', 200: '#dfe5ec', 300: '#c8d4df' },
            },
            dropShadow: {
                '3xl': [
                    '0 0 5px rgba(0,0,0,0.19)',
                    ' 0 0 1px rgba(0,0,0,0.23)',
                ],
            },
        },
    },
    plugins: [],
}
