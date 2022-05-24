const defaultTheme = require("tailwindcss/lib/public/default-theme");
module.exports     = {
	content: [
		"./src/**/*.jsx"
	],
	theme: {
		extend: {},
		colors: {
			'special-gray': '#F5F0F0',
			'red-400': '#F87171',
			'red-500': '#EF4444',
			'white': '#FFFFFF'
		},
		fontFamily: {
			lato: [ 'lato', 'sans-serif' ]
		}
	},
	plugins: []
};
