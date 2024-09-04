import ProductData from "./components/data/Productdata";
import Footer from "./components/footer/Footer";
import Hero from "./components/header/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen pt-[60px] flex-col max-w-[90rem] mx-auto">
      <Hero />
      <ProductData />
    </main>
  );
}
