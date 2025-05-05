
import { PageHeader } from "@/components/ui/page-header";
import AIAgentCapabilities from "@/components/dashboard/AIAgentCapabilities";
import Sidebar from "@/components/layout/Sidebar";

const AIAgents = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <PageHeader
          title="AI Agents"
          description="Explore our AI-powered assistants designed to enhance your educational journey"
        />
        <div className="mt-6">
          <AIAgentCapabilities />
        </div>
      </div>
    </div>
  );
};

export default AIAgents;
