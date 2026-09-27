import Image from 'next/image';
import Link from 'next/link';
import banner from '@/assets/banner.png'

const Banner = () => {
  return (
    <section className="bg-[#121418] text-white rounded-3xl p-8 md:p-12 lg:p-16 my-6 mx-4 md:mx-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        

        <div className="lg:col-span-7 space-y-6">

          <span className="text-[#a3e635] font-inter text-xs md:text-sm font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>


          <h1 className="text-4xl font-oswald sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.1]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>


          <p className="text-gray-400 font-inter text-base md:text-lg max-w-xl leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>


          <div className="pt-2">
            <Link
              href="/theLibrary"
              className="inline-block font-inter bg-[#a3e635] hover:bg-[#8ed622] text-black font-extrabold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>


        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-75 sm:h-100 md:h-112.5">
            <Image
              src={banner} 
              alt="Gym Workout Machine Illustration"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;