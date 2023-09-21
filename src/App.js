import { useState, useEffect } from 'react';
import Video from './components/Video';
import Survey from './components/Survey';
import Promotion from './components/Promotion';
import Search from './components/Search';

export default function App() {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <header className="fixed w-screen top-0 bg-white">
        <div className="flex justify-between h-12 border-b">
          <div className="flex items-center">
            <button
              className="px-4 text-2xl"
              onClick={() => setNavActive(!navActive)}
            >
              &#9776;
            </button>
            <h1>YouTube</h1>
          </div>
          <div className="flex justfy-center items-center px-4">
            <Search />
          </div>
        </div>
        <nav 
          className="border-b hidden"
          style={{ display: navActive && "block" }}
        >
          <ul className="">
            <li className="py-2 text-center">list item</li>
            <li className="py-2 text-center">list item</li>
            <li className="py-2 text-center">list item</li>
          </ul>
        </nav>
      </header>

      <main className="mt-16 px-4">
        <h1 className="text-4xl my-4 font-semibold">App</h1>

        <Video />

        <Survey />
      </main>

      <footer className="p-8 text-center bg-gray-200 mt-8">
        2023 &copy; tvvmvn
      </footer>

      <Promotion />
    </>
  )
}




