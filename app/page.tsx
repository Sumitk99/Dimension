import Image from "next/image";
import Navbar from "../Src/Components/Navbar/Navbar";
import Hero from "@/Src/Components/Hero/Hero";
import Form from "@/Src/Components/Form/Form"
import Downhero from "@/Src/Components/downhero/Downhero";
import Footer from "@/Src/Components/Footer/Footer"
import ProductiveTeams from "@/Src/Components/ProductiveTeams/ProductiveTeams";
export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>
      
      {/* Global floating dots/particles effect */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white/15 rounded-full animate-pulse delay-4000"></div>
        <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-5000"></div>
      </div>

      <Navbar />
      <Hero/>
      <Form/>
      <Downhero/>
      <ProductiveTeams/>
      <Footer/>
    </div>
  );
}
