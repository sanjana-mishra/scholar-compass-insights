import { Home, User, Users, Search, BarChart3, Settings, Bot } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const menuItems = [
    { name: "Overview", icon: Home, path: "/" },
    { name: "Personality Mapping", icon: User, path: "/personality" },
    { name: "User Flow", icon: Users, path: "/userflow" },
    { name: "AI Matching", icon: Search, path: "/matching" },
    { name: "AI Agents", icon: Bot, path: "/aiagents" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    // { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="flex items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-eduraah-primary">EDURAAH</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100 transition-colors",
                isActive ? "bg-eduraah-blue-light text-eduraah-blue font-medium" : ""
              )
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

    </div>
  );
};

export default Sidebar;