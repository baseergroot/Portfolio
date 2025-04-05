export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0f] z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-purple-500 animate-spin"></div>
        <div
          className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"
          style={{ animationDirection: "reverse", opacity: 0.7 }}
        ></div>
      </div>
    </div>
  )
}

