import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Featured from "@/components/blocks/Featured";
import Hero from "@/components/blocks/Hero";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Audiophile - Home</h1>
      <div className="flex flex-col gap-6">
        <Hero />
        <Categories />
        <Featured />
        <CTA />
      </div>
    </>
  );
}
