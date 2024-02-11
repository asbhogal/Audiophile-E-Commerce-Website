import { getImageProps } from "next/image";
import Link from "../navigation/Link";
export default function Hero() {
  const common = {
    alt: "A pair of black headphones",
    width: 540,
    height: 588,
  };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/images/home/hero-desktop.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: "/images/home/hero-tablet.jpg",
  });

  const {
    props: { src: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/home/hero-mobile.jpg",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-end justify-center gap-8 sm:gap-16 md:gap-0 pb-4 bg-black absolute top-0 min-h-dvh w-full left-0 overflow-hidden">
      <div className="flex flex-col gap-6 items-center sm:items-start max-w-[28rem] w-full md:ml-14 relative z-10 sm:static">
        <span className="overhang text-center sm:text-start">New Product</span>
        <h1 className="display-font text-center sm:text-start">
          XX99 Mark II Headphones
        </h1>
        <p className="hero-text text-center sm:text-start">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          primary
          href="#"
          label="Shop Now"
          ariaLabel="Shop Now"
          external={false}
        >
          Shop Now
        </Link>
      </div>
      <picture className="absolute w-full h-full sm:h-auto sm:left-1/4 opacity-55">
        <source media="(min-width: 64rem)" srcSet={desktop} />
        <source
          media="(min-width: 26.625rem) and (max-width: 64rem)"
          srcSet={tablet}
        />
        <img src={mobile} {...rest} alt={common.alt} className="w-full" />
      </picture>
    </div>
  );
}
