export type AssetReference = {
  _type: "reference";
  _ref: string;
};

export type Asset = {
  _type: "image";
  asset?: AssetReference; // Use optional chaining to indicate that asset might be undefined
};

export type AccessibleImage = {
  _key: string;
  asset: Asset;
  _type: "accessibleImage";
  alt: string;
};

export type Categories = {
  _id: string;
  name: string;
  slug: {
    current: string;
    _type: "slug";
  };
  images: AccessibleImage[];
};

/* export type CategoriesType = {
  id: number;
  category: string;
  img: string;
  imgAlt: string;
};

// STATIC DATA USED TO SCAFFOLD CONTENT AND STYLES UNTIL DYNAMIC IMPLEMENTED VIA SANITY

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
 */
