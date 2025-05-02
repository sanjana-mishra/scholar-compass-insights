
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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
                <h2 className="text-2xl font-bold mb-4">Welcome to EDURAAH Platform</h2>
                <p className="text-gray-600 mb-6">
                  We provide holistic educational guidance focused on perfect personality fit.
                </p>
                
                <Card className="p-6 border bg-blue-50 mb-8">
                  <h3 className="text-xl font-bold text-center mb-4">Our Unique Approach</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 mt-1" />
                      <p>AI-driven university matching based on personality and academic profile</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 mt-1" />
                      <p>Comprehensive application tracking and management</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 mt-1" />
                      <p>Personalized guidance for every step of your educational journey</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 mt-1" />
                      <p>Connect with students and alumni with similar personality traits</p>
                    </div>
                  </div>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-700">Profile</h3>
                    <p className="text-sm mt-2">View your user journey and progress</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-green-700">Analytics</h3>
                    <p className="text-sm mt-2">Explore platform insights and matching system</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-purple-700">Community</h3>
                    <p className="text-sm mt-2">Connect through our personality engine</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <h3 className="font-semibold text-orange-700">Settings</h3>
                    <p className="text-sm mt-2">Discover all platform features</p>
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
