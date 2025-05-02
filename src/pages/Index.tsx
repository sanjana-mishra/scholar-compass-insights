
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";

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
            <div className="bg-white shadow-sm rounded-xl p-6 border">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to EDURAAH Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Explore the different sections using the sidebar navigation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-700">Profile</h3>
                    <p className="text-sm mt-2">View and manage your profile information</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-green-700">Analytics</h3>
                    <p className="text-sm mt-2">Gain insights about your profile and matches</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-purple-700">Community</h3>
                    <p className="text-sm mt-2">Connect with students and alumni</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-orange-700">Settings</h3>
                    <p className="text-sm mt-2">Configure your account and preferences</p>
                  </div>
                </div>
              </div>
            </div>
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
