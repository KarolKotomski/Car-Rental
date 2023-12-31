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
				orangeLight: "#ffeae6",
				orangeShadow: "#ff533059",
				gray: "#2d2d2d",
				gray2: "#706f7b",
				gray3: "#ECECEC",
				gray4: "#f8f8f8",
			},

			backgroundImage: {
				banner: "url('images/banners/book-banner.png')",
				booking: "url('images/book-car/book-bg.png')",
				choose: "url('images/chooseUs/bg.png')",
				contact: "url('images/banners/bg-contact.png')",
				download: "url('images/banners/bg02.png')",
				faq: "url('images/faq/car.png')",
				header: "url('images/hero/heroes-bg.png')",
			},
		},
	},
	plugins: [],
};
