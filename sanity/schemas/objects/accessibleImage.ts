import { defineType } from "sanity";

export default defineType({
  name: "accessibleImage",
  type: "object",
  fields: [
    {
      name: "asset",
      type: "image",
      title: "Image",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Alternative text is required.",
      hidden: ({ parent }) => !parent?.asset,
      validation: (Rule) => [Rule.required()],
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      hidden: ({ parent }) => !parent?.asset,
      options: {
        isHighlighted: true,
      },
    },
  ],
});
