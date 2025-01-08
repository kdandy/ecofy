import Hero from "@/components/section/Hero";
import Features from "@/components/section/Features";
import Artikel from "@/components/section/Artikel";
import Events from "@/components/section/Events";
import LoadingPage from "@/components/custom/LoadingPage";

export default function Home() {
  return (
   <>
    <LoadingPage />
    <Hero />
    <Features />
    <Artikel />
    <Events />
   </>
  );
}
