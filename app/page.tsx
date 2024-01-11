import CTA from "@/components/CTA";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Audiophile - Home</h1>
      <div className="flex flex-col gap-6">
        <Categories />
        <CTA />
      </div>
    </>
  );
}
