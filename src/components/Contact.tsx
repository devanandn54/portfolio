"use client"
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1F1544] to-[#2B2579]">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-5xl font-bold mb-16 text-center text-[#C278F8]">
        Let&apos;s Connect
        </h2>
        
        <div className="grid place-items-center">
          <div className="w-full max-w-2xl bg-[#3B3363]/40 rounded-2xl backdrop-blur-sm p-8">
            <div className="grid gap-8">
              {/* Email Card */}
              <div className="group flex items-center gap-4 p-4 rounded-full bg-[#3B3363] hover:bg-[#4B4373] transition-all duration-300 cursor-pointer">
                <div className="p-3 rounded-full bg-[#2B2579]">
                  <MailIcon className="w-6 h-6 text-[#C278F8]" />
                </div>
                <div>
                  <p className="text-base font-medium text-[#C278F8] mb-1">Email Address</p>
                  <a 
                    href="mailto:devanand.1si18ei030@gmail.com"
                    className="text-lg text-white/90 hover:text-[#C278F8] transition-colors duration-300"
                  >
                    devanand.1si18ei030@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group flex items-center gap-4 p-4 rounded-full bg-[#3B3363] hover:bg-[#4B4373] transition-all duration-300 cursor-pointer">
                <div className="p-3 rounded-full bg-[#2B2579]">
                  <PhoneIcon className="w-6 h-6 text-[#C278F8]" />
                </div>
                <div>
                  <p className="text-base font-medium text-[#C278F8] mb-1">Phone Number</p>
                  <a 
                    href="tel:+17042364893"
                    className="text-lg text-white/90 hover:text-[#C278F8] transition-colors duration-300"
                  >
                    +1 (704) 236-4893
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://linkedin.com/in/devanandn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#3B3363] hover:bg-[#4B4373] transition-all duration-300 group"
                >
                  <LinkedinIcon className="w-6 h-6 text-[#C278F8]" />
                </a>
                <a
                  href="https://github.com/devanandn54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#3B3363] hover:bg-[#4B4373] transition-all duration-300 group"
                >
                  <GithubIcon className="w-6 h-6 text-[#C278F8]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}