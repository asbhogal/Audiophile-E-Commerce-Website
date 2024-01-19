import { getCollections } from "@/lib/shopify/getCollections";
import Image from "next/image";
import Link from "next/link";

export type CategoriesType = {
  id: number;
  category: string;
  img: string;
  imgAlt: string;
};

// STATIC DATA USED TO SCAFFOLD CONTENT AND STYLES UNTIL DYNAMIC IMPLEMENTED VIA SHOPIFY STOREFRONT

export const staticCategories: CategoriesType[] = [
  {
    id: 1,
    category: "headphones",
    img: "/categories/headphones.png",
    imgAlt:
      "Large headphones with a gold-style embellishment around the outer speaker unit, hovering with a shadow effect",
  },
  {
    id: 2,
    category: "speakers",
    img: "/categories/speakers.png",
    imgAlt:
      "A speaker unit with a subwoofer and speaker cap, the words 'STEIN Music' at the bottom, hovering with a shadow effect",
  },
  {
    id: 3,
    category: "earphones",
    img: "/categories/earphones.png",
    imgAlt:
      "A black, circular wireless earphones case with a logo in the centre and an embossed half-circle, hovering with a shadow effect",
  },
];

export default async function Categories() {
  const categories = await getCollections();

  console.log(process.env.SHOPIFY_STORE_DOMAIN);

  console.log(categories);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {staticCategories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center gap-4 p-4 bg-[#000000] rounded-lg"
        >
          <Image
            src={category.img}
            alt={category.imgAlt}
            width={100}
            height={100}
          />
          <p className="category">{category.category}</p>
          <Link
            href={`/${category.category}`}
            className="flex items-center gap-4"
          >
            <span className="text-[#797979] uppercase text-sm font-bold hover:text-jasperOrange transition tracking-[0.0625rem]">
              Shop
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Path 2"
                d="M1.3219 1L6.3219 6L1.3219 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
