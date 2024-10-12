'use client';
import { useState, useEffect } from 'react';
import { fetchVehicleMakes } from './utils/api';
import Link from 'next/link';
import { YEARS } from './utils/constants';

export default function Home() {
  const [makes, setMakes] = useState<MakeType[]>([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const isNextEnabled = !!selectedMake && !!selectedYear;

  useEffect(() => {
    const loadVehicleMakes = async () => {
      const data = await fetchVehicleMakes();
      if (data) {
        setMakes(data.Results);
      }
    };

    loadVehicleMakes();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-5">
      <div className="flex max-w-96 flex-col items-center gap-4">
        <h1 className="mb-2 text-center text-3xl font-bold">Select a Car Make and Model Year</h1>

        <div className="w-full">
          <label htmlFor="make" className="block text-sm font-medium text-gray-700">
            Vehicle Make
          </label>
          <select
            id="make"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
          >
            <option value="">Select a Make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Model Year
          </label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
          >
            <option value="">Select a Year</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <Link href={`/result/${selectedMake}/${selectedYear}`} passHref>
            <button
              className={`mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white shadow transition duration-300 ease-in-out hover:bg-blue-600 ${
                !isNextEnabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isNextEnabled}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
