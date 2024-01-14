import { unstable_getImgProps as getImgProps } from "next/image";
import Image from "next/image";
import Link from "./Link";

export default function Featured() {
  const common = {
    alt: "A speaker with the brand ",
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
    <div className="sm:featured-section grid gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center bg-black overflow-hidden">
        <Image
          className="relative top-4"
          src="/images/home/speaker-1.png"
          alt="A large speaker on a black table against a grey background"
          width={400}
          height={600}
        />
        <div className="relative overflow-hidden">
          <Image
            className="absolute"
            src="/images/home/circle.svg"
            alt="A white circle"
            height={500}
            width={500}
          />
          <div className="flex flex-col justify-center gap-8 pl-6 sm:pl-10 md:pl-24">
            <h2>ZX9 Speaker</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href="#"
              label="See product"
              external={false}
              ariaLabel="See product"
            >
              See product
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray relative">
        <Image
          src="/images/home/speaker-2.jpg"
          alt="A large speaker on a black table against a grey background"
          width={1200}
          height={600}
        />
        <div className="flex flex-col justify-center gap-8 pl-6 sm:pl-10 md:pl-24 absolute top-2/4 -translate-y-1/2">
          <h2 className="text-black">ZX7 Speaker</h2>
          <Link
            href="#"
            label="See product"
            external={false}
            ariaLabel="See product"
          >
            See product
          </Link>
        </div>
      </div>
      <div className="bg-black">
        <Image
          src="/images/home/earphones.jpg"
          alt="Wireless earphones inside a black case, connected to a charging cable"
          width={900}
          height={600}
        />
      </div>
      <div className="flex flex-col justify-center gap-8 pl-6 sm:pl-10 md:pl-24 bg-black">
        <h2>YX1 Earphones</h2>
        <Link
          href="#"
          label="See product"
          external={false}
          ariaLabel="See product"
        >
          See product
        </Link>
      </div>
    </div>
  );
}
