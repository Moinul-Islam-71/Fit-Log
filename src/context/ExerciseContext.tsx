'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Exercise } from '@/types/exercises.type';

type UpdatePlan = (newPlan: Exercise[]) => void;

type ExerciseContextType = {
    plan: Exercise[];
    setPlan: UpdatePlan;
    savedPlan: Exercise[];
    setSavedPlan: UpdatePlan;
    isLoaded: boolean;
    setIsLoaded: (value: boolean) => void;
};

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Exercise[]>([]);
    const [savedPlan, setSavedPlan] = useState<Exercise[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);


    const delay = (ms: number) => 
        new Promise((resolve) => setTimeout(resolve, ms));


    // Load data from localStorage (only once)
    useEffect(() => {
        const loadFromLocalStorage = async () => {
            try {
                await delay(500);

                const storedPlan = localStorage.getItem('fitlog-plan');
                const storedSavedPlan = localStorage.getItem('fitlog-savedPlan');


                if (storedPlan) {
                    setPlan(JSON.parse(storedPlan));
                }

                if (storedSavedPlan) {
                    setSavedPlan(JSON.parse(storedSavedPlan));
                }
            } catch (error) {
                console.error('Failed to load from localStorage:', error);
            } finally {
                setIsLoaded(true);
            }
        };

        loadFromLocalStorage();
    }, []);

    // Persist plan (only after hydration)
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem('fitlog-plan', JSON.stringify(plan));
    }, [plan, isLoaded]);

    // Persist savedPlan (only after hydration)
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem('fitlog-savedPlan', JSON.stringify(savedPlan));
    }, [savedPlan, isLoaded]);

    const sharedProps = {
        plan,
        setPlan,
        savedPlan,
        setSavedPlan,
        isLoaded,
        setIsLoaded
    };

    return (
        <ExerciseContext.Provider value={sharedProps}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;

export const useExercise = () => {
    const context = useContext(ExerciseContext);

    if (!context) {
        throw new Error('useExercise must be used within an ExerciseProvider');
    }

    return context;
};