import { client } from "@/client"
import { Contents, Features, Product } from "@/lib/types/data/types"

export default async function Page({ params }: { params: { slug: string } }) {
  const productData = await client.fetch<Product>(
    `*[_type == "product" && slug.current == "${params.slug}"][0]`
  );

  const productContents = await client.fetch<Contents>(
    `*[_type == "product" && slug.current == "${params.slug}"][0].contents[].children`
  );

  const productFeatures = await client.fetch<Features>(
    `*[_type == "product" && slug.current == "${params.slug}"][0].features[].children`
  );

  console.log("productFeatures", productFeatures);
  return (
    <>
      <h1>{productData.name}</h1>
      <h2>{productData.description}</h2>
      <h3>Features</h3>
      <ul>
        {productFeatures.flat().map((feature) => (
          <li className="font-sans text-antiFlashWhite" key={feature._key}>{feature.text}</li>
        ))}
      </ul>
      <h3>Contents</h3>
      <ul>
        {productContents.flat().map((content) => (
          <li className="font-sans text-antiFlashWhite" key={content._key}>{content.text}</li>
        ))}
      </ul>
    </>
  );
}