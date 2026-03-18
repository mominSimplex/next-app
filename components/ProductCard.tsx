import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProductCard({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <article className="relative bg-white rounded-[16px_16px_40px_16px] border border-brand-border shadow-[0_0_4px_rgba(0,0,0,0.2)] overflow-visible flex-shrink-0 w-full">
      {/* Product Image */}
      <div className="relative w-full aspect-[280/221] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Heart / Wishlist button */}
      <button
        aria-label={`Add ${name} to wishlist`}
        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-white/80 rounded-full hover:scale-110 transition-transform duration-200"
      >
        <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
          <path
            d="M7.91491 3.57446C5.2361 3.57446 3.06384 5.88255 3.06384 8.72885C3.06384 14.4255 12.2553 20.9362 12.2553 20.9362C12.2553 20.9362 21.4468 14.4255 21.4468 8.72885C21.4468 5.20238 19.2746 3.57446 16.5958 3.57446C14.6962 3.57446 13.0519 4.73463 12.2553 6.42382C11.4587 4.73463 9.81448 3.57446 7.91491 3.57446Z"
            stroke="black"
            strokeWidth="1.53191"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Card content */}
      <div className="px-4 pt-3 pb-2">
        <h3 className="font-bebas text-brand-dark text-xl tracking-tight uppercase leading-tight">
          {name}
        </h3>
        <p className="font-oswald text-brand-muted text-sm leading-5 mt-1 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Price + Add button row */}
      <div className="flex items-center justify-between px-4 pb-4 pt-2">
        <span className="font-oswald text-brand-bg text-lg font-medium">
          {price}
        </span>

        {/* ADD button */}
        <button className="bg-primary text-brand-dark font-bebas text-xl px-6 py-3 rounded-[40px_0_0_0] hover:brightness-95 active:scale-95 transition-all duration-200">
          ADD
        </button>
      </div>
    </article>
  );
}
