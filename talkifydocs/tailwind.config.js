/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./public/**/*.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
          slideIn: {
              from: {
                opacity: '0',
                transform: 'translateY(-20%)',
              },
              to:{
                opacity: '1',
                transform: 'translateY(0)',
              },
          reflection: {
              "0%, 100%": {
              opacity: '0',
              transform: 'translateY(-20%)',
              filter: 'blur(5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)' // Slight white color

            },
            "50%": {
              opacity: '1',
              transform: 'translateY(0)',
              filter: 'blur(0)',
              backgroundColor: 'rgba(255, 255, 255, 0)' // Transparent white color
            },
          }
      },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slideIn": "slideIn 1s ease var(--slideIn-d, 0) forwards",
        "slideIn-500": "slideIn 1s ease 600ms forwards",
        "slideIn-700": "slideIn 1s ease 600ms forwards",
        "accordion-down": "accordion-down 1s ease 600ms",
        "accordion-up": "accordion-up 0.2s ease-out",
        "reflection": "reflection 1s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("flowbite/plugin")
  ],
};