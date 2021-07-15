import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';

import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by Anant Duhan" />
        <link rel="icon" src="/Google.png" />
      </Head>

      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link"> </p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">
            <a href="https://www.gmail.com">Gmail</a>
          </p>
          <p className="link">
            <a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl">
              Images
            </a>
          </p>

          {/* Icons */}
          <Image
            src="/9-dots.png"
            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            height={30}
            width={30}
            alt="9dots"
          />

          {/* Avatar */}
          {/* <Avatar
            className="ml-auto"
            url="https://avatars.githubusercontent.com/u/50514029?v=4"
            height={35}
            width={35}
          /> */}
          <Image
            src="/AnantDuhan.png"
            height={35}
            width={35}
            className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
            alt="dp"
          />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt="Google-logo"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <Image
            src="/Google-mic.png"
            height={25}
            width={20}
            alt="Google-mic"
          />
          <button hidden onClick={search}>
            Search
          </button>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8  sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>

          <button className="btn">
            <a href="https://www.google.com/doodles">I'm Feeling Lucky</a>
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
