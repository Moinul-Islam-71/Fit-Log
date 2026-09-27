'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Exercise } from '@/types/exercises.type';

type UpdatePlan = (newPlan: Exercise[]) => void;

type ExerciseContextType = {
    plan: Exercise[];
    setPlan: UpdatePlan;
    savedPlan: Exercise[];
    setSavedPlan: UpdatePlan;
};

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Exercise[]>([]);
    const [savedPlan, setSavedPlan] = useState<Exercise[]>([]);

    const sharedProps = {
        plan,
        setPlan,
        savedPlan,
        setSavedPlan,
    }

    return (
        <ExerciseContext.Provider value={ sharedProps }>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;

export const useExercise = () => {
    const context = useContext(ExerciseContext);

    if (!context) {
        throw new Error(
            'useExercise must be used within an ExerciseProvider'
        );
    }

    return context;
};