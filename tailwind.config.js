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
			padding: {
				DEFAULT: "1rem",
				lg: "2rem",
			},
		},

		extend: {
			colors: {
				orange: "#ff4d30",
				"orange-hvr": "#f5471b",
				gray: "#2d2d2d",
				gray2: "#706f7b",
				gray3: "#ECECEC",
				gray4: "#f8f8f8",
			},

			backgroundImage: {
				booking: "url('images/book-car/book-bg.png')",
				choose: "url('images/chooseUs/bg.png')",
				download: "url('images/banners/bg02.png')",
				faq: "url('images/faq/car.png')",
			},
		},
	},
	plugins: [],
};
