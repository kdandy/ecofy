import Hero from "@/components/section/Hero";
import Features from "@/components/section/Features";
import Artikel from "@/components/section/Artikel";
import Community from "@/components/section/Community";
import MeetOurTeam from "@/components/section/Team";
import Events from "@/components/section/Events";
import Faq from "@/components/section/Faq";

export default function Home() {
  return (
   <>
    <Hero />
    <Features />
    <Artikel />
    <Events />
    <Community />
    <MeetOurTeam />
    <Faq />
   </>
  );
}
