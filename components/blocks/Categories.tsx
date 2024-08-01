import Link from "next/link";
import { CategoriesType } from "@/lib/types/data/types";
import { client, urlFor } from "@/client";
import Icon from "../globals/Icon";

export default async function Categories() {
  const categories = await client.fetch<CategoriesType[]>(
    '*[_type == "category"]{_id, name, slug, _type, images}',
  );
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
              <img
                className="w-20 h-20 object-cover"
                src={imageUrl}
                alt={category.images[0].alt}
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
                  fill: "none",
                  height: "12",
                  viewBox: "0 0 7 12",
                  width: "7",
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
