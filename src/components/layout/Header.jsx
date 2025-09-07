import SearchIcon from "../Search";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-black text-white w-full">
      <div>
        <h1 className="text-xs sm:text-sm md:text-base text-slate-300">
          Hi, Soheil!
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-semibold">
          Good Morning
        </p>
      </div>

      <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
        <SearchIcon />
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden">
          <img src="/icons/Profile.svg" alt="profile" />
        </div>
      </div>
    </div>
  );
}
