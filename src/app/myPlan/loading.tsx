const MyPlanLoading = () => {
  return (
    <div className="w-full min-h-screen bg-[#0F1115] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-[#ccff00] border-t-transparent rounded-full animate-spin"></div>
      <h1 className="text-slate-200 text-2xl md:text-3xl font-oswald font-bold tracking-wide">
        Loading your plan...
      </h1>
    </div>
  );
};

export default MyPlanLoading;