import {
  HomeIcon,
  UsersIcon,
  BarChart3Icon,
  CalendarIcon,
  SettingsIcon,
  HelpCircleIcon,
  LogOutIcon,
} from "lucide-react";

export default function Navigation({ activeView, setActiveView }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: HomeIcon,
    },
    {
      id: "customers",
      label: "Customers",
      icon: UsersIcon,
    },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <nav className="flex-1 pt-4">
        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center w-full px-6 py-3 text-left ${
                    activeView === item.id
                      ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} className="mr-3" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-4 text-gray-600 hover:text-blue-600 cursor-pointer">
          <HelpCircleIcon size={18} className="mr-3" />
          <span>Help & Support</span>
        </div>
        <div className="flex items-center mb-4 text-gray-600 hover:text-blue-600 cursor-pointer">
          <LogOutIcon size={18} className="mr-3" />
          <span>Log Out</span>
        </div>
      </div>
    </aside>
  );
}
