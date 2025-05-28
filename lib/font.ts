import localFont from 'next/font/local';

// Optimisation du chargement des polices
export const geist = localFont({
  src: [
    {
      path: '../public/fonts/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
  // Optimisation pour réduire les Layout Shifts (Cumulative Layout Shift)
  declarations: [
    { prop: 'ascent-override', value: '90%' },
    { prop: 'descent-override', value: '10%' },
    { prop: 'line-gap-override', value: '0%' },
  ],
});