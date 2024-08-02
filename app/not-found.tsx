import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-5xl font-bold">Page Not Found</h2>
      <p className="mt-[20px]">
        <Link
          href="/"
          className="inline-block py-[14px] px-[34px] bg-blue-500 rounded-xl text-[20px] text-[#fff] font-bold"
        >
          Go Home
        </Link>
      </p>
    </div>
  );
}
