import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-onyx text-center px-6">
      <h1 className="text-7xl md:text-9xl font-heading font-bold text-candy-blue">404</h1>
      <p className="mt-4 text-xl text-text-secondary">Page not found</p>
      <Link href="/" className="mt-8 inline-block px-8 py-3 bg-candy-blue text-onyx font-medium rounded-xl hover:bg-white transition-colors">
        Go back home
      </Link>
    </div>
  );
}
