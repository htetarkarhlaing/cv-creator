/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./icons/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2EC39B",
				primary_hover: "#81F7D1",
				primary_bg: "#2ec39b1a",
				secondary: "#61678f",
				secondary_hover: "#f0f0f0",
				secondary_bg: "#f9f9fb",
				secondary_black: "#9e9e9e",
				warning: "#f9a825",
				warning_bg: "#f9a82529",
				error: "#e01e1e",
				error_bg: "#e01e1e29",
				success: "#5cd160",
			},
			fontSize: {
				md: "14px",
				sm: "13px",
			},
			fontFamily: {
				theme: ["Helvetica", "Montserrat", "system-ui"],
			},
			animation: {
				ripple: "ripple-effect 1000ms linear",
				fade: "all 500ms ease-in-out",
				shake: "shaker 500ms infinite",
			},
			keyframes: {
				"ripple-effect": {
					"0%": {
						display: "block",
						position: "absolute",
						width: "20px",
						height: "20px",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%) scale(1)",
						opacity: 0.3,
					},
					"100%": {
						position: "absolute",
						width: "20px",
						height: "20px",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%) scale(50)",
						opacity: 0.05,
					},
				},
				shaker: {
					"0%": {
						transform: "rotate(0deg) scale(0.5)",
					},
					"30%": {
						transform: "rotate(30deg) scale(0.5)",
					},
					"60%": {
						transform: "rotate(0deg) scale(0.5)",
					},
					"90%": {
						transform: "rotate(-30deg) scale(0.5)",
					},
					"100%": {
						transform: "rotate(0deg) scale(0.5)",
					},
				},
			},
		},
	},
	plugins: [],
};
