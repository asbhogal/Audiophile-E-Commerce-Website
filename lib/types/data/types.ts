export type AssetReference = {
  _type: "reference";
  _ref: string;
};

export type Asset = {
  _type: "image";
  asset?: AssetReference;
};

export type AccessibleImage = {
  _key: string;
  asset: Asset;
  _type: "accessibleImage";
  alt: string;
}[];

export type Category = {
  _ref: string;
  _type: string;
};

export type Categories = {
  _id: string;
  name: string;
  slug: {
    current: string;
    _type: "slug";
  };
  images: AccessibleImage;
};

export interface Headphones {
  _id: string;
  name: string;
  description: string;
  featured?: boolean;
  limited?: boolean;
  desktopFeaturedImage: string;
  mobileFeaturedImage: string;
  featuredImageAlt: string;
  slug: string;
}

type FeaturedImage = {
  _key: string;
  asset: Asset;
  alt: string;
  caption: string;
}[];

export type Features = {
  text: string[];
  _key: string;
}[];

export type Contents = {
  text: string;
  _key: string;
}[];

export type Earphones = Headphones;

export type Speakers = Earphones;

export type Product = {
  limited: boolean;
  price: number;
  name: string;
  _id: string;
  _type: string;
  featuredImage: FeaturedImage;
  slug: string;
  description: string;
  features: Features;
  contents: Contents;
  category: Category;
};
