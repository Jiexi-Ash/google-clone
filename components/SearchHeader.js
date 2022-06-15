import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.term || "");

  const handleClick = () => {
    router.push("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;
    router.push(`/search?term=${searchTerm.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/750px-Google_logo_%282013-2015%29.svg.png"
          objectFit="contain"
          alt="Google-img"
          width={120}
          height={40}
          onClick={handleClick}
          className="cursor-pointer"
        />
        <form
          className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <XIcon
            className="h-7 hidden sm:inline-flex text-gray-500 cursor-pointer sm:mr-3"
            onClick={() => setSearchTerm("")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 text-blue-500" />
        </form>
        <User setClass="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
