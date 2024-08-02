import { client, urlFor } from "@/client";
import AddToCart from "@/components/checkout/AddToCart";
import { formatCurrency } from "@/lib/functions/formatCurrency";
import { Contents, Features, Product } from "@/lib/types/data/types";
import Categories from "@/components/blocks/Categories";
import CTA from "@/components/blocks/CTA";
import Spacer from "@/components/globals/Spacer";
import Divider from "@/components/blocks/Divider";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return {
    description: "",
    title: `${slug.toUpperCase()} | Audiophile`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const productData = await client.fetch<Product>(
    `*[_type == "product" && slug.current == "${params.slug}"][0]`,
  );

  const priceId = await client.fetch<Product>(
    `*[_type == "product" && slug.current == "${params.slug}"][0].price_id`,
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

  const desktopImageUrl = desktopImage
    ? urlFor(desktopImage.asset.asset?._ref || "").url()
    : "";
  const mobileImageUrl = mobileImage
    ? urlFor(mobileImage.asset.asset?._ref || "").url()
    : "";

  const common = {
    alt:
      productData.featuredImage.length > 0
        ? productData.featuredImage[0].alt
        : "",
    height: 800,
    width: 800,
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <picture className="flex-1">
            <source media="(min-width: 64rem)" srcSet={desktopImageUrl} />
            <img src={mobileImageUrl} alt={common.alt} />
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
      <Spacer />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-2">
          <h3>Features</h3>
          <Divider direction="left" />
          {productFeatures.flat().map((feature) => (
            <p className="text-gray" key={feature._key}>
              {feature.text}
            </p>
          ))}
        </div>
        <div className="flex-1">
          <h3>Contents</h3>
          <Divider direction="left" />
          <ul className="flex flex-col gap-2 list-none">
            {productContents.flat().map((content) => (
              <li className="font-sans text-antiFlashWhite" key={content._key}>
                {content.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Spacer />
      <Categories />
      <Spacer />
      <CTA />
    </div>
  );
}
