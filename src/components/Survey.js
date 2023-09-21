import { useState } from "react";

const OPTIONS = ["Staria", "IONIQ", "KONA", "Casper"];

export default function Survey() {
  const [selected, setSelected] = useState(localStorage.getItem("survey"));

  function handleChange(name) {
    console.log("You chose:", name);
    localStorage.setItem("survey", name);
    setSelected(name)
  }

  const optionList = OPTIONS.map(name => (
    <li key={name} className="mb-2">
      <input
        type="radio"
        id={name}
        name="survey"
        className="peer hidden"
        value={name}
        checked={name === selected}
        onChange={() => handleChange(name)}
      />
      <label
        htmlFor={name}
        className="block p-2 border peer-checked:outline"
      >
        {name}
      </label>
    </li>
  ))

  return (
    <>
      <h3 className="text-lg my-4 font-semibold">
        Which car do you want to purchase?
      </h3>

      <ul>
        {optionList}
      </ul>
    </>
  )
}