
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";
import PlatformInsights from "@/components/dashboard/PlatformInsights";

const Analytics = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-eduraah-primary mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Key Platform Insights for your educational journey.
            </p>
          </header>

          <div className="space-y-8 animate-fade-in">
            <PlatformInsights />
          </div>

          {/* <footer className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 EDURAAH - Empowering Education Decisions</p>
          </footer> */}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
