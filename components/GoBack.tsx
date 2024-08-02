"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const GoBack = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/dashboard")}
      className="max-w-[200px] cursor-pointer flex items-center gap-[6px] text-[#5865E8] font-semibold border border-[#5865E8] px-[44px] py-[6px] rounded-3xl hover:bg-[#5865E8] hover:text-white transition-colors mb-[20px]"
    >
      <IoMdArrowRoundBack /> Go back
    </div>
  );
};

export default GoBack;
