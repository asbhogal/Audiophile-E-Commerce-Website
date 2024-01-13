import { unstable_getImgProps as getImgProps } from "next/image";
export default function Hero() {
  const common = {
    alt: "A pair of black headphones",
    width: 540,
    height: 588,
  };

  const {
    props: { srcSet: desktop },
  } = getImgProps({
    ...common,
    src: "/images/home/hero-desktop.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImgProps({
    ...common,
    src: "/images/home/hero-tablet.jpg",
  });

  const {
    props: { src: mobile, ...rest },
  } = getImgProps({
    ...common,
    src: "/images/home/hero-mobile.jpg",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 sm:gap-16 md:gap-0 bg-black rounded-lg">
      <div className="flex flex-col gap-6 items-center md:items-start lg:max-w-[25rem]w-full">
        <span className="hero-overhang text-center md:text-start">
          New Product
        </span>
        <h1 className="text-center md:text-start">XX99 Mark II Headphones</h1>
        <p className="hero-text text-center md:text-start">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
      <div>
        <picture>
          <source media="(min-width: 64rem)" srcSet={desktop} />
          <source
            media="(min-width: 26.625rem) and (max-width: 64rem)"
            srcSet={tablet}
          />
          <img src={mobile} {...rest} alt={common.alt} className="w-full" />
        </picture>
        <div className="flex flex-col gap-6 items-center md:items-start lg:max-w-[25rem]w-full">
          <span className="hero-overhang text-center md:text-start">
            New Product
          </span>
          <h1 className="text-center md:text-start">XX99 Mark II Headphones</h1>
          <p className="hero-text text-center md:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
      </div>
    </div>
  );
}
