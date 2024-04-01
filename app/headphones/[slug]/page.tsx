import { client, urlFor } from "@/client";
import AddToCart from "@/components/checkout/AddToCart";
import { formatCurrency } from "@/lib/functions/formatCurrency";
import { Contents, Features, Product } from "@/lib/types/data/types";
import Image from "next/image";
import { toast } from "sonner";
import Categories from "@/components/blocks/Categories";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return {
    title: `${slug.toUpperCase()} | Audiophile`,
    description: "",
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const productData = await client.fetch<Product>(
    `*[_type == "product" && slug.current == "${params.slug}"][0]`,
  );

  const productContents = await client.fetch<Contents>(
    `*[_type == "product" && slug.current == "${params.slug}"][0].contents[].children`,
  );

  const productFeatures = await client.fetch<Features>(
    `*[_type == "product" && slug.current == "${params.slug}"][0].features[].children`,
  );

  const desktopImage = productData.featuredImage.find(
    (img) => img.caption === "Desktop",
  );
  const mobileImage = productData.featuredImage.find(
    (img) => img.caption === "Mobile",
  );

  const desktopImageUrl = desktopImage ? urlFor(desktopImage.asset).url() : "";
  const mobileImageUrl = mobileImage ? urlFor(mobileImage.asset).url() : "";

  const common = {
    alt:
      productData.featuredImage.length > 0
        ? productData.featuredImage[0].alt
        : "",
    width: 800,
    height: 800,
  };

  console.log("productData", productData);

  function handleAddToCart() {
    console.log(`${productData.name}`);
    toast(`${productData.name} has been added to your cart`);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <picture className="flex-1">
            <source media="(min-width: 64rem)" srcSet={desktopImageUrl} />
            <Image
              src={mobileImageUrl}
              alt={common.alt}
              className="w-full"
              width={600}
              height={300}
              priority
            />
          </picture>
        </div>
        <div className="flex flex-col gap-4">
          {productData.limited && <p className="overhang">Limited Release</p>}
          <h1>{productData.name}</h1>
          <p className="text-gray">{productData.description}</p>
          <div className="flex flex-col gap-4">
            <p className="text-3xl">{formatCurrency(productData.price)}</p>
            <AddToCart productData={productData} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div></div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-2">
          <h3>Features</h3>
          {productFeatures.flat().map((feature) => (
            <p className="text-gray" key={feature._key}>
              {feature.text}
            </p>
          ))}
        </div>
        <div className="flex-1">
          <h3>Contents</h3>
          <ul className="flex flex-col gap-2 list-none">
            {productContents.flat().map((content) => (
              <li className="font-sans text-antiFlashWhite" key={content._key}>
                {content.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Categories />
    </div>
  );
}
