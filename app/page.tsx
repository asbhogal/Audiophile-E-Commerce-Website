import CTA from "@/components/CTA";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";

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
