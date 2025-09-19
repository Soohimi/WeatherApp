import React from "react";

export default function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { name: "Dashboard", icon: "/icons/sideBarIcons/mage_dashboard-fill.svg" },
    { name: "Map", icon: "/icons/sideBarIcons/solar_map-linear.svg" },
    { name: "Calendar", icon: "/icons/sideBarIcons/uil_calender.svg" },
    {
      name: "Notifications",
      icon: "/icons/sideBarIcons/mingcute_notification-line.svg",
    },
    { name: "Settings", icon: "/icons/sideBarIcons/uil_setting.svg" },
  ];

  return (
    <>
      <div className="hidden lg:flex bg-gradient-to-b from-[#181818] to-[#1f1f1f] items-center rounded-[2rem] border border-[#333333] shadow-2xl flex-col h-full p-2 w-[85px]">
        <div className="h-[6.125rem] flex items-center justify-center group">
          <img
            src="/icons/sideBarIcons/ic_round-menu.svg"
            className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
            alt="Menu"
          />
        </div>
        <hr className="h-[0.125rem] w-[80%] border-0 bg-gradient-to-r from-transparent via-[#4A4949] to-transparent" />
        <div className="flex-1 flex flex-col items-center justify-start gap-4 pt-4 px-2">
          {navItems.map((item) => (
            <img
              key={item.name}
              src={item.icon}
              className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
              alt={item.name}
            />
          ))}
        </div>
        <hr className="h-[0.125rem] w-[80%] border-0 bg-gradient-to-r from-transparent via-[#4A4949] to-transparent" />
        <div className="h-[6.125rem] flex items-center justify-center group">
          <img
            src="/icons/sideBarIcons/material-symbols_help.svg"
            className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
            alt="Help"
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gradient-to-b from-[#181818] to-[#1f1f1f] border-r border-[#333333] p-6 transition-transform lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-4 p-3 rounded-lg text-zinc-200 hover:bg-neutral-700 hover:text-white"
            >
              <img src={item.icon} className="w-6 h-6" alt={item.name} />
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
