import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CarGrid from "@/components/CarGrid";
import BookingForm from "@/components/BookingForm";
import Navbar from "@/components/Navbar";
import Location from "@/components/Location";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-black select-none overflow-x-hidden">
      <Navbar />
      <Hero />
      <CarGrid />
      <BookingForm />
      <Location />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
