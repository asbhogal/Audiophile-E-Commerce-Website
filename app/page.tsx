import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Featured from "@/components/blocks/Featured";
import Hero from "@/components/blocks/Hero";
import { client } from "@/sanity/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audiophile | Home",
  description: "Browse a range of high-end tech",
};

type Categories = {
  _id: string;
  title: string;
  slug: string;
  images: Record<string, string>;
};

export default async function Home() {
  const categories = await client.fetch<Categories[]>('*[_type == "category"]');

  console.log(categories);
  return (
    <>
      <h1 className="sr-only">Audiophile - Home</h1>
      <div className="flex flex-col gap-6">
        <Hero />
        <div className="mt-[100vh]">
          <Categories />
        </div>
        <Featured />
        <CTA />
      </div>
    </>
  );
}
