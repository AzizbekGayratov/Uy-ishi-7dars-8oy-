import GoBack from "@/components/GoBack";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await res.json();
  return (
    <div className="min-h-screen grow py-[20px] pr-[20px] min-w-[450px]">
      <div className="h-full shadow-2xl p-[20px] rounded-box">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-3xl font-bold mb-[20px]">{data.title}</h3>
            <p className="text-[20px] font-medium mb-[30px]">
              {data.description}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-5xl font-medium">{data.price}$</p>
              <Image
                src={`${data.image}`}
                alt={data.title}
                width={200}
                height={200}
                className="border p-[20px] rounded-box"
              />
            </div>
          </div>
          <GoBack />
        </div>
      </div>
    </div>
  );
};

export default page;
