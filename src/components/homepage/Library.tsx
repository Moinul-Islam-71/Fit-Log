import ExerciseCard from '@/components/homepage/ExerciseCard';
import { Exercise } from '@/types/exercises.type';
import Link from 'next/link'

const getExercises = async (): Promise<Exercise[]> => {
  try {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog', {
      next: {
        revalidate: 30
      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch exercises data');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching exercises data:', error);
    throw new Error('Failed to fetch exercises data');
  }
};

const Library = async () => {
  const exercises = await getExercises();

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link href="/theLibrary" className="text-2xl font-oswald md:text-3xl font-black uppercase tracking-tight text-white">
          THE LIBRARY
        </Link>
        <p className="text-gray-400 font-inter text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises?.slice(0, 6).map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};

export default Library;