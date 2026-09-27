import React from 'react';

const HomeLoadingPage = () => {
    return (
        <div className="w-full min-h-screen bg-[#0F1115]">


            <section className="bg-[#121418] text-white rounded-3xl p-8 md:p-12 lg:p-16 my-6 mx-4 md:mx-8 animate-pulse">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">


                    <div className="lg:col-span-7 space-y-6">

                        <div className="h-4 w-32 bg-gray-700 rounded"></div>


                        <div className="space-y-3">
                            <div className="h-10 md:h-14 w-full max-w-lg bg-gray-700 rounded"></div>
                            <div className="h-10 md:h-14 w-3/4 max-w-md bg-gray-700 rounded"></div>
                        </div>


                        <div className="space-y-2 max-w-xl">
                            <div className="h-4 w-full bg-gray-700 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
                            <div className="h-4 w-4/6 bg-gray-700 rounded"></div>
                        </div>


                        <div className="pt-2">
                            <div className="h-12 w-48 bg-gray-700 rounded-xl"></div>
                        </div>
                    </div>


                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="w-full max-w-md h-75 sm:h-100 md:h-112.5 bg-gray-800 rounded-2xl"></div>
                    </div>
                </div>
            </section>



            <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">

                {/* Title */}
                <div className="mb-8 animate-pulse">
                    <div className="h-8 w-48 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 w-64 bg-gray-700 rounded"></div>
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
        </div>
    );
};

export default HomeLoadingPage;