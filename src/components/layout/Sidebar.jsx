export default function Sidebar() {
  return (
    <div className="w-[5.25rem] h-[calc(100vh-5.5rem)] bg-[#181818] flex flex-col items-center mr-[1.5rem] ml-[2.75rem] my-[2.75rem] rounded-[2rem]">
      <div className="h-[6.125rem] flex items-center justify-center">
        <img
          src="/icons/sideBarIcons/ic_round-menu.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
      </div>

      <hr className="h-[0.125rem] w-full border-0 bg-gradient-to-r from-[#1E1E1E] via-[#4A4949] to-[#1E1E1E]" />

      <div className="flex-1 flex flex-col items-start justify-start gap-4 mt-4">
        <img
          src="/icons/sideBarIcons/mage_dashboard-fill.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
        <img
          src="/icons/sideBarIcons/solar_map-linear.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
        <img
          src="/icons/sideBarIcons/uil_calender.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
        <img
          src="/icons/sideBarIcons/mingcute_notification-line.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
        <img
          src="/icons/sideBarIcons/uil_setting.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
      </div>

      <hr className="h-[0.125rem] w-full border-0 bg-gradient-to-r from-[#1E1E1E] via-[#4A4949] to-[#1E1E1E]" />

      <div className="h-[6.125rem] flex items-center justify-center">
        <img
          src="/icons/sideBarIcons/material-symbols_help.svg"
          className="text-white p-2 rounded cursor-pointer"
        />
      </div>
    </div>
  );
}
