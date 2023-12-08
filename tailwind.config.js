/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./renderer/interfaces/**/*.{js,ts,jsx,tsx,mdx}",
		"./renderer/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./renderer/components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./renderer/utils/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
