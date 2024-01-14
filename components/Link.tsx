import Icon from "./Icon";

type LinkProps = {
  primary?: boolean;
  className?: string;
  icon?: boolean;
  label: string;
  href: string;
  ariaLabel: string;
  external: boolean;
};

export default function Link({
  primary = false,
  className,
  label,
  href,
  icon,
  ariaLabel,
  external = false,
  ...props
}: LinkProps) {
  let mode = icon ? "shop-link" : primary ? "primary-link" : "secondary-link";

  return (
    <a
      href={href}
      aria-label={external ? `${ariaLabel} (Opens in a new tab)` : ariaLabel}
      target={external ? "_blank" : "_self"}
      className={[
        "flex",
        "items-center",
        "gap-4",
        "py-4",
        "px-8",
        "uppercase",
        "font-bold",
        "tracking-[0.0625rem]",
        "transition",
        className,
        mode,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
      {icon && (
        <Icon
          svgProps={{
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }}
        >
          <path
            id="Path 2"
            d="M1.3219 1L6.3219 6L1.3219 11"
            stroke="#D87D4A"
            stroke-width="2"
          />
        </Icon>
      )}
    </a>
  );
}
