import Image from "next/image";
import ProductCard from "./ProductCard";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

interface MenuSectionProps {
  title: string;
  underlineSrc: string;
  underlineWidth: number;
  underlineAlign?: "center" | "right";
  items: MenuItem[];
}

export default function MenuSection({
  title,
  underlineSrc,
  underlineWidth,
  underlineAlign = "center",
  items,
}: MenuSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <h2 className="font-bebas text-[#1A1919] text-4xl md:text-5xl lg:text-[48px] uppercase tracking-tight text-center leading-tight">
            {title}
          </h2>
          <div className={`mt-2 ${underlineAlign === "right" ? "self-end pr-4 md:pr-8" : ""}`}>
            <Image
              src={underlineSrc}
              alt=""
              width={underlineWidth}
              height={13}
              aria-hidden="true"
              className="h-2.5 md:h-3 w-auto"
            />
          </div>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 bg-[#1A1919] text-[#F4BD18] font-bebas text-lg px-6 py-2 rounded-[8px_18px_24px_8px] hover:opacity-90 transition-opacity duration-200">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
