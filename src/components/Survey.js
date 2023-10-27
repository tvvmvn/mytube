import { useState } from "react";

const OPTIONS = [
  { id: "s0", name: "스타리아" },
  { id: "s1", name: "아반떼 하이브리드" },
  { id: "s2", name: "코나" },
  { id: "s3", name: "캐스퍼" },
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

  const optionList = OPTIONS.map((option, index) => (
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
        className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600"
      >
        {++index} {option.name}
      </label>
    </li>
  ))

  return (
    <>
      <h3 className="text-lg my-4 font-semibold text-white">
        다음 중 어떤 차를 구매하시겠습니까?
      </h3>

      <ol>
        {optionList}
      </ol>
    </>
  )
}