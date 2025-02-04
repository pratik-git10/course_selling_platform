import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import LandingPage from "./landing/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <LandingPage />
      </main>
    </div>
  );
}
