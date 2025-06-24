'use client';

import { useState, useEffect, KeyboardEvent } from "react";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle close on Esc key
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (event: KeyboardEvent | KeyboardEventInit) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center p-8"
      style={{ backgroundImage: "url('/backround.jpg')" }}
    >
      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative rounded-xl  p-4 max-w-xs w-full flex flex-col items-center">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              tabIndex={0}
              className="z-10 absolute top-2 right-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full bg-gray-100 p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* Modal Image */}
            <div className="w-full h-80 relative flex items-center justify-center">
              <Image
                src="/INAUGURATION.png"
                alt="Inauguration Announcement"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      )}
      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left text-white">
          <div className="flex justify-center md:justify-start items-center mb-6">
            <Image
              src="/eco_doctor_organics_background_removed_final.png"
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
                    <a
              href="https://wa.me/916381783686"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              aria-label="Contact us on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.416 27.632 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.334-.207-3.428-.615l-.245-.09-4.65 1.217 1.24-4.527-.16-.234C7.23 18.13 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-7.13c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.14-.184.278-.713.899-.874 1.085-.16.185-.322.208-.599.07-.277-.139-1.17-.431-2.23-1.374-.824-.735-1.38-1.64-1.542-1.917-.16-.278-.017-.428.122-.566.126-.125.278-.324.417-.486.139-.162.185-.278.278-.463.093-.185.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.528-.009c-.17 0-.445.064-.678.298-.232.233-.88.86-.88 2.096 0 1.236.902 2.43 1.028 2.597.126.162 1.775 2.713 4.3 3.697.602.207 1.07.33 1.436.422.603.153 1.153.132 1.588.08.484-.058 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.116-.253-.185-.53-.324z"/>
              </svg>
              +91 63817 83686
            </a>
      </main>
    </div>
  );
}
