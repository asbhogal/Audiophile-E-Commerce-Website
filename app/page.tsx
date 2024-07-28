import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Featured from "@/components/blocks/Featured";
import Hero from "@/components/blocks/Hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  description: "Browse a range of high-end tech",
  title: "Audiophile | Home",
};

export default async function Home() {
  return (
    <React.Fragment>
      <h1 className="sr-only">Audiophile - Home</h1>
      <div className="flex flex-col gap-6">
        <Hero />
        <div className="mt-[100vh]">
          <Categories />
        </div>
        <Featured />
        <CTA />
      </div>
    </React.Fragment>
  );
}
