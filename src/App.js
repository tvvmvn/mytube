import { useState, useEffect } from 'react';
import Video from './components/Video';
import Survey from './components/Survey';
import Promotion from './components/Promotion';
import Search from './components/Search';

const FILTER_MAP = {
  All: () => true,
  Music: ({ category }) => category === "Music",
  Travel: ({ category }) => category === "Travel",
  Food: ({ category }) => category === "Food",
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

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
        <div className="flex justify-between h-12 px-4">
          <div className="flex items-center">
            <button 
              className="px-4 h-full"
              onClick={() => setActive(!active)}
            >
              <svg 
                className="w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
            <h1 className="text-white font-semibold">MyTube</h1>
          </div>
          <Search />
        </div>

        <div className="flex gap-2 py-2 px-4">
          {filterButtons}
        </div>
      </header>

      <nav 
        className="fixed top-0 w-60 h-screen px-4 z-20 transition-all bg-black text-white"
        style={{ left: active ? "0" : "-15rem" }}
      >
        <h1 className="text-2xl font-semibold my-8">MyTube</h1>
        <ul>
          <li className="py-2">Home</li>
          <li className="py-2">Subscriptions</li>
          <li className="py-2">Library</li>
        </ul>
      </nav>

      <div 
        className="fixed inset-0 bg-black/[0.4]"
        style={{ display: active ? "block" : "none" }}
        onClick={() => setActive(false)}
      >
      </div>

      <main className="mt-32 px-4 pb-8">
        <Video 
          filter={filter} 
          FILTER_MAP={FILTER_MAP} 
        />
        <Survey />
      </main>

      <Promotion />
    </>
  )
}




