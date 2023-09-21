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
        className="mb-2"
      >
        {name}
      </li>  
    ))

  function handleClick() {
    setActive(false);
    setQ("");
  }

  const modal = (
    <div className="fixed inset-0 bg-white/[0.9]">
      <div className="flex justify-end">
        <button 
          className="text-2xl p-4"
          onClick={handleClick}
        >
          &times;
        </button>
      </div>
      <div className="px-4">
        <input 
          className="w-full p-2 border mb-4 outline-none"
          type="text" 
          onChange={({ target }) => setQ(target.value)}
          placeholder='Search YouTube'
          ref={inputEl}
        />
        <ul>
          {q && titleList}
        </ul>
      </div>
    </div>  
  )

  return (
    <>
      <svg
        className="w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        onClick={() => setActive(true)}
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>

      {active && modal}
    </>
  )
}