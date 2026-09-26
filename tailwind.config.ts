import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#0066FF',
        'tech-emerald': '#00D97D',
        'tech-sapphire': '#001A4D',
        'tech-dark': '#0A0E27',
      },
      backdropBlur: {
        'xl': '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 102, 255, 0.1)',
        'glow': '0 0 20px rgba(0, 217, 125, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
