import Link from 'next/link';
import NavLink from '@/components/shared/Navbar/NavLink';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import PlanNavButton from './PlanNavButton';
import SavedNavButton from './SavedNavButton';

const links = (
  <>
    <li><NavLink href="/">Workouts</NavLink></li>
    <li><NavLink href="/myPlan">My Plan</NavLink></li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-[#0d0f12] text-white px-4 md:px-8 py-4 border-b border-gray-800">
      
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#16191e] rounded-box z-10 mt-3 w-48 p-2 shadow border border-gray-800"
          >
            {links}
          </ul>
        </div>

        
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-wider text-white hover:opacity-90">
          <Image src={logo} width={20} height={20} alt='logo' />
          <span>FITLOG</span>
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center items-center gap-3">
          {links}
        </ul>
      </div>

      
      <div className="navbar-end flex items-center gap-6">
        
        <PlanNavButton />

        <SavedNavButton />
        
      </div>
    </div>
  );
};

export default Navbar;