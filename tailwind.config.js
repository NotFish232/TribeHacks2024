/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/*.html", "./static/js/*.js"],
    theme: {
        extend: {
            colors: {
                "theme-artic": "#b0c0c7",
                "theme-steel": "#3a6383",
                "theme-slate": "#2f4253",
                "theme-prussian": "#15212d",
                "theme-bronze": "#d09a6e"
            }
        }
    },
    plugins: [],
}