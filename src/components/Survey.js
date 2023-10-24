import { useState } from "react";

const OPTIONS = [
  { id: "s0", name: "Staria" },
  { id: "s1", name: "Avante" },
  { id: "s2", name: "KONA" },
  { id: "s3", name: "Casper" },
];

// synchronize storage
function saveData(id) {
  localStorage.setItem("survey", id);
}

export default function Survey() {
  const [selectedId, setSelected] = useState(localStorage.getItem("survey") || false);

  function handleChange(id) {
    saveData(id)
    setSelected(id);
  }

  const optionList = OPTIONS.map(option => (
    <li key={option.id} className="mb-2">
      <input
        type="radio"
        id={option.id}
        name="survey"
        className="peer hidden"
        checked={option.id === selectedId}
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
        어떤 차를 사고싶습니까?
      </h3>

      <ul>
        {optionList}
      </ul>
    </>
  )
}