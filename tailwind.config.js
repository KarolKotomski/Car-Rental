/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
    },
    
    container: {
      center: true,
    },
    
		extend: {
			colors: {
				orange: "#ff4d30",
				gray: "#2d2d2d",
				gray2: "#706f7b",
				gray3: "#ECECEC",
			},
		},
	},
	plugins: [],
};