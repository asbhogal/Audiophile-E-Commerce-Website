import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Categories from "../blocks/Categories";

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
        <Categories />
      </SheetContent>
    </Sheet>
  );
}
