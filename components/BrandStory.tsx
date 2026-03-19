import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Crinkled paper background */}
      <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[668px]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/44ec4ac8043388e4b7edaef0febc07c4aec23d9f?width=2888"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Overlay mask image */}
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/363f21a75803b349303c37d2bcf1dc87fcfdf7c0?width=2888"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Content layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full py-16 md:py-20">

            {/* Left: Mascot image */}
            <div className="flex justify-center md:justify-start">
              <div
                className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] md:w-[420px] md:h-[510px] lg:w-[500px] lg:h-[563px]"
              >
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/18a8b5036413ddbf358376e65c2ccc763ae082a1?width=1638"
                  alt="Johnny & Jugnu mascot"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div className="flex flex-col items-start gap-6">
              {/* Heading with double-layer text effect */}
              <div className="relative">
                {/* Shadow layer (background, offset slightly right) */}
                <div
                  className="font-fredoka text-5xl md:text-6xl lg:text-[72px] uppercase leading-[1.1] tracking-tight select-none pointer-events-none absolute top-0 left-1 opacity-100"
                  aria-hidden="true"
                >
                  <span className="text-[#F4BD18]">Bold </span>
                  <span className="text-[#1A1919]">Flavors{"\n"}Big</span>
                  <span className="text-[#F4BD18]"> Heart</span>
                </div>
                {/* Foreground layer */}
                <div className="font-fredoka text-5xl md:text-6xl lg:text-[72px] uppercase leading-[1.1] tracking-tight">
                  <span className="text-[#1A1919]">Bold </span>
                  <span className="text-[#F4BD18]">Flavors{"\n"}Big</span>
                  <span className="text-[#1A1919]"> Heart</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-fredoka text-[#1A1919] text-base md:text-lg leading-relaxed tracking-tight max-w-[493px]">
                Born in 2015 with a fryer and a dream, Johnny &amp; Jugnu built
                its name on bold flavors, creativity and community. Today,
                it&apos;s a proudly homegrown brand redefining fast food in
                Pakistan.
              </p>

              {/* Order Now button */}
              <button className="bg-[#1A1919] text-white font-fredoka text-xl md:text-2xl uppercase tracking-tight px-10 py-4 rounded-full hover:opacity-90 transition-opacity duration-200">
                Order NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
