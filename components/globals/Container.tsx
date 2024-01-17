import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[120rem] w-full mx-auto px-6 sm:px-10 lg:px-8 pt-10 pb-[7.5rem] py-4 lg:pb-[12.5rem]">
      {children}
    </main>
  );
}
