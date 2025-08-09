export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-800 text-white w-full">
      <div>
        <h1 className="text-xl font-semibold">Good Morning, Soheil!</h1>
        <p className="text-sm text-slate-300">Wednesday, 05 Feb, 2025</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="hover:bg-slate-700 px-2 py-1 rounded">°C</button>
        <button className="hover:bg-slate-700 px-2 py-1 rounded">🔍</button>
        <button className="hover:bg-slate-700 px-2 py-1 rounded">🔔</button>
        <div className="w-8 h-8 rounded-full bg-slate-500"></div>
      </div>
    </div>
  );
}
