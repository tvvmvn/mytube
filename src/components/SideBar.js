export default function SideBar({ active, setActive }) {
  return (
    <>
      <nav 
        className="fixed top-0 -left-60 w-60 h-screen px-4 z-20 transition-all bg-black text-white"
        style={{ left: active && "0px" }}
      >
        <h1 className="text-2xl font-semibold my-8">MyTube</h1>
        <ul>
          <li className="py-2">홈</li>
          <li className="py-2">구독</li>
          <li className="py-2">라이브러리</li>
        </ul>
      </nav>

      <div 
        className="fixed inset-0 bg-black/[0.4] hidden"
        style={{ display: active && "block" }}
        onClick={() => setActive(false)}
        >
      </div>
    </>
  )
}