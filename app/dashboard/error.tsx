"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="min-h-screen grow py-[20px] pl-[20px] min-w-[450px]">
      <div className="h-full shadow-2xl p-[20px] rounded-box">
        <div className="h-full flex items-center justify-center">
          <div className="">
            <h2 className="text-2xl font-bold mb-[14px]">{error.message}</h2>
            <button
              onClick={() => reset()}
              className="inline-block px-[30px] py-[16px] bg-[#5865E8] rounded-2xl text-center text-[#f3f3f3] font-semibold "
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
