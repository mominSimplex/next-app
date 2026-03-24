import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const popularItems = [
  {
    name: "Chicken Fillet",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/57692d45a27003475078ae7256e42e43d4f1aede?width=560",
    imageAlt: "Chicken Fillet burger",
  },
  {
    name: "Tortilla Wrap",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/90fc4b130e8fa3b38f0b05ec098897f371912382?width=560",
    imageAlt: "Tortilla Wrap",
  },
  {
    name: "Regular Fries",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/36d25b995e499e6403f41efeaca574b79229e20b?width=560",
    imageAlt: "Regular Fries",
  },
  {
    name: "Gochu Wings",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/5d0a9267743e137ad35ada55f9f6083ece66bfe7?width=560",
    imageAlt: "Gochu Wings",
  },
];

const mainItems = [
  {
    name: "Chicken Fillet",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/1a5a7179214d8e98443b7a186c15b41d16a0199e?width=560",
    imageAlt: "Chicken Fillet burger",
  },
  {
    name: "Wehshi",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/e4d82ff669b67f421026c4867bd4ba5e20eb93b1?width=560",
    imageAlt: "Wehshi burger",
  },
  {
    name: "Large Nugg Wrap",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/5ba869b496f9515adfccba5b5ccedb6c290345c2?width=560",
    imageAlt: "Large Nugg Wrap",
  },
  {
    name: "Chicken Fillet",
    description: "Fried, breaded, Chicken Burger. Juicy to the core, unlike anything else.",
    price: "FROM 830",
    imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/1a5a7179214d8e98443b7a186c15b41d16a0199e?width=560",
    imageAlt: "Chicken Fillet burger",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <MenuSection
          title="Our Popular Items"
          underlineSrc="https://api.builder.io/api/v1/image/assets/TEMP/345a7d7ee3c28db5488f9a5e76bb67854f6c8f95?width=440"
          underlineWidth={220}
          underlineAlign="center"
          items={popularItems}
        />
        <MenuSection
          title="Choose Your Main"
          underlineSrc="https://api.builder.io/api/v1/image/assets/TEMP/edeb3b0907aa1f93a9e315cc84ea3aff93f48a8c?width=268"
          underlineWidth={134}
          underlineAlign="right"
          items={mainItems}
        />
        <BrandStory />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
