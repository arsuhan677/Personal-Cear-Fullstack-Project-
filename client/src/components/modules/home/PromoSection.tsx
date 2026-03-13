"use client";

import Image from "next/image";

interface PromoCard {
  id: number;
  title: string;
  description: string;
  subtitle?: string;
  image: string;
  cta: string;
  bgColor: string;
}

const promoCards: PromoCard[] = [
  {
    id: 1,
    title: "Bright Glow",
    description: "Enhance your natural beauty with our premium selection. Thoughtfully curated to deliver flawless results.",
    image: "/images/promo-1.jpg",
    cta: "Shop Now",
    bgColor: "bg-yellow-50",
  },
  {
    id: 2,
    title: "Skin Care",
    subtitle: "Get Authentic & Original Product",
    description: "",
    image: "/images/promo-2.jpg",
    cta: "Explore",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    title: "Healthy Care for a Healthier You",
    subtitle: "100% Original",
    description: "",
    image: "/images/promo-3.jpg",
    cta: "Shop Now",
    bgColor: "bg-green-50",
  },
];

export default function PromoSection() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {promoCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="relative h-80 md:h-96 flex flex-col justify-between p-6">
              {/* Text Content */}
              <div className="z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-sm text-green-700 font-semibold mb-3">
                    {card.subtitle}
                  </p>
                )}
                {card.description && (
                  <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                )}
              </div>

              {/* CTA Button */}
              <button className="bg-white text-green-700 px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors w-fit">
                {card.cta}
              </button>

              {/* Image - Positioned absolutely for overlay effect */}
              <div className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
