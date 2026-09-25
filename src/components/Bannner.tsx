import React from "react";
import Image from "next/image";
import banner from '@/assets/banner.jpg'
const Bannner = () => {
  return (
   <div className="p-2 md:p-0 mt-7 md:mt-10">
     <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Cakes By Mithila"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[5px] text-pink-200">
            Homemade With Love
          </p>

          <h1 className="bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-300 bg-clip-text text-5xl font-bold text-transparent drop-shadow-lg md:text-7xl">
            Cakes By Mithila
          </h1>

          <p className="mt-4 text-lg text-white">
            Delicious cakes for your special moments
          </p>

          <button className="mt-6 rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-300 px-7 py-3 font-semibold text-black transition hover:scale-105">
            Order Your Cake
          </button>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Bannner;