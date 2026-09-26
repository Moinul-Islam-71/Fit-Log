import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Star } from 'lucide-react';
import { Exercise } from '@/types/exercises.type';

interface ExerciseProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  return (
    <Link
      href={`/theLibrary/${id}`}
      className="group bg-[#16191e] border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        
        <div className="relative w-full h-52 bg-[#0d0f12] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        
        <div className="p-5 space-y-3">
          
          <div className="flex flex-wrap gap-2">
            {muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#a3e635] font-inter text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          
          <h3 className="text-xl font-oswald font-black text-white uppercase tracking-tight group-hover:text-[#a3e635] transition-colors">
            {name}
          </h3>

          
          <p className="text-sm font-medium text-gray-400 font-inter">{equipment}</p>
        </div>
      </div>

      
      <div className="px-5 py-4 border-t font-inter border-gray-800/60 flex items-center gap-4 text-xs font-semibold text-gray-400">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{duration} min</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-gray-400" />
          <span>{caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-gray-400 fill-transparent" />
          <span>{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;