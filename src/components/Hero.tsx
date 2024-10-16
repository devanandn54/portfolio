import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Devanand N
        </h1>
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl mb-6 text-gray-300">
          Full Stack Developer
        </h2>
        <p className="text-xl mb-8 text-gray-400 max-w-lg mx-auto md:mx-0">
          Crafting innovative web solutions with a passion for clean code and user-centric design.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
          View My Work
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50">
          <Image
            src="/Professional_photo.jpg"  
            alt="Devanand N"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}