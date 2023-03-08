/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			inter: 'Inter, sans-serif',
			robotoMono: 'Roboto Mono, monospace',
			rubik: 'Rubik, sans-serif'
		},
		screens: {
			sm: '860px',
		},
		extend: {
			colors: {
				default: {
					red: '#FF0000',
					yellow: '#FFC700',
					white: '#fff',
					lightGray: '#D9D9D9',
					gray: '#757575',
					darkGray: '#3b3b3b',
					black: '#000'
				}
			}
		}
	},
	plugins: [],
}
