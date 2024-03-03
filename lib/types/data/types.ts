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

export type Earphones = Headphones

export type Speakers = Earphones