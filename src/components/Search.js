import { useState, useEffect, useRef } from 'react';

const TITLES = ["seoul", "tokyo", "washington D.C", "otawa"];

export default function Search() {
  const [active, setActive] = useState(false);
  const inputEl = useRef(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (active) {
      inputEl.current.focus();
    }
  })

  const titleList = TITLES
    .filter(name => name.indexOf(q.toLocaleLowerCase()) > -1)
    .map(name => (
      <li 
        key={name}
        className="mb-2 text-white"
      >
        {name}
      </li>  
    ))

  function handleClick() {
    setActive(false);
    setQ("");
  }

  const modal = (
    <div className="fixed inset-0 bg-black">
      <div className="flex items-center mt-4 px-4">
        <svg 
          className="w-4 fill-white"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512"
          onClick={handleClick}
        >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
        <input 
          className="w-full px-4 py-1 ml-2 bg-zinc-800 text-white outline-none rounded-full"
          type="text" 
          onChange={({ target }) => setQ(target.value)}
          placeholder='Search MyTube'
          ref={inputEl}
        />
      </div>
      <ul className="mt-4 px-4">
        {q && titleList}
      </ul>
    </div>  
  )

  return (
    <>
      <button
        className="px-4 flex items-center"
        onClick={() => setActive(true)}
      >
        <svg
          className="w-4 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>

      {active && modal}
    </>
  )
}