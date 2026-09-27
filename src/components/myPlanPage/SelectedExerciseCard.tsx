'use client';

import { useState } from 'react';
import { Exercise } from '@/types/exercises.type';
import { useExercise } from '@/context/ExerciseContext';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function SelectedExerciseCard({
    exercise,
    listType,
}: {
    exercise: Exercise;
    listType: 'today' | 'saved';
}) {
    const { plan, savedPlan, setPlan, setSavedPlan } = useExercise();

    const [isDone, setIsDone] = useState(false);

    const removeCard = () => {
        if (listType === 'today') {
            setPlan(plan.filter(item => item.id !== exercise.id));
            toast.error(`${exercise.name} removed from today's plan!`);
        } else {
            setSavedPlan(savedPlan.filter(item => item.id !== exercise.id));
            toast.error(`${exercise.name} removed from saved exercises!`);
        }
    };

    const markAsDone = () => {
        if (isDone) return;

        setIsDone(true);
        toast.success(`${exercise.name} marked as done!`);
    };

    return (
        <div
            key={exercise.id}
            className="bg-[#10131d] border border-gray-800/60 rounded-2xl px-4 py-8 flex items-center justify-between gap-4 text-white"
        >
            <div className="flex items-center gap-4 flex-1 min-w-0">

                <div className="relative w-36 h-20 shrink-0 rounded-xl overflow-hidden">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold uppercase tracking-wide font-oswald text-white">
                        {exercise.name}
                    </h3>

                    <p className="text-gray-400 text-sm mt-0.5">
                        {exercise.equipment ||
                            (Array.isArray(exercise.muscleGroups)
                                ? exercise.muscleGroups.join(', ')
                                : exercise.muscleGroups)}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-300 font-medium">

                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
                            {exercise.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
                            {exercise.caloriesBurned} kcal
                        </span>

                        {exercise.rating && (
                            <span className="flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
                                {exercise.rating}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">

                <Link
                    href={`/theLibrary/${exercise.id}`}
                    className="px-4 py-2 text-sm font-medium text-gray-200 border border-gray-700 rounded-full hover:bg-gray-800/60 transition-colors"
                >
                    View Details
                </Link>

                {listType === 'today' && (
                    <button
                        onClick={markAsDone}
                        disabled={isDone}
                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full transition-colors ${isDone
                                ? 'bg-gray-700 text-gray-300 cursor-default'
                                : 'text-black bg-[#ccff00] hover:bg-[#b8e600]'
                            }`}
                    >
                        <Check className="w-4 h-4 stroke-3" />

                        {isDone ? 'Completed' : 'Mark as Done'}
                    </button>
                )}

                <button
                    onClick={removeCard}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}