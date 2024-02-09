import Image, { getImageProps } from "next/image";
import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Heading from "@/components/blocks/Heading";
import Link from "@/components/navigation/Link";
import { Metadata } from "next";
import Tagline from "@/components/blocks/Tagline";
import Divider from "@/components/blocks/Divider";

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { Headphones } from "@/lib/types/data";

export const metadata: Metadata = {
  title: "Headphones | Audiophile",
  description:
    "Browse our range of high-end headphones, including limited releases and new ins",
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}

export default async function Page() {
  const headphones = await client.fetch<Headphones[]>(
    '*[_type == "product"]{_id, name, description, "desktopFeaturedImage": featuredImage[0].asset.asset._ref, "mobileFeaturedImage": featuredImage[0].asset.asset._ref, "featuredImageAlt": featuredImage[0].alt, "slug": slug.current, limited, featured}'
  );

  console.log(headphones);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 items-center justify-center py-12 px-10 rounded-lg bg-black">
        <Heading>Headphones</Heading>
        <Divider />
        <Tagline>
          From limited releases to new-ins, browse our range of top-of-the-line
          headphones, catered for both the casual, every-day listener who wants
          a bit more from their music, to the studio-born aficionados
        </Tagline>
      </div>
      <section className="flex flex-col gap-6">
        {headphones.map((headphone, index) => {
          const desktopImageUrl = urlFor(headphone.desktopFeaturedImage).url();
          const mobileImageUrl = urlFor(headphone.mobileFeaturedImage).url();
          const common = {
            alt: headphone.featuredImageAlt,
            width: 800,
            height: 800,
          };

          return (
            <div
              key={headphone._id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div
                className={`flex flex-col flex-1 text-center md:text-start md:items-start items-center justify-center gap-6 p-14 bg-black rounded-lg ${
                  index % 2 === 0 ? "md:order-1" : "order-none"
                }`}
              >
                {headphone.featured && (
                  <span className="overhang">Featured Product</span>
                )}
                {headphone.limited && (
                  <span className="overhang">Limited Release</span>
                )}
                <h2>{headphone.name}</h2>
                <p className="">{headphone.description}</p>
                <Link
                  ariaLabel="more info"
                  label="more info"
                  external={false}
                  href={`headphones/${headphone.slug}`}
                >
                  More Info
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
          );
        })}
      </section>
      <Categories />
      <CTA />
    </div>
  );
}
