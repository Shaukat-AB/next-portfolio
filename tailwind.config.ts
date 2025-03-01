import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "primary-light": "var(--primary-light)",
                dark: "var(--dark)",
                "border-gray": "var(--border-gray)",
            },
            fontFamily: {
                "sans": ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
                "mono": ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animated"),
    ],
} satisfies Config;
