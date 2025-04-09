/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'animate-laser',
      'font-semibold',
      'font-medium',
      'text-[#E6FFE5]',
      'text-[#7FFFD4]',
      'text-[#B388FF]',
      'text-[#FFB6C1]',
      'text-[#00FFC6]',
      'text-[#C2FFAD]',
      'text-[#B0FFFF]',
      'text-[#B0FFB0]',
      'text-[#FFD580]',
      'text-[#80FFEA]',
      'text-[#C5E1A5]',
      'text-[#B2EBF2]',
      'text-[#e0e0e0]',
      'whitespace-nowrap',
      'inline-flex',
      'inline-block',
      'scroll-smooth',
      'snap-x',
      'snap-mandatory',
      'snap-center',
    ],
    theme: {
      extend: {
        animation: {
          laser: 'laserFlow 2.5s linear infinite',
        },
        keyframes: {
          laserFlow: {
            '0%': { transform: 'translateY(-100%)', opacity: '0.1' },
            '50%': { opacity: '0.3' },
            '100%': { transform: 'translateY(100%)', opacity: '0.1' },
          },
        },
      },
    },
    plugins: [],
  };
  