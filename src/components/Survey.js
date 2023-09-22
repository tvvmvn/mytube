import { useState } from "react";

const OPTIONS = [
  { id: "s0", name: "Staria" },
  { id: "s1", name: "Avante" },
  { id: "s2", name: "KONA" },
  { id: "s3", name: "Casper" },
];

export default function Survey() {
  const [selected, setSelected] = useState(localStorage.getItem("survey") || false);

  function handleChange(id) {
    console.log("You chose:", id);
    localStorage.setItem("survey", id);
    setSelected(id);
  }

  const optionList = OPTIONS.map(option => (
    <li key={option.id} className="mb-2">
      <input
        type="radio"
        id={option.id}
        name="survey"
        className="peer hidden"
        checked={option.id === selected}
        onChange={() => handleChange(option.id)}
      />
      <label
        htmlFor={option.id}
        className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600"
      >
        {option.name}
      </label>
    </li>
  ))

  return (
    <>
      <h3 className="text-lg my-4 font-semibold text-white">
        Which car do you want to purchase?
      </h3>

      <ul>
        {optionList}
      </ul>
    </>
  )
}