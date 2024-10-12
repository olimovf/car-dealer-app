import { notFound } from 'next/navigation';
import { fetchVehicleModels, staticParams } from '@/app/utils/api';
import VehicleModelCard from '@/app/components/VehicleModelCard';
import Link from 'next/link';

export async function generateStaticParams() {
  return await staticParams();
}

export default async function ResultPage({ params }: { params: StaticParamsType }) {
  const { makeId, year } = params;

  if (!makeId || !year) {
    notFound();
  }

  const modelsData = await fetchVehicleModels(makeId, year);

  if (!modelsData) {
    notFound();
  }

  if (!modelsData.Results.length) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-5">
        <h1 className="mb-4 text-2xl font-semibold">No Vehicle Models Found</h1>
        <p className="mb-2 text-gray-600">
          Unfortunately, there are no vehicle models available for Make ID {makeId} in {year}.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-50 p-5">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Vehicle Models for Make ID {makeId} in {year}
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {modelsData.Results.map((model) => (
          <VehicleModelCard key={model.Model_ID} modelName={model.Model_Name} />
        ))}
      </div>
    </div>
  );
}
