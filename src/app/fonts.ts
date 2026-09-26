import { Oswald, Inter, Playfair_Display, Work_Sans } from 'next/font/google';

export const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald', // Defines the CSS variable name
});
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Defines the CSS variable name
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-worksans',
});