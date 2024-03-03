import { client, urlFor } from "@/client";
import Divider from "@/components/blocks/Divider";
import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Heading from "@/components/blocks/Heading";
import Tagline from "@/components/blocks/Tagline";
import Link from "@/components/navigation/Link";
import { Earphones } from "@/lib/types/data/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Earphones | Audiophile",
  description: "Browse our range of high-end headphones, including limited releases and new ins",

}

export default async function Page() {

  const earphones = await client.fetch<Earphones[]>(
    `*[_type == "product" && category->name == "Earphones"]{_id, name, description, "desktopFeaturedImage": featuredImage[0].asset.asset._ref, "mobileFeaturedImage": featuredImage[0].asset.asset._ref, "featuredImageAlt": featuredImage[0].alt, "slug": slug.current, limited, featured}`
    )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 items-center justify-center py-12 px-10 rounded-lg bg-black">
        <Heading>Earphones</Heading>
        <Divider />
        <Tagline>
          From limited releases to new-ins, browse our range of top-of-the-line
          earphones, catered for both the casual, every-day commuter to those doing their morning jog
        </Tagline>
      </div>
      <section className="flex flex-col gap-6">
        {earphones.map((earphone, index) => {
          const desktopImageUrl = urlFor(earphone.desktopFeaturedImage).url();
          const mobileImageUrl = urlFor(earphone.mobileFeaturedImage).url();
          const common = {
            alt: earphone.featuredImageAlt,
            width: 800,
            height: 800,
          }

          return (
            <div key={earphone._id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className={`flex flex-col flex-1 text-center md:text-start md:items-start items-center justify-center gap-6 p-14 bg-black rounded-lg ${
                  index % 2 === 0 ? "md:order-1" : "order-none"
                }`}
              >
                {earphone.featured && (
                  <span className="overhang">Featured Product</span>
                )}
                {earphone.limited && (
                  <span className="overhang">Limited Release</span>
                )}
                <h2>{earphone.name}</h2>
                <p>{earphone.description}</p>
                <Link
                ariaLabel="more info"
                label="more info"
                external={false}
                href={`earphones/${earphone.slug}`}>
                  Info
                </Link>
              </div>
              <picture className="flex-1">
                <source media="(min-width: 64rem)" srcSet={desktopImageUrl} />
                <Image 
                  src={mobileImageUrl} 
                  alt={common.alt} 
                  className="w-full" 
                  width={600} 
                  height={300}
                />
              </picture>
            </div>
          )
        })}
      </section>
      <Categories />
      <CTA />
    </div>
  )
}