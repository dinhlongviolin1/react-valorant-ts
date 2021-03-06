module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        rotate: {
            "45": '45deg'
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
