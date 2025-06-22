'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center p-8"
      style={{ backgroundImage: "url('/backround.jpg')" }}
    >
      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left text-white">
          <div className="flex justify-center md:justify-start items-center mb-6">
            <Image
              src="/logo_eco.jpeg"
              alt="EcoDoctor Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold">
            We Are Almost Ready to Launch!
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Something truly amazing is coming soon.
          </p>
        </div>

        <div
          className={`relative w-full h-96 md:h-[500px] transition-transform duration-700 ease-out transform ${
            isLoaded ? "scale-100" : "scale-0"
          }`}
        >
          <Image
            src="/INAUGURATION.png"
            alt="Inauguration Announcement"
            fill
            className="object-contain"
          />
        </div>
      </main>
    </div>
  );
}
