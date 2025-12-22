import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PromoBanner from "./components/PromoBanner";
import AICourses from "./components/AICourses";
import Companies from "./components/Companies";

export default function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <Categories />
      <PromoBanner />
      <AICourses />
      <Companies />
    </>
  );
}