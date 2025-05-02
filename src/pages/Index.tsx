
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";
import PlatformInsights from "@/components/dashboard/PlatformInsights";
import MatchingSystem from "@/components/dashboard/MatchingSystem";
import PlatformFeatures from "@/components/dashboard/PlatformFeatures";
import PersonalityEngine from "@/components/dashboard/PersonalityEngine";
import UserJourney from "@/components/dashboard/UserJourney";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-eduraah-primary mb-2">
              EDURAAH: Holistic Guidance for Lifelong Fit & Success
            </h1>
            <p className="text-gray-600">
              Your personalized path to educational success abroad.
            </p>
          </header>

          <div className="space-y-8 animate-fade-in">
            {/* Platform Insights */}
            <PlatformInsights />

            {/* Matching System */}
            <MatchingSystem />

            {/* Platform Features */}
            <PlatformFeatures />

            {/* Personality Engine */}
            <PersonalityEngine />

            {/* User Journey */}
            <UserJourney />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 EDURAAH - Empowering Education Decisions</p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
