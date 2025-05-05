
import { Bot, GraduationCap, FileText, Search, MessageSquare } from "lucide-react";

const AIAgentCapabilities = () => {
  const agents = [
    {
      icon: <GraduationCap className="h-10 w-10 text-blue-500" />,
      title: "Scholarship Finder Bot",
      description: "Chat-based tool that fetches funding options tailored to country, program, and profile",
      color: "border-blue-400",
    },
    {
      icon: <Bot className="h-10 w-10 text-red-500" />,
      title: "University Fit Advisor",
      description: "Matches students to programs based on academic data + personality traits",
      color: "border-red-400",
    },
    {
      icon: <FileText className="h-10 w-10 text-green-500" />,
      title: "Resume Review Agent",
      description: "Analyzes resumes section-by-section, highlighting weaknesses with suggestions",
      color: "border-green-400",
    },
    {
      icon: <Search className="h-10 w-10 text-purple-500" />,
      title: "Profile Optimizer",
      description: "Scans full profile for gaps and recommends strengthening actions",
      color: "border-purple-400",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Guidance Chatbot",
      description: "Always-on agent for application, visa, and study strategy queries",
      color: "border-slate-600 bg-slate-600",
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <Bot className="h-8 w-8 text-slate-700 mr-2" />
          <h2 className="text-2xl font-bold text-eduraah-primary">Eduraah's AI Agent Capabilities</h2>
        </div>
        <p className="text-gray-600 text-center">
          Smart AI agents that work together to personalize, automate, and enhance your education journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {agents.slice(0, 4).map((agent, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border-2 ${agent.color} flex flex-col items-center text-center h-full`}
          >
            <div className="mb-4">
              {agent.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
            <p className="text-gray-600">{agent.description}</p>
          </div>
        ))}
      </div>

      {/* The Guidance Chatbot at the bottom */}
      <div className={`p-6 rounded-lg border-2 ${agents[4].color} flex flex-col items-center text-center text-white`}>
        <div className="mb-2">
          {agents[4].icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{agents[4].title}</h3>
        <p>{agents[4].description}</p>
      </div>
    </div>
  );
};

export default AIAgentCapabilities;