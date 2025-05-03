/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0176d3',
          dark: '#005fb7',
          light: '#e5f0ff',
        },
        secondary: {
          DEFAULT: '#00b386',
          dark: '#009670', 
          light: '#e6fff7',
        },
        accent: {
          DEFAULT: '#ff6b35',
          light: '#ffece6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 5px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'hard': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};