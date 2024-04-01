import { client, urlFor } from "@/client";
import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Divider from "@/components/blocks/Divider";
import Heading from "@/components/blocks/Heading";
import Tagline from "@/components/blocks/Tagline";
import Link from "@/components/navigation/Link";
import { Speakers } from "@/lib/types/data/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Speakers | Audiophile",
  description: "Browse our range of high-end speakers",
};

export default async function Page() {
  const speakers = await client.fetch<Speakers[]>(
    '*[_type == "product" && category->name == "Speakers"]{_id, name, description, "desktopFeaturedImage": featuredImage[0].asset.asset._ref, "mobileFeaturedImage": featuredImage[0].asset.asset._ref, "featuredImageAlt": featuredImage[0].alt, "slug": slug.current, limited, featured}',
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 items-center justify-center py-12 px-10 rounded-lg bg-black">
        <Heading>Speakers</Heading>
        <Divider />
        <Tagline>
          From studio-specific subwoofers and treble-calibrated speakers to
          domestic surround systems, browse our range of specialised speakers
        </Tagline>
      </div>
      <section className="flex flex-col gap-6">
        {speakers.map((speaker, index) => {
          const desktopImageUrl = urlFor(speaker.desktopFeaturedImage).url();
          const mobileImageUrl = urlFor(speaker.mobileFeaturedImage).url();
          const common = {
            alt: speaker.featuredImageAlt,
            width: 800,
            height: 800,
          };

          return (
            <div
              key={speaker._id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div
                className={`flex flex-col flex-1 text-center md:text-start md:items-start items-center justify-center gap-6 p-14 bg-black rounded-lg ${
                  index % 2 === 0 ? "md:order-1" : "order-none"
                }`}
              >
                {speaker.featured && (
                  <span className="overhang">Featured Product</span>
                )}
                {speaker.limited && (
                  <span className="overhang">Limited Availability</span>
                )}
                <h2>{speaker.name}</h2>
                <p>{speaker.description}</p>
                <Link
                  ariaLabel="more info"
                  label="more info"
                  external={false}
                  href={`speakers/${speaker.slug}`}
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
