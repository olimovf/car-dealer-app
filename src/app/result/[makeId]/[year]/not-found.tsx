import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-5 text-center">
      <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
      <h2 className="mb-2 text-3xl font-semibold">Page Not Found</h2>
      <p className="mb-6 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white shadow transition duration-300 ease-in-out hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}
