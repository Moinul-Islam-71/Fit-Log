import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0c0e] border-t border-gray-800/60 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image 
            src={logo}
            alt='logo'
            height={20}
            width={20}
          />
          <span className="text-white font-black tracking-widest text-lg uppercase">
            FITLOG
          </span>
        </Link>

        
        <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide text-center md:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;