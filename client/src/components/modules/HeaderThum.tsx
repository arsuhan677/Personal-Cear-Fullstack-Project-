import Image from "next/image";
import Link from "next/link";

const HeaderThumb = () => {
  // later this will come from API
  const banner = {
    image: "/images/offer-banner.jpg",
    link: "/offer"
  };

  return (
    <div className="w-full bg-black">
      <Link href={banner.link} className="block relative w-full h-[60px] md:h-[80px] lg:h-[80px]">
        <Image
          src={banner.image}
          alt="Offer Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Link>
    </div>
  );
};

export default HeaderThumb;