type VehicleModelProps = {
  modelName: string;
};

export default function VehicleModelCard({ modelName }: VehicleModelProps) {
  return (
    <div className="rounded bg-white p-5 shadow-md hover:shadow-lg">
      <h2 className="text-xl font-semibold">{modelName}</h2>
    </div>
  );
}
