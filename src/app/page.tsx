import { Suspense } from 'react';
import Banner from '@/components/homepage/Banner';
import Library from '@/components/homepage/Library';


function LibrarySkeleton() {
  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8 animate-pulse">
        <div className="h-8 w-48 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 w-72 bg-gray-700 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-[#12141a] rounded-2xl overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-gray-800"></div>
            <div className="p-5 space-y-3">
              <div className="h-5 w-3/4 bg-gray-700 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
              <div className="flex gap-3 pt-2">
                <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const page = () => {
  return (
    <div>
      <Banner />


      <Suspense fallback={<LibrarySkeleton />}>
        <Library />
      </Suspense>
    </div>
  );
};

export default page;