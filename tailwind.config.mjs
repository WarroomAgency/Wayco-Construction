/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A1430',
        ink: '#0F1A36',
        steel: '#1B2747',
        'steel-2': '#3B4663',
        blue: { DEFAULT: '#2747B0', hi: '#4B73F0', lo: '#1B3382', soft: '#DCE7FB' },
        silver: { DEFAULT: '#C4C9D2', 2: '#8E96A4', 3: '#5E6675' },
        bone: { DEFAULT: '#F4F6FA', 2: '#E8EDF6', 3: '#D5DDEC' },
        line: '#D7DEEB',
      },
      fontFamily: {
        display: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: { widest: '0.22em' },
      maxWidth: { content: '1320px', narrow: '1080px', prose: '68ch' },
      boxShadow: {
        soft: '0 1px 2px rgba(8,11,18,.05), 0 12px 30px rgba(8,11,18,.08)',
        lift: '0 4px 10px rgba(8,11,18,.08), 0 30px 60px rgba(8,11,18,.16)',
        glow: '0 12px 40px rgba(62,99,224,.45)',
      },
      fontSize: {
        hero: ['clamp(2.4rem, 5.4vw, 4.6rem)', { lineHeight: '1.03', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-lg': ['clamp(2rem, 4.4vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(1.6rem, 3vw, 2.3rem)', { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        eyebrow: ['0.72rem', { lineHeight: '1', letterSpacing: '0.22em', fontWeight: '600' }],
      },
      keyframes: {
        'fade-up': { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: { 'fade-up': 'fade-up .8s cubic-bezier(.16,1,.3,1) both', marquee: 'marquee 50s linear infinite' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
