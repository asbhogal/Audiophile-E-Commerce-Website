import { getImageProps } from "next/image";

export default function CTA() {
  const common = {
    alt: "A young Caucasian man wearing headphones, looking to the right, with a honeycomb patterned backdrop",
    width: 540,
    height: 588,
  };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: "/images/cta/image-best-gear-desktop.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    src: "/images/cta/image-best-gear-tablet.jpg",
  });

  const {
    props: { src: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: "/images/cta/image-best-gear-mobile.jpg",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-16 md:gap-0">
      <div className="flex flex-col order-2 md:order-1 gap-8 md:max-w-[26rem] w-full">
        <h2 className="text-center md:text-left">
          Bringing you the
          <span className="text-jasperOrange">&#32; best</span> audio gear
        </h2>
        <p className="text-[#999999] text-[0.9375rem] font-medium text-center md:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className="order-1 md:order-2">
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source
          media="(min-width: 426px) and (max-width: 1024px)"
          srcSet={tablet}
        />
        <img src={mobile} {...rest} alt={common.alt} className="w-full" />
      </picture>
    </div>
  );
}
