import { useState } from "react";

const videos = [
  { id: "v0", name: "All of me", category: "Music" },
  { id: "v1", name: "Snoop Dogg and his career", category: "Music" },
  { id: "v2", name: "Norway traval Vlogs", category: "Travel" },
  { id: "v3", name: "Why do people loves K-Food", category: "Food" },
]

const filters = {
  All: () => true,
  Music: ({ category }) => category === "Music",
  Travel: ({ category }) => category === "Travel",
  Food: ({ category }) => category === "Food",
}

const FILTER_NAMES = Object.keys(filters);

export default function Video() {
  const [filter, setFilter] = useState("All");

  const filterButtons = FILTER_NAMES.map(name => (
    <button 
      key={name} 
      className="px-4 py-1 bg-gray-200 disabled:bg-black disabled:text-white"
      onClick={() => setFilter(name)}
      disabled={name === filter}
    >
      {name}
    </button>  
  ))

  const videoList = videos
    .filter(filters[filter])
    .map(video => (
      <li key={video.id}>
        {video.name}
      </li>
    ))

  return (
    <>
      <div className="flex gap-2">
        {filterButtons}
      </div>

      <ul className="my-4">
        {videoList}
      </ul>
    </>
  )
}