import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#5B2D8E] overflow-hidden min-h-[420px] md:min-h-[500px] lg:min-h-[580px]">
      {/* Yellow background blob (right side) */}
      <div className="absolute inset-y-0 right-0 w-3/4 z-0">
        <svg
          viewBox="0 0 1100 645"
          fill="none"
          className="h-full w-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M1100 0H180.246C81.572 0 2.40894 81.5364 5.32275 180.168L14.3915 487.127C16.7644 567.446 82.0088 631.629 162.356 632.684L1100 645V0Z"
            fill="#F4BD18"
          />
        </svg>
      </div>

      {/* Decorative yellow blobs top-right */}
      <div className="absolute right-0 top-0 z-10 opacity-80 pointer-events-none">
        <svg viewBox="0 0 454 489" fill="none" className="w-40 md:w-64 lg:w-80 h-auto">
          <path
            d="M8.8016 228.399C14.5199 222.771 35.648 227.071 37.9284 236.246C39.8624 244.027 36.8185 251.714 30.5179 256.694C19.4296 265.457 16.0012 266.775 5.95632 269.562C-4.72482 272.525 0.66454 236.408 8.8016 228.399Z"
            fill="#ECB100"
          />
          <path
            d="M78.5039 31.832C150.654 -39.1861 417.233 15.0698 446.004 130.832C470.406 229.013 432.002 326.005 352.504 388.832C212.598 499.4 -61.8269 326.366 29.0038 282.332C108.639 243.725 -24.1649 132.89 78.5039 31.832Z"
            fill="#ECB100"
          />
          <path
            d="M258.945 382.003C269.709 370.765 299.485 371.665 303.141 386.371C306.241 398.843 302.098 412.198 291.262 419.147C262.951 437.302 266.157 447.72 258.945 457.338C248.285 471.552 233.573 408.493 258.945 382.003Z"
            fill="#ECB100"
          />
          <path
            d="M285.105 449.579C289.088 442.545 304.195 439.192 307.916 446.129C311.071 452.012 310.692 459.266 306.125 464.15C294.191 476.91 297.137 481.746 294.735 487.511C291.185 496.03 275.716 466.16 285.105 449.579Z"
            fill="#ECB100"
          />
        </svg>
      </div>

      {/* Fries image - left side */}
      <div className="absolute left-0 bottom-0 z-10 w-1/2 md:w-[55%] lg:w-[58%]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/541d9d6c6a2479c63eb87a50a706902ab79a11e1?width=1754"
          alt="Johnny & Jugnu signature fries"
          width={877}
          height={420}
          className="w-full h-auto object-cover rounded-tr-[60px] md:rounded-tr-[80px]"
          priority
        />
      </div>

      {/* Text content - right side */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center ml-auto w-1/2 md:w-[45%] lg:w-[40%] min-h-[420px] md:min-h-[500px] lg:min-h-[580px] px-6 md:px-8 py-12">
        <h1 className="font-bebas text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight uppercase">
          It starts
          <br />
          with the
        </h1>
        <div className="relative mt-2">
          <span className="font-pacifico text-brand-dark text-4xl md:text-6xl lg:text-7xl tracking-tight lowercase">
            sauce
          </span>
          {/* Underline */}
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/85ccb211b1b5a85a5750dcd3dd0b344b02fe0099?width=508"
            alt=""
            width={254}
            height={24}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full max-w-[200px] md:max-w-[260px] -rotate-6"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
