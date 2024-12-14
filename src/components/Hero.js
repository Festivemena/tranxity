import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b text-[#a8a8aa] from-primary to-light text-light text-center py-16 px-8 h-full">
      {/* Desktop Hero Image as Background */}
      <div
        className="hidden lg:block absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      ></div>

      {/* Mobile Image */}
      <div className="flex lg:hidden mb-8">
        <Image
          src={"/hero.jpg"}
          width={500} // Increased width
          height={700} // Increased height
          alt="Hero"
          className="rounded-lg"
        />
      </div>

      <h1 className="text-4xl md:text-6xl pt-16 font-bold mb-4">
        Ride Freely with Tranxity
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Discover affordable and eco-friendly bicycles for your everyday needs.
      </p>
      <button className="bg-dark text-light px-6 py-3 rounded-lg text-lg hover:shadow-2xl hover:flex-grow shadow-lg hover:bg-opacity-90">
        Get Started
      </button>
    </section>
  );
}
