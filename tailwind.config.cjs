const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      red: {
				'50': '#ffefef',
				'100': '#ffdcdc',
				'200': '#ffbfbf',
				'300': '#ff9293',
				'400': '#ff5455',
				'500': '#ff1f20',
				'600': '#ff0001',
				'700': '#db0001',
				'800': '#bb0001',
				'900': '#940809',
				'950': '#520000'
			},
			'cod-gray': {
				'50': '#f6f6f6',
				'100': '#e7e7e7',
				'200': '#d1d1d1',
				'300': '#b0b0b0',
				'400': '#888888',
				'500': '#6d6d6d',
				'600': '#5d5d5d',
				'700': '#4f4f4f',
				'800': '#454545',
				'900': '#3d3d3d',
				'950': '#121212'
			},
			transparent: 'transparent',
      current: 'currentColor',
			black: colors.black,
      white: colors.white
    },
    fontFamily: {
      sans: ['Satoshi', defaultTheme.fontFamily.sans],
    },
	},
	plugins: [],
}
