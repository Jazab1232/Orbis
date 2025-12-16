const config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* BRAND */
                primary: "hsl(var(--primary))",
                "primary-light": "hsl(var(--primary-light))",
                "primary-dark": "hsl(var(--primary-dark))",
                foreground: "hsl(var(--foreground))",

                /* TEXT */
                "text-dark": "hsl(var(--text-dark))",
                "text-medium": "hsl(var(--text-medium))",
                "text-light": "hsl(var(--text-light))",

                /* NEUTRALS */
                muted: "hsl(var(--muted))",
                "muted-dark": "hsl(var(--muted-dark))",
                "muted-light": "hsl(var(--muted-light))",

                /* STATUS */
                success: "hsl(var(--success))",
                error: "hsl(var(--error))",
                warning: "hsl(var(--warning))",
                accent: "hsl(var(--accent))",

                /* BACKGROUND & CARDS */
                background: "hsl(var(--background))",
                card: "hsl(var(--card))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Manrope", "sans-serif"],
            },
            boxShadow: {
                default: "0 1px 3px rgba(0,0,0,0.06)",
                hover: "0 4px 12px rgba(0,0,0,0.1)",
            },
        },
    },
    plugins: [],
};

module.exports = config;
