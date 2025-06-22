import Image from "next/image";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-between p-8"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <header className="w-full max-w-5xl mx-auto text-center text-white pt-10 md:pt-16">
        <h1 className="font-serif text-5xl md:text-7xl font-bold">
          We Are Almost Ready to Launch!
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Something truly amazing is coming soon.
        </p>
      </header>

      <footer className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-10">
        <div className="relative w-full h-96 md:h-[500px] ">
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src="/INAUGURATION.png"
            alt="Inauguration Announcement"
            fill
            className="object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
