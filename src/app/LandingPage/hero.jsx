
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-bl from-[#abdced] via-white to-[#abdced]/20 py-12 px-4 md:px-12 lg:px-20">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6 text-center lg:text-start">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
          <span className="text-[#009063]">Where Every</span>{" "}
          <span className="text-black">Page Begins a Journey</span>
        </h1>
        <p className="text-black/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
        At Readify, we believe reading PDFs should be simple and stress-free. Whether you're studying, working, or just browsing documents, our tool gives you a powerful, intuitive experience 
        </p>
       
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <img
          src="/Image.png"
          alt="Hero"
          className="w-full max-w-[500px] sm:max-w-[600px] mx-auto rounded-md"
        />
      </div>
    </div>
  </section>
  );
}
