import ProductData from "./components/data/Productdata";
import Hero from "./components/header/Hero";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen pt-[60px] flex-col max-w-[90rem] mx-auto">
      <div>
        <Hero />
      </div>
      <div>
        <ProductData />
      </div>
      <Footer/>
    </main>
  );
}
