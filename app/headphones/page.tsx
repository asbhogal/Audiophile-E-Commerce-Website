import { unstable_getImgProps as getImgProps } from "next/image";
import CTA from "@/components/blocks/CTA";
import Categories from "@/components/blocks/Categories";
import Heading from "@/components/blocks/Heading";
import Link from "@/components/navigation/Link";
import { Metadata } from "next";
import Tagline from "@/components/blocks/Tagline";
import Divider from "@/components/blocks/Divider";

export const metadata: Metadata = {
  title: "Headphones | Audiophile",
  description:
    "Browse our range of high-end headphones, including limited releases and new ins",
};

type StaticHeadphonesDataType = {
  id: number;
  product: string;
  description: string;
  new?: boolean;
  limited?: boolean;
  slug: string;
  desktopImg: string;
  tabletImg: string;
  mobileImg: string;
  imgAlt: string;
};

const staticHeadphonesData: StaticHeadphonesDataType[] = [
  {
    id: 1,
    product: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    new: true,
    slug: "/xx99-mark-2-headphones",
    desktopImg: "/images/products/desktop/xx99-mark-two-headphones-desktop.jpg",
    tabletImg: "/images/products/tablet/xx99-mark-two-headphones-tablet.jpg",
    mobileImg: "/images/products/mobile/xx99-mark-two-headphones-mobile.jpg",
    imgAlt: "A pair of black wireless headphones",
  },
  {
    id: 2,
    product: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    limited: true,
    slug: "/xx99-mark-1-headphones",
    desktopImg: "/images/products/desktop/xx99-mark-one-headphones-desktop.jpg",
    tabletImg: "/images/products/tablet/xx99-mark-one-headphones-tablet.jpg",
    mobileImg: "/images/products/mobile/xx99-mark-one-headphones-mobile.jpg",
    imgAlt:
      "A pair of black corded headphones with gold linings and caps on the outer speakers",
  },
  {
    id: 3,
    product: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    limited: true,
    slug: "/xx59-headphones",
    desktopImg: "/images/products/desktop/xx59-headphones-desktop.jpg",
    tabletImg: "/images/products/tablet/xx59-headphones-tablet.jpg",
    mobileImg: "/images/products/mobile/xx59-headphones-mobile.jpg",
    imgAlt: "A pair of white wireless headphones",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 items-center justify-center py-12 px-10 rounded-lg bg-black">
        <Heading>Headphones</Heading>
        <Divider />
        <Tagline>
          From limited releases to new-ins, browse our range of top-of-the-line
          headphones, catered for both the casual, every-day listener who wants
          a bit more from their music, to the studio-born aficionados
        </Tagline>
      </div>
      <section className="flex flex-col gap-6">
        {staticHeadphonesData.map((headphone, index) => {
          const common = {
            alt: headphone.imgAlt,
            width: 800,
            height: 800,
          };

          const {
            props: { srcSet: desktop },
          } = getImgProps({ ...common, src: headphone.desktopImg });

          const {
            props: { srcSet: tablet },
          } = getImgProps({ ...common, src: headphone.tabletImg });

          const {
            props: { src: mobile, ...rest },
          } = getImgProps({ ...common, src: headphone.mobileImg });

          return (
            <div
              key={headphone.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div
                className={`flex flex-col flex-1 text-center md:text-start md:items-start items-center justify-center gap-6 p-14 bg-black rounded-lg ${
                  index % 2 === 0 ? "md:order-1" : "order-none"
                }`}
              >
                {headphone.new && <span className="overhang">New Product</span>}
                {headphone.limited && (
                  <span className="overhang">Limited Release</span>
                )}
                <h2>{headphone.product}</h2>
                <p className="">{headphone.description}</p>
                <Link
                  ariaLabel="more info"
                  label="more info"
                  external={false}
                  href={`headphones/${headphone.slug}`}
                >
                  More Info
                </Link>
              </div>
              <picture className="flex-1">
                <source media="(min-width: 64rem)" srcSet={desktop} />
                <source
                  media="(min-width: 26.625rem) and (max-width: 64rem)"
                  srcSet={tablet}
                />
                <img
                  src={mobile}
                  {...rest}
                  alt={common.alt}
                  className="w-full"
                />
              </picture>
            </div>
          );
        })}
      </section>
      <Categories />
      <CTA />
    </div>
  );
}
