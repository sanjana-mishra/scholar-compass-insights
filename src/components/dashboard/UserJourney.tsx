
import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const UserJourney = () => {
  const steps = [
    {
      number: 1,
      title: "Profile Creation",
      color: "bg-blue-400",
      items: [
        "Academic details",
        "Test scores",
        "Work experience",
        "Preferences",
      ],
    },
    {
      number: 2,
      title: "University Matching",
      color: "bg-purple-400",
      items: [
        "AI-powered matching",
        "Compatibility scores",
        "Program fit",
        "Admission chances",
      ],
    },
    {
      number: 3,
      title: "Application Planning",
      color: "bg-green-500",
      items: [
        "Deadline tracking",
        "Document checklist",
        "Budget planning",
        "Timeline guidance",
      ],
    },
    {
      number: 4,
      title: "Application Process",
      color: "bg-orange-400",
      items: [
        "Track application",
        "Status updates",
        "Upload docs",
        "Reminders",
      ],
    },
    {
      number: 5,
      title: "Post-Admission",
      color: "bg-teal-400",
      items: [
        "Visa help",
        "Scholarship info",
        "Housing support",
        "Pre-departure tips",
      ],
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border">
      <h2 className="text-2xl font-bold text-center text-eduraah-primary mb-8">
        EDURAAH User Journey Flow
      </h2>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            {/* Step Circle - Larger size */}
            <div className={`${step.color} w-32 h-32 rounded-full flex flex-col items-center justify-center text-white`}>
              <div className="text-lg font-bold">Step {step.number}</div>
              <div className="text-sm text-center px-2">{step.title}</div>
            </div>
            
            {/* Arrow - Aligned with the center of circles */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-16 h-16 text-gray-400 mx-2">
                →
              </div>
            )}
            
            {/* Step Details - Enhanced alignment */}
            <div className="mt-4 p-3 border rounded-lg bg-gray-50 w-56">
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="mr-2 mt-0 flex-shrink-0">•</span>
                    <span className="text-sm text-center">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">User Progress Tracker</span>
          <span className="font-medium">70%</span>
        </div>
        <Progress value={70} className="h-2" />
      </div>
    </div>
  );
};

export default UserJourney;
