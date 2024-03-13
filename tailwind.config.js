/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			footer: '#171621',
		}),

		extend: {
			colors: {
				'cyno-yellow': '#F7B53F',
			},
		},
	},
	plugins: [],
};
