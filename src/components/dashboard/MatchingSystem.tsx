
import { Check, Brain } from "lucide-react";

const MatchingSystem = () => {
  const studentProfileItems = [
    { name: "Personality Type", icon: "🧠" },
    { name: "Academic History", icon: "📚" },
    { name: "Professional Background", icon: "💼" },
    { name: "Test Scores", icon: "📊" },
    { name: "Program Preference", icon: "🎯" },
  ];

  const universityMatches = [
    "Stanford University",
    "University of Michigan",
    "MIT",
    "Cambridge",
  ];

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border">
      <h2 className="text-xl font-bold text-center text-eduraah-primary mb-6">
        EDURAAH's Smart University Matching System
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        {/* Student Profile */}
        <div className="bg-blue-50 rounded-lg p-4 flex-1">
          <h3 className="text-lg font-semibold mb-3 text-center">Student Profile</h3>
          <div className="grid grid-cols-1 gap-3">
            {studentProfileItems.map((item) => (
              <div 
                key={item.name} 
                className="flex items-center bg-white rounded-md p-3 shadow-sm border border-blue-100"
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Matching Engine */}
        <div className="flex flex-col items-center justify-center px-4 py-2 my-4 md:my-0">
          <div className="bg-purple-100 rounded-lg p-4 w-48 text-center">
            <div className="flex justify-center mb-2">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-purple-700">
              EDURAAH's AI Matching Engine
            </p>
          </div>
          <div className="flex flex-col items-center my-2">
            <div className="h-6 border-l-2 border-gray-300 my-1"></div>
            <div className="w-8 h-0 border-t-2 border-gray-300"></div>
          </div>
        </div>

        {/* University Matches */}
        <div className="bg-green-50 rounded-lg p-4 flex-1">
          <h3 className="text-lg font-semibold mb-3 text-center">University Matches</h3>
          <ul className="space-y-3">
            {universityMatches.map((university) => (
              <li key={university} className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-green-600" />
                <span>{university}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Powered by Personality + Academic Intelligence to guide your journey
      </p>
    </div>
  );
};

export default MatchingSystem;
