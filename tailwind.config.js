// tailwind.config.js
export const content = [
    "./src/**/*.{js,jsx,ts,tsx,html}",
];
export const theme = {
    extend: {
        colors: {
            "burnt-brown": "#8A3202",
        },
        animation: {
            "bounce-slow": "bounce 2s infinite",
        }
    },
};
export const plugins = [];
