import accessibleImage from "./objects/accessibleImage";

export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
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
  ],
};
