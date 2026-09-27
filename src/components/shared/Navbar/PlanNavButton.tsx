'use client';

import Link from "next/link";
import { useExercise } from "@/context/ExerciseContext";

const PlanNavButton = () => {

    const { plan } = useExercise();

    return (
        <Link
            href="/myPlan?tab=today"
            className="flex items-center gap-2 text-sm font-medium text-gray-300"
        >
            <span className="font-inter">Plan</span>

            <span className="bg-[#a3e635] text-black font-bold px-2 py-0.5 rounded-full text-xs min-w-5 text-center">
                {plan.length}
            </span>
        </Link>
    );
};

export default PlanNavButton;