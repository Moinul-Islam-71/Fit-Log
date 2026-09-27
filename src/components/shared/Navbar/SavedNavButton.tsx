'use client';

import Link from "next/link";
import { useExercise } from "@/context/ExerciseContext";

const SavedNavButton = () => {

    const { savedPlan } = useExercise();

    return (
        <Link
            href="/myPlan?tab=saved"
            className="flex items-center gap-2 text-sm font-medium text-gray-300"
        >
            <span className="font-inter">Saved</span>

            <span className="border border-gray-600 text-gray-300 font-bold px-2 py-0.5 rounded-full text-xs min-w-5 text-center">
                {savedPlan.length}
            </span>
        </Link>
    );
};

export default SavedNavButton;