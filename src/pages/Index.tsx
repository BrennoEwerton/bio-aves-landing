import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Enrichment from "@/components/Enrichment";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import DiagnosticForm from "@/components/DiagnosticForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Enrichment />
      <Team />
      <Testimonials />
      <DiagnosticForm />
      <Footer />
    </div>
  );
};

export default Index;
