export default function Sidebar() {
  return (
    <div className="w-[5.25rem] h-[calc(100vh-5.5rem)] bg-gradient-to-b from-[#181818] to-[#1f1f1f] flex flex-col items-center mr-[1.5rem] ml-[2.75rem] my-[2.75rem] rounded-[2rem] border border-[#333333] shadow-2xl">
      <div className="h-[6.125rem] flex items-center justify-center group">
        <img
          src="/icons/sideBarIcons/ic_round-menu.svg"
          className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
          alt="Menu"
        />
      </div>

      <hr className="h-[0.125rem] w-[80%] border-0 bg-gradient-to-r from-transparent via-[#4A4949] to-transparent" />

      <div className="flex-1 flex flex-col items-center justify-start gap-4 mt-4 px-2">
        <img
          src="/icons/sideBarIcons/mage_dashboard-fill.svg"
          className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
          alt="Dashboard"
        />
        <img
          src="/icons/sideBarIcons/solar_map-linear.svg"
          className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
          alt="Map"
        />
        <img
          src="/icons/sideBarIcons/uil_calender.svg"
          className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
          alt="Calendar"
        />
        <img
          src="/icons/sideBarIcons/mingcute_notification-line.svg"
          className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
          alt="Notifications"
        />
        <img
          src="/icons/sideBarIcons/uil_setting.svg"
          className="text-white p-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[#333333] hover:rounded-2xl"
          alt="Settings"
        />
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
  );
}
