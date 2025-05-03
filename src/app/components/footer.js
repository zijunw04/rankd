"use client";
export default function SimpleFooter() {
  return (
    <footer className="w-full py-6 bg-white  text-gray-400 flex justify-center items-start border-t border-gray-400">
      <div className="w-full text-center py-1 flex items-center justify-center">
        <span className="text-sm ">
          Made with
          <span
            className="mx-1 "
            role="img"
            aria-label="love"
          >
            ♥
          </span>
          by <span className="font-semibold ">Rankd</span>
        </span>
      </div>
    </footer>
  );
}
