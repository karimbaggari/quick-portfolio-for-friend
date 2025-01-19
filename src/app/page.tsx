import Footer from "@/components/footer";
import Header from "@/components/header";
import LogoCloud from "@/components/logoCloud";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import Section from "@/components/section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <LogoCloud />
      <Reviews />
      <Footer />
    </>
  );
}
