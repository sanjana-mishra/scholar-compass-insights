
import { Brain } from "lucide-react";

const PersonalityEngine = () => {
  const personalityTraits = [
    { 
      title: "Introvert/Extrovert", 
      bgColor: "bg-blue-100", 
    },
    { 
      title: "Practical/Conceptual", 
      bgColor: "bg-blue-100", 
    },
    { 
      title: "Analytical/Empathetic", 
      bgColor: "bg-pink-100", 
    },
    { 
      title: "Planner/Explorer", 
      bgColor: "bg-yellow-100", 
    },
  ];

  const campusEnvironments = [
    { 
      title: "Collaborative campus/Self-study", 
      bgColor: "bg-green-100", 
    },
    { 
      title: "Startup focused/Research-heavy", 
      bgColor: "bg-blue-200", 
    },
    { 
      title: "Structured curriculum/Flexible learning", 
      bgColor: "bg-purple-100", 
    },
    { 
      title: "Urban/Serene environment", 
      bgColor: "bg-purple-100", 
    },
  ];

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border">
      <h2 className="text-2xl font-bold text-center mb-8">
        How Personality Drives the Perfect Match
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column - Personality Traits */}
        <div className="flex flex-col gap-3 md:w-1/3">
          {personalityTraits.map((trait) => (
            <div 
              key={trait.title} 
              className={`${trait.bgColor} rounded-full py-3 px-6 text-center font-medium`}
            >
              {trait.title}
            </div>
          ))}
        </div>

        {/* Center - AI Engine */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="w-48 h-48 bg-purple-500 rounded-full flex flex-col items-center justify-center text-white p-4 mb-3">
            <Brain className="h-12 w-12 mb-2" />
            <div className="text-center">
              <div className="text-xl font-bold">EDURAAH</div>
              <div className="text-lg font-bold">Personality</div>
              <div className="text-lg font-bold">Engine</div>
            </div>
          </div>
          <p className="text-sm text-center text-gray-600">
            Powered by AI to match your personality with the right campus environment. </p>
        </div>

        {/* Right Column - Campus Types */}
        <div className="flex flex-col gap-3 md:w-1/3">
          {campusEnvironments.map((env) => (
            <div 
              key={env.title} 
              className={`${env.bgColor} rounded-full py-3 px-6 text-center font-medium`}
            >
              {env.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalityEngine;
