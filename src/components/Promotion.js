import { useState, useEffect } from "react";
import { isOneWeekSinceThen } from "../utils/dateTime";

export default function Promotion() {
  const [promoActive, setPromoActive] = useState(true);

  useEffect(() => {
    handlePromo();
  }, [])

  function handlePromo() {
    const blockedAt = localStorage.getItem("blockedAt");

    if (isOneWeekSinceThen(blockedAt)) {
      localStorage.removeItem("blockedAt");
      setPromoActive(true);
    }
  
    if (blockedAt) {
      setPromoActive(false);
    }
  }

  function blockPromo() {
    localStorage.setItem("blockedAt", new Date());
    setPromoActive(false)
  }

  return promoActive && (
    <div className="fixed inset-0 bg-black/[0.2]">
      <div className="absolute bottom-0 m-4 bg-white px-4 pb-4 border">
        <h3 className="text-xl my-4">Try YouTube Premium</h3>
        <p className="my-4">
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
  )
}