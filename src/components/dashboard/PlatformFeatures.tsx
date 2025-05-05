
import FeatureCard from "./FeatureCard";
import { 
  Search, 
  ClipboardList, 
  BarChart3, 
  Book, 
  FileText, 
  MessageSquare 
} from "lucide-react";

const PlatformFeatures = () => {
  const features = [
    {
      title: "University Matching",
      description: "AI-driven recommendations based on academic profile and personality type",
      icon: <Search className="h-8 w-8 text-white" />,
      bgColor: "bg-blue-600",
    },
    {
      title: "Application Tracking",
      description: "Deadline management, document checklists, application status updates",
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      bgColor: "bg-green-600",
    },
    {
      title: "Profile Analytics",
      description: "Academic score, Professional score, Personalized insights",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      bgColor: "bg-orange-500",
    },
    {
      title: "Resource Center",
      description: "University guides, scholarship information, campus location details",
      icon: <Book className="h-8 w-8 text-white" />,
      bgColor: "bg-teal-600",
    },
    {
      title: "Admission Requirements",
      description: "GPA expectations, test score benchmarks, tuition information",
      icon: <FileText className="h-8 w-8 text-white" />,
      bgColor: "bg-indigo-600",
    },
    {
      title: "Support System",
      description: "Live chat assistance, FAQ resources, personalized guidance",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      bgColor: "bg-pink-600",
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border">
      <h2 className="text-xl font-bold text-center bg-eduraah-primary text-white py-3 rounded-lg mb-6">
        EDURAAH Platform Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={
              <div className={`rounded-full ${feature.bgColor} p-3`}>
                {feature.icon}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PlatformFeatures;
