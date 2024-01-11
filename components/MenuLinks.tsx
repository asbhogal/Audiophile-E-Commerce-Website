import { menu } from "./Header";
import Link from "next/link";

type MenuLinksProps = {
  className?: string;
  ariaLabel: string;
};

export default function MenuLinks({ className, ariaLabel }: MenuLinksProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ul className="flex flex-col sm:flex-row md:gap-8 gap-4 items-center ">
        {menu.map((menu) => (
          <li key={menu.id}>
            <Link
              className="menu hover:text-jasperOrange transition"
              href={menu.href}
              aria-label={menu.name}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
