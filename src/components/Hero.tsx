"use client"
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { DownloadIcon, EyeIcon } from 'lucide-react';

export default function Hero() {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumePath = '/Devanand_Nagendrababu_resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Devanand_Nagendrababu_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-6 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Devanand N
        </h1>
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl mb-6 text-gray-300">
          Full stack Developer
        </h2>
        <p className="text-xl mb-8 text-gray-400 max-w-lg mx-auto md:mx-0">
          Crafting innovative web solutions with a passion for clean code and user-centric design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="/Devanand_Nagendrababu_resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
            >
              <EyeIcon className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </a>
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="bg-[#3B3363] hover:bg-[#4B4373] text-[#C278F8] border border-[#C278F8] w-full sm:w-auto"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
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