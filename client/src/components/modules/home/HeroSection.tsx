"use client";

import Image from "next/image";


export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Big Left Banner */}
        <div className="relative md:col-span-2 h-[300px] md:h-[600px] rounded-[12px] overflow-hidden">
          <Image
            src="/images/h1.png"
            alt="Bright Glow Banner"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          
          <div className="relative h-[145px] md:h-[288px] rounded-[12px] overflow-hidden">
            <Image
              src="/images/h3.png"
              alt="Skin Care Banner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative h-[145px] md:h-[288px] rounded-[12px] overflow-hidden">
            <Image
              src="/images/h2.png"
              alt="Healthy Care Banner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

        </div>
      </div>
    </div>
  );
}