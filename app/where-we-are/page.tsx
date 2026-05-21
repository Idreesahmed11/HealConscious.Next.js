'use client';
import Link from 'next/link';

export default function WhereWeAre() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">

      <div className="w-full max-w-2xl mx-auto mb-10">
        <img
          src="/assets/404.png"
          alt="404"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-3">
          Opps! This Page Could Not Be Found!
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Sorry but the page you are looking for does not exist.
        </p>
      </div>

      <Link href="/home" className="border border-gray-300 text-gray-600 text-sm font-semibold uppercase px-8 py-3 rounded-full hover:bg-blue-100 hover:text-blue-600">
        Return To The Home Page
      </Link>

    </div>
  );
}