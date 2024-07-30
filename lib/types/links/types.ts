export type MenuType = {
  id: number;
  name: string;
  href: string;
};

export type SocialMediaLinks = {
  id: number;
  label: string;
  name: string;
  href: string;
  svgProps: object;
  svgPath: string;
  svgPathAttributes?: Record<string, string>;
};

export type MobileNavLinks = {
  id: number;
  label: string;
  href: string;
};
