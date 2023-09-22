import { useState, useEffect } from "react";
import { isOneWeekSinceThen } from "../utils/dateTime";

export default function Promotion() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    handlePromo();
  }, [])

  function handlePromo() {
    const blockedAt = localStorage.getItem("blockedAt");

    if (isOneWeekSinceThen(blockedAt)) {
      localStorage.removeItem("blockedAt");
      setActive(true);
    }
  
    if (blockedAt) {
      setActive(false);
    }
  }

  function blockPromo() {
    localStorage.setItem("blockedAt", new Date());
    setActive(false)
  }

  return active && (
    <div className="fixed inset-0 bg-white p-8">
      <h3 className="text-4xl my-8">Try MyTube Premium</h3>
      <p className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maiores modi quod fuga, accusamus officiis quos enim. Iusto, dignissimos?
        Ipsa error quo iste quisquam delectus doloremque voluptas vero aliquid quod obcaecati!
      </p>
      <button
        className="w-full p-2 text-center border-2"
        onClick={blockPromo}
      >
        Not now
      </button>
    </div>
  )
}