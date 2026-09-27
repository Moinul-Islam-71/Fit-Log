"use client";

import React, { useState } from 'react';
import { Exercise } from '@/types/exercises.type';
import { useExercise } from '@/context/ExerciseContext';
import SelectedExerciseCard from '@/components/myPlanPage/SelectedExerciseCard';
import { useSearchParams } from 'next/navigation';

export default function WorkoutDashboard() {
  const { plan, savedPlan } = useExercise();

  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>(
    tab === 'today' ? 'today' : 'saved'
  );

  const [sortBy, setSortBy] = useState<string | null>(null);

  const sortSelectedExercises = (exercises: Exercise[]) => {
    if (!sortBy) {
      return exercises;
    }

    return [...exercises].sort((a, b) => {
      if (sortBy === 'Duration') {
        return a.duration - b.duration;
      }

      if (sortBy === 'Calorie') {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return 0;
    });
  };

  const sortedTodaysPlans = sortSelectedExercises(plan);
  const sortedSavedLaterPlans = sortSelectedExercises(savedPlan);

  const exercises =
    activeTab === 'today'
      ? sortedTodaysPlans
      : sortedSavedLaterPlans;;

  const totalExercises = exercises.length;

  const totalMinutes = exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = exercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <div className="w-full min-h-screen font-inter bg-[#0F1115] p-4 md:p-8 flex flex-col justify-between">
      <div>

        <h2 className="font-oswald text-4xl font-bold">
          MY PLAN
        </h2>

        <p className="text-gray-400 text-sm md:text-base mb-4">
          Cap of five lifts for today. Finish them, then load more.
        </p>


        <div className="w-full bg-[#12141a] text-white rounded-2xl p-6 md:p-8 mb-6 grid grid-cols-3 divide-x divide-gray-800">

          <div className="flex flex-col justify-center pr-4">
            <span className="text-gray-400 text-xs md:text-sm font-medium mb-1">
              Exercises
            </span>

            <span className="text-3xl font-oswald md:text-5xl font-black text-[#ccff00]">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col justify-center px-4 md:px-8">
            <span className="text-gray-400 text-xs md:text-sm font-medium mb-1">
              Minutes
            </span>

            <span className="text-3xl font-oswald md:text-5xl font-black text-white">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col justify-center pl-4 md:pl-8">
            <span className="text-gray-400 text-xs md:text-sm font-medium mb-1">
              Calories
            </span>

            <span className="text-3xl font-oswald md:text-5xl font-black text-white">
              {totalCalories}
            </span>
          </div>

        </div>


        <div className="w-full flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">


          <div className="bg-[#12141a] p-1.5 rounded-xl flex items-center self-start sm:self-auto">

            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'today'
                ? 'bg-[#222630] text-white shadow'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              {`Today's Plan`}
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'saved'
                ? 'bg-[#222630] text-white shadow'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Saved
            </button>

          </div>


          <div className="flex items-center space-x-2 self-end sm:self-auto">

            <span className="text-gray-400 text-sm font-medium">
              Sort By
            </span>

            <select
              value={sortBy ?? ''}
              onChange={(e) => setSortBy(e.target.value || null)}
              className="bg-[#12141a] text-white text-sm font-medium px-4 py-2.5 rounded-xl outline-none hover:bg-[#1c2029] transition-colors cursor-pointer"
            >
              <option value="">Category</option>
              <option value="Duration">Duration</option>
              <option value="Calorie">Calorie</option>
            </select>

          </div>

        </div>


        {exercises.length === 0 ? (

          <div className="w-full bg-[#0F1115] border-2 border-slate-800 rounded-2xl min-h-125 flex flex-col justify-center items-center p-6 text-center shadow-inner">

            <h2 className="text-2xl font-oswald md:text-3xl font-black text-white tracking-wider uppercase mb-2">
              NOTHING HERE YET
            </h2>

            <p className="text-gray-300 text-sm md:text-base max-w-md mb-6 font-medium">
              Browse the library and add a lift to get today moving.
            </p>

            <button className="bg-[#ccff00] text-black font-bold text-sm md:text-base px-6 py-3 rounded-full hover:bg-[#b3e600] active:scale-95 transition-all shadow-md">
              Go to workouts
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-4 w-full">

            {exercises.map((exercise) => (
              <SelectedExerciseCard
                key={exercise.id}
                exercise={exercise}
              />
            ))}

          </div>

        )}

      </div>
    </div>
  );
}

