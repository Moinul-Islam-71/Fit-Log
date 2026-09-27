'use client';

import { Calendar } from 'lucide-react';
import { useExercise } from '@/context/ExerciseContext';
import { Exercise } from '@/types/exercises.type';
import { toast } from 'react-toastify';

type AddToPlanButtonProps = {
    exercise: Exercise;
};

const AddToPlanButton = ({ exercise }: AddToPlanButtonProps) => {
    const { plan, savedPlan, setPlan } = useExercise();

    const onAddToPlan = () => {
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

        if(plan.length >= 5) {
            toast.error("Limit Exceeded");
            return
        }

        setPlan([...plan, exercise]);

        toast.success(`${exercise.name} added to today's plan!`);
    };

    return (
        <button
            onClick={onAddToPlan}
            className="flex-1 bg-[#a3e635] hover:bg-[#8ee011] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(163,230,53,0.35)] active:scale-[0.98] text-black font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm uppercase"
        >
            <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
            {`Add to today's plan`}
        </button>
    );
};

export default AddToPlanButton;