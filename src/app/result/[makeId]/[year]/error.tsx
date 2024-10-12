'use client';
export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 p-5">
      Error: {error.message}
    </div>
  );
}
