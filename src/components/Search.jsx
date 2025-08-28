import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

function SearchIcon() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {showSearch ? (
        <>
          <Input
            placeholder="Search city..."
            className="bg-[rgba(30,30,30,1)] border border-[#444444] text-white placeholder:text-[rgba(150,150,150,1)] transition-all duration-300 rounded-xl shadow-lg focus:border-[#555555] focus:ring-2 focus:ring-[#555555]/20"
            autoFocus
          />
          <X
            className="w-5 h-5 cursor-pointer text-[rgba(150,150,150,1)] hover:text-white transition-colors duration-200"
            onClick={() => setShowSearch(false)}
          />
        </>
      ) : (
        <Search
          className="w-11 h-11 cursor-pointer border border-[rgba(94,94,94,1)] text-[rgba(94,94,94,1)] rounded-full p-[0.75rem] hover:border-[#555555] hover:text-[#555555] hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={() => setShowSearch(true)}
        />
      )}
    </div>
  );
}

export default SearchIcon;

