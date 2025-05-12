module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f0',
          100: '#dceedc',
          200: '#bfd9bf',
          300: '#93c293',
          400: '#66ab66',
          500: '#4a9d4a',
          600: '#2E7D32', // Main primary color
          700: '#266529',
          800: '#204e20',
          900: '#1c3f1c',
        },
        secondary: {
          50: '#f6f3f1',
          100: '#e8e0db',
          200: '#d4c3b8',
          300: '#bda695',
          400: '#a68977',
          500: '#8D6E63', // Main secondary color
          600: '#715750',
          700: '#5a463f',
          800: '#42332e',
          900: '#2d231f',
        },
        accent: {
          50: '#f0f9ed',
          100: '#dbefd2',
          200: '#bfdeab',
          300: '#9ccd7e',
          400: '#78ba50',
          500: '#66BB6A', // Main accent color
          600: '#518f4e',
          700: '#3c6a3a',
          800: '#2b4c2a',
          900: '#1d321b',
        },
        error: {
          500: '#ef4444',
        },
        warning: {
          500: '#f59e0b',
        },
        success: {
          500: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};