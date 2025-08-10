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
            className="bg-white border-none text-black placeholder:text-gray-400 transition-all duration-300"
            autoFocus
          />
          <X
            className="w-5 h-5 cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </>
      ) : (
        <Search
          className="w-10 h-10 cursor-pointer border border-[#444444] rounded-3xl p-2"
          onClick={() => setShowSearch(true)}
        />
      )}
    </div>
  );
}

export default SearchIcon;
