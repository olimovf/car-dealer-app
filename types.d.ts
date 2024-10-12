type MakeType = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

type VehicleModelType = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

type APIResponseMakeType = {
  Count: number;
  Message: string;
  Results: MakeType[];
  SearchCriteria: string;
};

type APIResponseVehicleModelType = {
  Count: number;
  Message: string;
  Results: VehicleModelType[];
  SearchCriteria: string;
};

type StaticParamsType = {
  makeId: string;
  year: string;
};
