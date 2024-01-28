const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
	content: [
		"./*/*.{html,js, jsx, ts, tsx, md, mdx}",
		"./src/*/*.{html,js, jsx, ts, tsx, md, mdx}",
		"./src/*/*/*.{html,js, jsx, ts, tsx, md, mdx}",
		"./src/components/*.{js, jsx, ts, tsx}",
	],
	theme: {
		colors: {
			sky: {
				50: "#f0f9ff",
				100: "#e0f2fe",
				200: "#bae6fd",
				300: "#7dd3fc",
				400: "#38bdf8",
				500: "#0ea5e9",
				600: "#0284c7",
				700: "#0369a1",
				800: "#075985",
				900: "#0c4a6e",
			},
		},
		fontFamily: {
			sans: ["Open Sans", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
});