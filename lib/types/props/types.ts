export type LinkProps = {
  primary?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: boolean;
  label: string;
  href: string;
  ariaLabel: string;
  external: boolean;
};

export type MenuLinksProps = {
  className?: string;
  ariaLabel: string;
};

export type SocialMediaLinksProps = {
  className?: string;
};
