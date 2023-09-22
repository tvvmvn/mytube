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


export default function Video({ filter }) {

  const videoList = videos
    .filter(filters[filter])
    .map(video => (
      <li key={video.id} className="mb-8">
        <div className="h-48 bg-gray-200"></div>
        <h3 className="text-white font-semibold my-2">
          {video.name}
        </h3>
      </li>
    ))

  return (
    <ul>
      {videoList}
    </ul>
  )
}