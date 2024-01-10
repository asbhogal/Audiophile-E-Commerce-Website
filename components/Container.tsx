import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[69.375rem] w-full mx-auto px-6 sm:px-10 lg:px-0">
      {children}
    </main>
  );
}
