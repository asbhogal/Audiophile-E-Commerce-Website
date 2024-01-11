import Link from "next/link";
import Icon from "./Icon";
import { SocialMediaLinksProps } from "@/lib/types/props/types";
import { socialMediaLinks } from "@/lib/data";

export default function SocialMediaLinks({ className }: SocialMediaLinksProps) {
  return (
    <div className={["justify-end", "gap-4", className].join(" ")}>
      {socialMediaLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          aria-labelledby={`${link.label}-label`}
          target="_blank"
        >
          <span
            id={`${link.label}-label`}
            className="sr-only"
          >{`${link.name} profile (opens in a new tab)`}</span>
          <Icon svgProps={link.svgProps}>
            <path {...link.svgPathAttributes} d={link.svgPath} fill="white" />
          </Icon>
        </Link>
      ))}
    </div>
  );
}
