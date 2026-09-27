'use client';

import { Bookmark } from 'lucide-react';
import { useExercise } from '@/context/ExerciseContext';
import { Exercise } from '@/types/exercises.type';
import { toast } from 'react-toastify';

type SaveForLaterButtonProps = {
    exercise: Exercise;
};

const SaveForLaterButton = ({ exercise }: SaveForLaterButtonProps) => {

    const { savedPlan, setSavedPlan } = useExercise();
    const { plan } = useExercise();

    const onSave = () => {
        const alreadyAddedInPlan = plan.some(
            item => item.id === exercise.id
        );

        const alreadySavedForLater = savedPlan.some(
            item => item.id === exercise.id
        );

        if (alreadyAddedInPlan || alreadySavedForLater) {
            toast.info('This exercise is already added!');
            return;
        }


        setSavedPlan([...savedPlan, exercise]);

        toast.success(`${exercise.name} saved for later!`);
    };

    return (
        <button
            onClick={onSave}
            className="bg-transparent hover:bg-gray-800/50 hover:border-gray-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-900/30 active:scale-[0.98] border border-gray-800 text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm uppercase"
        >
            <Bookmark className="w-4 h-4 text-white stroke-[2.5]" />
            Save for later
        </button>
    );
};

export default SaveForLaterButton;

