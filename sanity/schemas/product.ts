export default {
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "featuredImage",
      of: [{ type: "accessibleImage" }],
      title: "Featured Image",
      type: "array",
    },
    {
      name: "new",
      title: "New Release",
      type: "boolean",
    },
    {
      name: "limited",
      title: "Limited Release",
      type: "boolean",
    },
    {
      name: "images",
      of: [{ type: "accessibleImage" }],
      title: "Product Images",
      type: "array",
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "slug",
      options: {
        source: "name",
      },
      title: "Product Slug",
      type: "slug",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "features",
      of: [{ type: "block" }],
      title: "Product Features",
      type: "array",
    },
    {
      name: "contents",
      of: [{ type: "block" }],
      title: "Product Contents",
      type: "array",
    },
    {
      name: "category",
      title: "Product Category",
      to: [
        {
          type: "category",
        },
      ],
      type: "reference",
    },
    {
      name: "price_id",
      title: "Stripe Price ID",
      type: "string",
    },
  ],
  name: "product",
  title: "Products",
  type: "document",
};
