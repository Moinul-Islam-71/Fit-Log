import React from "react";

const ExerciseDetailsLoadingPage = () => {
  return (
    <div className="min-h-screen font-inter bg-[#0d0f12] text-white py-8 px-4 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-[#0d0f12] p-4 md:p-8 rounded-3xl animate-pulse">
        

        <div className="relative w-full aspect-square md:aspect-4/5 rounded-3xl overflow-hidden bg-gray-800"></div>


        <div className="space-y-6 flex flex-col justify-between h-full">
          <div>

            <div className="h-10 w-3/4 bg-gray-700 rounded mb-4"></div>


            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-gray-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-700 rounded"></div>
            </div>


            <div className="flex flex-wrap gap-2 mb-6">
              <div className="h-7 w-20 bg-gray-700 rounded-full"></div>
              <div className="h-7 w-24 bg-gray-700 rounded-full"></div>
              <div className="h-7 w-16 bg-gray-700 rounded-full"></div>
            </div>


            <div className="bg-[#121418] border border-gray-800/80 rounded-2xl overflow-hidden divide-y divide-gray-800/60 mb-8">
              {[...Array(7)].map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-5 py-3"
                >
                  <div className="h-4 w-24 bg-gray-700 rounded"></div>
                  <div className="h-4 w-16 bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>


            <div className="space-y-3 mb-8">
              <div className="h-5 w-32 bg-gray-700 rounded"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="h-4 w-4 bg-gray-700 rounded"></div>
                    <div className="h-4 flex-1 bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="h-12 flex-1 bg-gray-700 rounded-xl"></div>
            <div className="h-12 flex-1 bg-gray-700 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailsLoadingPage;