/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                fluid: "repeat(auto-fit, minmax(250px,1fr))",
            },
            boxShadow: {
                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
                neo: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
            },
        },
    },
};
