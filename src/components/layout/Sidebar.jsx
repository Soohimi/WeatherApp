export default function Sidebar() {
  return (
    <div className="w-20  bg-[#181818] flex flex-col justify-between items-center py-4 ml-8 mb-8 mt-8 rounded-2xl">
      <div>
        <div className="text-white p-2 rounded cursor-pointer">Logo</div>
      </div>
      <div>
        <div className="mb-6 text-white p-2 rounded cursor-pointer">🏠</div>
        <div className="mb-6 text-white p-2 rounded cursor-pointer">📍</div>
        <div className="mb-6 text-white p-2 rounded cursor-pointer">📅</div>
        <div className="mb-6 text-white p-2 rounded cursor-pointer">⚙️</div>
      </div>
      <div>
        <div className="mb-6 text-white p-2 rounded cursor-pointer">Logout</div>
      </div>
    </div>
  );
}
