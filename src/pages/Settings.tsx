
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/layout/Sidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        <div className="flex-1 p-6 overflow-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-eduraah-primary mb-2">
              Settings
            </h1>
            <p className="text-gray-600">
              Manage your account preferences and platform settings.
            </p>
          </header>

          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <Tabs defaultValue="account">
                <TabsList className="mb-6">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <h3 className="text-xl font-medium mb-4">Account Settings</h3>
                  <p className="text-gray-600">Manage your account details and security settings.</p>
                </TabsContent>
                <TabsContent value="profile">
                  <h3 className="text-xl font-medium mb-4">Profile Settings</h3>
                  <p className="text-gray-600">Update your profile information and visibility settings.</p>
                </TabsContent>
                <TabsContent value="preferences">
                  <h3 className="text-xl font-medium mb-4">Preferences</h3>
                  <p className="text-gray-600">Configure your platform preferences and display settings.</p>
                </TabsContent>
                <TabsContent value="notifications">
                  <h3 className="text-xl font-medium mb-4">Notifications</h3>
                  <p className="text-gray-600">Manage your notification preferences and subscriptions.</p>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 EDURAAH - Empowering Education Decisions</p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
