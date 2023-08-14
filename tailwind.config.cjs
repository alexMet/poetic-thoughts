/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#3f4756",
				secondary: "#ffedcb",
			},
		},
	},
	plugins: [],
}
