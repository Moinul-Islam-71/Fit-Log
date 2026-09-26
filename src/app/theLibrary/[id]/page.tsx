import Image from 'next/image';
import { Calendar, Bookmark } from 'lucide-react';
import { Exercise } from '@/types/exercises.type';

const getExercise = async (id: string): Promise<Exercise> => {
  try {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, {
      next: {
        revalidate: 30,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch exercise details');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching exercise details:', error);
    throw new Error('Failed to fetch exercise details');
  }
};

export interface ExerciseDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ExerciseDetailsPage({ params }: ExerciseDetailsProps) {
  const { id } = await params;
  const exercise = await getExercise(id);

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = exercise;

  const stats = [
    { label: 'EQUIPMENT', value: equipment },
    { label: 'DIFFICULTY', value: difficulty },
    { label: 'SETS', value: sets },
    { label: 'REPS', value: reps },
    { label: 'DURATION', value: `${duration} min` },
    { label: 'CALORIES', value: `${caloriesBurned} kcal` },
    { label: 'RATING', value: rating },
  ];

  return (
    <div className="min-h-screen font-inter bg-[#0d0f12] text-white py-8 px-4 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-[#0d0f12] p-4 md:p-8 rounded-3xl">
        
         
        <div className="relative w-full aspect-square md:aspect-4/5 rounded-3xl overflow-hidden bg-[#16191e]">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

         
        <div className="space-y-6 flex flex-col justify-between h-full">
          <div>
            
            <h1 className="text-3xl font-oswald md:text-4xl font-black uppercase tracking-tight text-white mb-2">
              {name}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {description}
            </p>

             
            <div className="flex flex-wrap gap-2 mb-6">
              {muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#a3e635] text-black font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>

             
            <div className="bg-[#121418] border border-gray-800/80 rounded-2xl overflow-hidden divide-y divide-gray-800/60 mb-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-5 py-3 text-xs md:text-sm"
                >
                  <span className="font-bold text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="font-semibold text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

             
            {instructions && instructions.length > 0 && (
              <div className="space-y-3 mb-8">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                  INSTRUCTIONS
                </h3>
                <ol className="space-y-3">
                  {instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="font-bold text-gray-400 select-none">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

           
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button className="flex-1 bg-[#a3e635] hover:bg-[#8ee011] text-black font-extrabold py-3.5 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm uppercase">
              <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
              {"Add to today's plan"}
            </button>
            <button className="bg-transparent hover:bg-gray-800/50 border border-gray-800 text-white font-extrabold py-3.5 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm uppercase">
              <Bookmark className="w-4 h-4 text-white stroke-[2.5]" />
              Save for later
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}