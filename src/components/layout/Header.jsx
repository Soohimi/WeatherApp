import SearchIcon from "../Search";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-8 pt-4 mt-8 bg-black text-white w-full">
      <div>
        <h1 className="text-sm text-slate-300">Hi, Soheil!</h1>
        <p className="text-xl font-semibold">Good Morning</p>
      </div>
      <div className="flex gap-4 items-center">
        <div></div>
        <div>
          <SearchIcon />
        </div>
        <div className="w-14 h-14 rounded-full">
          <img src="/icons/Profile.svg" alt="mountain sunset" />
        </div>
      </div>
    </div>
  );
}
