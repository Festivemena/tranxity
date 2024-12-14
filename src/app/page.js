import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MapView from "../components/MapView";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <Hero />
        <Features />
        <MapView />
        <Footer />
      </div>
    </div>
  );
}
