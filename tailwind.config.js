/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				shadowAfterClick: {
					"0%": {
						filter: "drop-shadow(0 1px 1px 1px  #22c55e)",
						borderColor: "#6b7280",
					},
					"100%": {
						filter: "drop-shadow(0 0px 0px 0px #22c55e)",
						borderColor: "#22c55e",
					},
					"50%": {
						filter: "drop-shadow(0 2px 2px 2px  #22c55e)",
					},
				},
			},
		},
	},
	plugins: [],
}
