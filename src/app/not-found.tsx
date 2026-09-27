import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-[#0F1115] font-inter flex flex-col items-center justify-center p-6 text-center">
      

      <h1 className="font-oswald text-8xl md:text-9xl font-black text-[#ccff00] tracking-tighter mb-2">
        404
      </h1>


      <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
        Page Not Found
      </h2>


      <p className="text-gray-400 text-base md:text-lg max-w-md mb-8">
        Looks like this page skipped leg day.  
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>


      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-[#ccff00] text-black font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-[#b3e600] active:scale-95 transition-all shadow-md"
        >
          Go to Workouts
        </Link>

        <Link
          href="/my-plan"
          className="bg-[#12141a] text-white font-medium text-sm md:text-base px-8 py-3.5 rounded-full border border-gray-700 hover:bg-[#1c2029] active:scale-95 transition-all"
        >
          My Plan
        </Link>
      </div>


      <p className="text-gray-600 text-xs mt-12">
        FitLog • Stay consistent
      </p>
    </div>
  );
};

export default NotFound;