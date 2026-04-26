import Nav from "@/components/vitalscore/Nav";
import Hero from "@/components/vitalscore/Hero";
import Problem from "@/components/vitalscore/Problem";
import Solution from "@/components/vitalscore/Solution";
import Detective from "@/components/vitalscore/Detective";
import Waitlist from "@/components/vitalscore/Waitlist";
import Footer from "@/components/vitalscore/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Detective />
      <Waitlist />
      <Footer />
    </main>
  );
};

export default Index;
