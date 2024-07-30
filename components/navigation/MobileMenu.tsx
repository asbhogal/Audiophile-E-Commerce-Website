import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Divider from "../blocks/Divider";

type MobileNavLinks = {
  id: number;
  label: string;
  href: string;
};

const mobileNavLinks: MobileNavLinks[] = [
  {
    href: "/headphones",
    id: 1,
    label: "Headphones",
  },
  {
    href: "/speakers",
    id: 2,
    label: "Speakers",
  },
  {
    href: "/earphones",
    id: 3,
    label: "Earphones",
  },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-labelledby="open-menu" className="block md:hidden p-0">
          <span id="open-menu" hidden>
            Open Menu
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <rect id="Rectangle" width="16" height="3" fill="white" />
              <rect
                id="Rectangle Copy"
                y="6"
                width="16"
                height="3"
                fill="white"
              />
              <rect
                id="Rectangle Copy 2"
                y="12"
                width="16"
                height="3"
                fill="white"
              />
            </g>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-chineseBlack max-w-lg w-full h-fit border border-antiFlashWhite rounded-lg pt-8 absolute top-24 cart"
      >
        <SheetHeader className="mb-4">
          <SheetTitle className="text-left overhang">Menu</SheetTitle>
        </SheetHeader>
        <Divider direction="left" />
        <div className="flex flex-col gap-4">
          {mobileNavLinks.map((link) => (
            <SheetClose asChild key={link.id}>
              <Link
                className="text-antiFlashWhite font-bold uppercase"
                href={link.href}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
