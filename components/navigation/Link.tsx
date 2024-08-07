import { LinkProps } from "@/lib/types/props/types";
import Icon from "../globals/Icon";

export default function Link({
  primary = false,
  className,
  label,
  href,
  icon,
  ariaLabel,
  external = false,
}: LinkProps) {
  let mode;

  switch (true) {
    case Boolean(icon):
      mode = "shop-link";
      break;
    case primary:
      mode = "primary-link";
      break;
    default:
      mode = "secondary-link";
  }

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
        "w-max",
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
            fill: "none",
            height: "12",
            viewBox: "0 0 7 12",
            width: "7",
            xmlns: "http://www.w3.org/2000/svg",
          }}
        >
          <path
            id="Path 2"
            d="M1.3219 1L6.3219 6L1.3219 11"
            stroke="#D87D4A"
            strokeWidth="2"
          />
        </Icon>
      )}
    </a>
  );
}
