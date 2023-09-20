import { useState, useEffect } from 'react';

export default function App() {
  const [navActive, setNavActive] = useState(false);
  const [blocked, setBlocked] = useState(localStorage.getItem("blockedAt"));

  const [surveyOptions, setSurveyOptions] = useState([
    { id: "s0", name: "Seoul" },
    { id: "s1", name: "New York" },
    { id: "s2", name: "London" },
    { id: "s3", name: "Tokyo" },
  ]);

  // make promo appear once in a week.
  function blockPromo() {
    localStorage.setItem("blockedAt", new Date());
  }

  const optionList = surveyOptions.map((option, index) => (
    <li key={option.id} className="mb-2">
      <input 
        type="radio" 
        name="survey"
        id={option.name} 
        value={option.name}
        className="peer hidden" 
        onChange={() => console.log(option.name)}
      />
      <label 
        htmlFor={option.name}
        className="block p-2 border peer-checked:outline"
      >{++index}. {option.name}
      </label>
    </li>
  ))

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
            <h1>
              YouTube
            </h1>
          </div>
          <div className="flex justfy-center items-center px-4">
          <svg  
            className="w-6"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
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
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Maiores modi quod fuga, accusamus officiis quos enim. Iusto, dignissimos? 
          Ipsa error quo iste quisquam delectus doloremque voluptas vero aliquid quod obcaecati!
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Maiores modi quod fuga, accusamus officiis quos enim. Iusto, dignissimos? 
          Ipsa error quo iste quisquam delectus doloremque voluptas vero aliquid quod obcaecati!
        </p>

        {/* SURVEY */}
          <h3 className="text-lg my-4 font-semibold">What do you think about YouTube?</h3>
          <ul>
            {optionList}
          </ul>
      </main>

      {/* PROMOTION */}
      {!blocked && (
        <div className="fixed inset-0 bg-black/[0.2]">
          <div className="absolute bottom-0 m-4 bg-white px-4 pb-4 border">
            <p className="my-4">
              <h3 className="text-xl my-4">Try YouTube Premium</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Maiores modi quod fuga, accusamus officiis quos enim. Iusto, dignissimos?
              Ipsa error quo iste quisquam delectus doloremque voluptas vero aliquid quod obcaecati!
            </p>
            <button 
              className="w-full p-2 text-center bg-gray-200"
              onClick={blockPromo}
            >
              Not now
            </button>
          </div>
        </div>
      )}

      <footer className="p-8 text-center bg-gray-200 mt-8">
        2023 &copy; tvvmvn
      </footer>
    </>
  )
}




