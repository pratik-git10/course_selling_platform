import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import LandingPage from "./landing/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
