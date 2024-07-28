import { menu } from "@/lib/data";
import { MenuLinksProps } from "@/lib/types/props/types";
import Link from "next/link";

export default function MenuLinks({ className, ariaLabel }: MenuLinksProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ul className="flex flex-col sm:flex-row md:gap-8 gap-4 items-center ">
        {menu.map((menuLink) => (
          <li key={menuLink.id}>
            <Link
              className="menu hover:text-jasperOrange transition"
              href={menuLink.href}
              aria-label={menuLink.name}
            >
              {menuLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
