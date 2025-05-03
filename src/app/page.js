'use client'
import { useState, useEffect } from "react";
import companiesData from "./data/company";
import CompanyPanel from "./components/compCards";
import Confetti from "react-confetti";
import { FiArrowRight } from "react-icons/fi";
import Header from "./components/Header";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function HomePage() {
  const [companies, setCompanies] = useState([]);
  const [index, setIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [voted, setVoted] = useState(false);
  const [picked, setPicked] = useState(null);

  useEffect(() => {
    setCompanies(shuffle(companiesData));
  }, []);

  const left = companies[index % companies.length];
  const right = companies[(index + 1) % companies.length];

  function handleChoice(side) {
    if (voted) return;
    setPicked(side);
    setShowConfetti(true);
    setVoted(true);
  }

  function handleEqual() {
    if (voted) return;
    setPicked('equal');
    setShowConfetti(true);
    setVoted(true);
  }

  function handleNextPair() {
    setIndex(index + 2);
    setShowConfetti(false);
    setVoted(false);
    setPicked(null);
  }

  if (typeof window !== "undefined") {
    document.body.style.overflowX = "hidden";
  }

  const confettiWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
  const confettiHeight = typeof window !== "undefined" ? window.innerHeight : 1080;
  const confettiY = confettiHeight * 0.25;

  if (!left || !right) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="relative flex flex-col md:flex-row w-full h-full flex-1 overflow-hidden">
        {/* Vertical divider for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-slate-200 z-30" />
        {/* Confetti for left */}
        {showConfetti && (picked === 'left' || picked === 'equal') && (
          <div className="absolute left-0 top-0 z-50 pointer-events-none w-full md:w-1/2 h-full">
            <Confetti
              width={confettiWidth / (picked === 'equal' ? 2 : 2)}
              height={confettiHeight}
              numberOfPieces={200}
              recycle={false}
              run={showConfetti}
              gravity={1.5}
              initialVelocityY={25}
              y={confettiY}
              style={{ left: 0 }}
            />
          </div>
        )}
        {/* Confetti for right */}
        {showConfetti && (picked === 'right' || picked === 'equal') && (
          <div className="absolute right-0 top-0 z-50 pointer-events-none w-full md:w-1/2 h-full">
            <Confetti
              width={confettiWidth / (picked === 'equal' ? 2 : 2)}
              height={confettiHeight}
              numberOfPieces={200}
              recycle={false}
              run={showConfetti}
              gravity={1.5}
              initialVelocityY={25}
              y={confettiY}
              style={{ right: 0 }}
            />
          </div>
        )}

        {/* No fade overlay here */}

        <CompanyPanel
          company={left}
          onClick={() => handleChoice('left')}
          side="left"
          disabled={voted}
          revealed={voted}
        />

        {/* Center Circle Button */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          {!voted ? (
            <button
              className="flex items-center justify-center rounded-full bg-white shadow-lg w-24 h-24 border border-blue-200 text-blue-700 font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition"
              onClick={handleEqual}
              aria-label="Equal"
              title="Equal"
            >
              Equal
            </button>
          ) : (
            <button
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg w-24 h-24 text-white font-semibold text-lg hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transition"
              onClick={handleNextPair}
              aria-label="Next Pair"
              title="Next Pair"
            >
              Next Pair
            </button>
          )}
        </div>
        <CompanyPanel
          company={right}
          onClick={() => handleChoice('right')}
          side="right"
          disabled={voted}
          revealed={voted}
        />
        {/* For mobile, show Next Pair button below when voted */}
        <div className="flex md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
          {voted && (
            <button
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg px-8 py-4 text-white font-semibold text-lg hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transition"
              onClick={handleNextPair}
            >
              Next Pair <FiArrowRight className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
