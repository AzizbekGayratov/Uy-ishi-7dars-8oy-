import React from "react";

export default function layout({
  children,
  users,
  products,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  products: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grow flex gap-[20px]">
      {children}
      {users}
      {products}
    </div>
  );
}
