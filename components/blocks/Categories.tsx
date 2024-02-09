import Image from "next/image";
import Link from "next/link";
import { Categories } from "@/lib/types/data";
import Icon from "../globals/Icon";

import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

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

export default async function Categories() {
  const categories = await client.fetch<Categories[]>('*[_type == "category"]');
  console.log(categories);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {categories.map((category) => {
        const imageUrl =
          category.images.length > 0
            ? urlFor(category.images[0].asset.asset?._ref ?? "").url()
            : "";

        return (
          <div
            key={category._id}
            className="flex flex-col items-center gap-4 p-4 bg-[#000000] rounded-lg"
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={category.images[0].alt}
                width={100}
                height={100}
              />
            )}
            <p className="category">{category.name}</p>
            <Link
              href={`/${category.slug.current}`}
              className="flex items-center gap-4"
            >
              <span className="text-[#797979] uppercase text-sm font-bold hover:text-jasperOrange transition tracking-[0.0625rem]">
                Shop
              </span>
              <Icon
                svgProps={{
                  width: "7",
                  height: "12",
                  viewBox: "0 0 7 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                }}
              >
                <path
                  id="Path 2"
                  d="M1.3219 1L6.3219 6L1.3219 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </Icon>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
