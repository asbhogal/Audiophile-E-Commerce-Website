export default {
  name: "category",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
    },
    {
      name: "images",
      title: "Category Images",
      type: "array",
      of: [{ type: "accessibleImage" }],
    },
    {
      name: "slug",
      title: "Product Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
};
