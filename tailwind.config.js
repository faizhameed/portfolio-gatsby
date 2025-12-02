/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // A vibrant indigo/blue-purple
        'background-light': '#FFFFFF',
        'background-dark': '#0A0A0A',
        'surface-light': '#F9FAFB', // A very light gray for sections
        'surface-dark': '#111111',  // A very dark gray for sections
        'subtle-light': '#6B7280', // Muted text for light mode
        'subtle-dark': '#9CA3AF',   // Muted text for dark mode
        'heading-light': '#111827',
        'heading-dark': '#F9FAFB',
        'border-light': '#E5E7EB',
        'border-dark': '#27272A',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
    },
  },
  plugins: [],
}

