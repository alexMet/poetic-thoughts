/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#3f4756",
				secondary: "#ffedcb",
			},
			fontFamily: {
				sans: ['Comfortaa', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
