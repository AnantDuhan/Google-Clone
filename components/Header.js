import { CogIcon, SearchIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {

    const searchInputRef = useRef(null);
    const router = useRouter();
    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }
    return (
      <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center justify-between">
          <div className="flex flex-grow">
            <Image
              src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              height={40}
              width={110}
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />
            <form className="flex flex-grow border border-gray-200 rounded-full max-w-3xl shadow-lg items-center px-5 py-1 ml-10 mr-5">
              <input
                ref={searchInputRef}
                className="flex-grow w-full focus:outline-none"
                type="text"
              />
              <XIcon
                className="h-7 sm:mr-3 text-gray-500 cursor-pointer  transition-100 transform hover:scale-125"
                onClick={() => (searchInputRef.current.value = "")}
              />
              <Image
                src="/Google-mic.png"
                className="mr-3 hidden sm:inline-flex border-l-2 pl-4"
                height={25}
                width={20}
              />
              <SearchIcon className="h-8 text-blue-500 hidden sm:inline-flex" />
              <button hidden type="submit" onClick={search}>
                Search
              </button>
            </form>
          </div>
          <div className="flex items-center space-x-3">
            <CogIcon className="h-10 text-gray-800 cursor-pointer w-10 p-2 rounded-full hover:bg-gray-100" />
            <Image
              className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              src="/9-dots.png"
              height={30}
              width={30}
            />
            <Avatar
              className="ml-auto"
              url="https://avatars.githubusercontent.com/u/50514029?v=4"
            />
          </div>
        </div>

        {/* HeaderOptions */}
        <HeaderOptions />
      </header>
    );
}

export default Header