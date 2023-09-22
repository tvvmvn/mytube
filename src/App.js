import { useState, useEffect } from 'react';
import Video from './components/Video';
import Survey from './components/Survey';
import Promotion from './components/Promotion';
import Search from './components/Search';

const filters = {
  All: () => true,
  Music: ({ category }) => category === "Music",
  Travel: ({ category }) => category === "Travel",
  Food: ({ category }) => category === "Food",
}

const FILTER_NAMES = Object.keys(filters);

export default function App() {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState("All");

  const filterButtons = FILTER_NAMES.map(name => (
    <button
      key={name}
      className="px-4 py-1 bg-zinc-800 text-white disabled:bg-white disabled:text-black rounded-lg"
      onClick={() => setFilter(name)}
      disabled={name === filter}
    >
      {name}
    </button>
  ))

  return (
    <>
      <header className="fixed w-screen top-0 bg-black">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <button
              className="px-4 text-2xl text-white"
              onClick={() => setActive(!active)}
            >
              &#9776;
            </button>
            <h1 className="text-white">MyTube</h1>
          </div>
          <div className="flex justfy-center items-center px-4">
            <Search />
          </div>
        </div>

        <div className="flex gap-2 py-2 px-4">
          {filterButtons}
        </div>
      </header>

      <nav 
        className="fixed top-0 w-64 h-screen px-4 z-20 transition-all bg-black text-white"
        style={{ left: active ? "0" : "-16rem" }}
      >
        <h1 className="text-2xl font-semibold my-8">MyTube</h1>
        <ul>
          <li className="py-2">Home</li>
          <li className="py-2">Subscribe</li>
          <li className="py-2">Library</li>
        </ul>
      </nav>

      <div 
        className="fixed inset-0 bg-black/[0.4]"
        style={{ display: active ? "block" : "none" }}
        onClick={() => setActive(false)}
      >
      </div>

      <main className="mt-16 px-4">
        <Video filter={filter} />
        <Survey />
      </main>

      <Promotion />
    </>
  )
}




