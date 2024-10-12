import { YEARS } from './constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchVehicleModels = async (
  makeId: string,
  year: string,
): Promise<APIResponseVehicleModelType | null> => {
  try {
    const res = await fetch(
      `${BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
    if (!res.ok) {
      throw new Error('Failed to fetch vehicle models');
    }
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const fetchVehicleMakes = async (): Promise<APIResponseMakeType | null> => {
  try {
    const res = await fetch(`${BASE_URL}/GetMakesForVehicleType/car?format=json`);
    if (!res.ok) {
      throw new Error('Failed to fetch vehicle makes');
    }
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const staticParams = async (): Promise<StaticParamsType[]> => {
  const data = await fetchVehicleMakes();
  if (!data) {
    return [];
  }

  const paths = data.Results.flatMap((make) => {
    return YEARS.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }));
  });

  return paths;
};
