import ProductData from "./components/data/Productdata";
import Footer from "./components/footer/Footer";
import Hero from "./components/header/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-[90rem] mx-auto">
      <div>
        <Hero />
      </div>
      <div>
        <ProductData />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
