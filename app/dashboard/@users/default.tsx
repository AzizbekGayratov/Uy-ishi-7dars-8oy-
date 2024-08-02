import Link from "next/link";
import React from "react";

interface UserProp {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  username: string;
  phone: string;
  website: string;
}

export default async function UsersPage() {
  const users = await fetch("https://fakestoreapi.com/users");
  if (!users.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await users.json();

  return (
    <div className="min-h-screen grow py-[20px] pl-[20px] min-w-[450px]">
      <div className="h-full shadow-2xl p-[20px] rounded-box">
        <h2 className="text-2xl font-bold mb-[14px]">Users:</h2>
        <ul className="flex flex-col gap-[10px] pl-[16px] pr-[24px]">
          {data.map((user: UserProp) => (
            <li key={user.id}>
              <Link
                href={`/dashboard/${user.id}`}
                className="w-full block py-[8px] px-[16px] shadow-md hover:bg-slate-300 hover:text-neutral-900 transition-all rounded-lg hover:underline"
              >
                <p>
                  {user.name.firstname} {user.name.lastname}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
