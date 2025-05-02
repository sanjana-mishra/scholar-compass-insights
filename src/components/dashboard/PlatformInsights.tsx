
import StatCard from "./StatCard";

const PlatformInsights = () => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 border">
      <h2 className="text-xl font-bold text-center mb-6">Key Platform Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Match Accuracy"
          value="98%"
          bgColor="bg-blue-100"
          textColor="text-blue-700"
        />
        <StatCard
          title="Top Universities"
          value="Top"
          bgColor="bg-green-100"
          textColor="text-green-700"
        />
        <StatCard
          title="Admission Success"
          value="85%"
          bgColor="bg-orange-100"
          textColor="text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50 p-5 rounded-lg text-center">
          <h3 className="text-blue-700 font-bold mb-2">Holistic Matching</h3>
          <p className="text-sm">Personality, profile & goals guide your university fit for long-term success</p>
        </div>
        <div className="bg-green-50 p-5 rounded-lg text-center">
          <h3 className="text-green-700 font-bold mb-2">Application Management</h3>
          <p className="text-sm">Track deadlines, documents, and progress from one place with personalized updates</p>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg text-center">
          <h3 className="text-blue-700 font-bold mb-2">Resource Hub</h3>
          <p className="text-sm">Guides for scholarships, visa processing, finances, and student life</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformInsights;
