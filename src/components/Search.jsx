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
            className="bg-[rgba(30,30,30,1)] border-none text-[rgba(94,94,94,1)] placeholder:text-[rgba(94,94,94,1)] transition-all duration-300"
            autoFocus
          />
          <X
            className="w-5 h-5 cursor-pointer text-[rgba(94,94,94,1)]"
            onClick={() => setShowSearch(false)}
          />
        </>
      ) : (
        <Search
          className="w-11 h-11 cursor-pointer border border-[rgba(94,94,94,1)] text-[rgba(94,94,94,1)] rounded-full p-[12px]"
          onClick={() => setShowSearch(true)}
        />
      )}
    </div>
  );
}

export default SearchIcon;
