export default {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured Product",
      type: "boolean",
    },
    {
      name: "limited",
      title: "Limited Release",
      type: "boolean",
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "accessibleImage" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "slug",
      title: "Product Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "features",
      title: "Product Features",
      type: "string",
    },
    {
      name: "contents",
      title: "Product Contents",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: { type: "category" },
    },
  ],
};
