import GoBack from "@/components/GoBack";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const res = await fetch(`https://fakestoreapi.com/users/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await res.json();
  return (
    <div className="min-h-screen grow py-[20px] pl-[20px] min-w-[450px]">
      <div className="h-full shadow-2xl p-[20px] rounded-box">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-5xl font-bold">{data.username}</h2>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                  <span className="text-3xl">User</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-[24px]">
              {data.name.firstname} {data.name.lastname}
            </h3>
            <p className="mt-[32px]">
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-[4px]"
              >
                <MdOutlineAlternateEmail className="inline" />
                {data.email}
              </a>
              <a
                href={`tel:${data.phone}`}
                className="flex items-center gap-[4px]"
              >
                <BsFillTelephoneFill className="inline" />
                {data.phone}
              </a>
            </p>
          </div>
          <GoBack />
        </div>
      </div>
    </div>
  );
};

export default page;
