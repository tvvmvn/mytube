import { useState, useEffect } from 'react';
import Survey from './components/Survey';
import Promotion from './components/Promotion';
import Search from './components/Search';
import SideBar from './components/SideBar';

const VIDEOS = [
  { id: "v0", name: "All of me", category: "music" },
  { id: "v1", name: "Snoop Dogg and his career", category: "music" },
  { id: "v2", name: "Norway traval Vlogs", category: "travel" },
  { id: "v3", name: "Why do people loves K-Food", category: "food" },
]

const FILTER_MAP = {
  전체: () => true,
  음악: ({ category }) => category == "music",
  여행: ({ category }) => category == "travel",
  음식: ({ category }) => category == "food",
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  const [filter, setFilter] = useState("전체");
  const [sideBarActive, setSideBarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

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

  const videoList = VIDEOS
    .filter(FILTER_MAP[filter])
    .map(video => (
      <li key={video.id} className="mb-8">
        <div className="h-48 bg-zinc-800 rounded-xl"></div>
        <h3 className="text-white font-semibold my-2">
          {video.name}
        </h3>
      </li>
    ))

  return (
    <>
      <header className="fixed w-screen top-0 bg-black">
        <div className="flex justify-between h-12 px-4">
          <div className="flex items-center">
            <button
              className="px-4 h-full"
              onClick={() => setSideBarActive(true)}
            >
              <svg
                className="w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
            <h1 className="text-white font-semibold">MyTube</h1>
          </div>
          <button
            className="px-4 flex items-center"
            onClick={() => setSearchActive(true)}
          >
            <svg
              className="w-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 py-2 px-4">
          {filterButtons}
        </div>
      </header>

      {searchActive && (
        <Search setActive={setSearchActive} />
      )}

      <SideBar 
        active={sideBarActive} 
        setActive={setSideBarActive} 
      />

      <main className="mt-32 px-4 pb-8">
        <ul>
          {videoList}
        </ul>
        <Survey />
      </main>

      <Promotion />
    </>
  )
}




