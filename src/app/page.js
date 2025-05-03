"use client";
import { get, ref, update } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { FiArrowRight } from "react-icons/fi";
import CompanyPanel from "./components/compCards";
import RankdHeader from "./components/header";
import companiesData from "./data/company";
import { db } from "./firebase";

function Probability(rating1, rating2) {
  return 1.0 / (1 + Math.pow(10, (rating1 - rating2) / 400.0));
}

// 1) Update EloRating signature to return [newLeft, newRight]
function EloRating(Ra, Rb, K, scoreA) {
  const Ea = 1 / (1 + Math.pow(10, (Rb - Ra) / 400))
  const Eb = 1 / (1 + Math.pow(10, (Ra - Rb) / 400))
  const newRa = Math.round(Ra + K * (scoreA - Ea))
  const newRb = Math.round(Rb + K * ((1 - scoreA) - Eb))
  return [newRa, newRb]
}




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
  const [leftElo, setLeftElo] = useState(null);
  const [rightElo, setRightElo] = useState(null);
  const [leftEloChange, setLeftEloChange] = useState(null);
  const [rightEloChange, setRightEloChange] = useState(null);
  const K = 32;
  const [confettiHeight, setConfettiHeight] = useState(0);
  const [confettiWidth, setConfettiWidth] = useState(0);
  const confettiRef = useRef(null);

  useEffect(() => {
    setCompanies(shuffle(companiesData));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setConfettiWidth(confettiRef.current ? confettiRef.current.offsetWidth : 0);
      setConfettiHeight(confettiRef.current ? confettiRef.current.offsetHeight : 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function handleChoice(side) {
    if (voted) return
    setPicked(side)
    setShowConfetti(true)
    setVoted(true)
  
    // IDs for database paths
    const leftId  = left.id  || left.name.replace(/\s+/g, "_").toLowerCase()
    const rightId = right.id || right.name.replace(/\s+/g, "_").toLowerCase()
  
    // Fetch current ratings
    const leftSnap  = await get(ref(db, `companies/${leftId}/elo`))
    const rightSnap = await get(ref(db, `companies/${rightId}/elo`))
    const leftEloBefore  = leftSnap.exists()  ? leftSnap.val() : 1000
    const rightEloBefore = rightSnap.exists() ? rightSnap.val() : 1000
  
    // Determine the outcome from left’s perspective
    let outcomeLeft
    if (side === "left")  outcomeLeft = 1
    else if (side === "right") outcomeLeft = 0
    else outcomeLeft = 0.5  // equal
  
    // Compute new Elo for both sides
    const [newLeftElo, newRightElo] = EloRating(
      leftEloBefore,
      rightEloBefore,
      K,
      outcomeLeft
    )
  
    // Prepare the database updates
    const updates = {
      [`companies/${leftId}/elo`]: newLeftElo,
      [`companies/${rightId}/elo`]: newRightElo
    }
  
    try {
      // Push to Firebase
      await update(ref(db), updates)
  
      // Compute changes for display
      setLeftElo(newLeftElo)
      setRightElo(newRightElo)
      setLeftEloChange(newLeftElo  - leftEloBefore)
      setRightEloChange(newRightElo - rightEloBefore)
    } catch (e) {
      console.error("Firebase update failed:", e)
    }
  }

  const left = companies[index % companies.length];
  const right = companies[(index + 1) % companies.length];

  // Fetch latest Elo from Firebase for both companies
  useEffect(() => {
    async function fetchElos() {
      if (!left || !right) return;
      const leftId = left.id || left.name.replace(/\s+/g, "_").toLowerCase();
      const rightId = right.id || right.name.replace(/\s+/g, "_").toLowerCase();
      const leftSnap = await get(ref(db, `companies/${leftId}/elo`));
      const rightSnap = await get(ref(db, `companies/${rightId}/elo`));
      setLeftElo(leftSnap.exists() ? leftSnap.val() : 1000);
      setRightElo(rightSnap.exists() ? rightSnap.val() : 1000);
    }
    fetchElos();
  }, [index, companies, left, right]);

 

  async function handleEqual() {
    if (voted) return;
    setPicked("equal");
    setShowConfetti(true);
    setVoted(true);
  }

  function handleNextPair() {
    const shuffled = shuffle(companiesData);
    setCompanies(shuffled);
    setIndex(0);
    setShowConfetti(false);
    setVoted(false);
    setPicked(null);
    setLeftElo(null);
    setRightElo(null);
    setLeftEloChange(null);
    setRightEloChange(null);
  }

  if (typeof window !== "undefined") {
    document.body.style.overflowX = "hidden";
  }

  const confettiWidthCalc =
    typeof window !== "undefined" ? window.innerWidth : 1920;
  const confettiHeightCalc =
    typeof window !== "undefined" ? window.innerHeight : 1080;
  const confettiY = confettiHeightCalc * 0.25;

  if (!left || !right) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen bg-white overflow-x-hidden">
      <RankdHeader />
      <div className="relative flex flex-col md:flex-row w-full h-full flex-1 overflow-hidden"  ref={confettiRef}>
        {/* Vertical divider for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-slate-200 z-30" />
        {/* Confetti for left */}
        {showConfetti && (picked === "left" || picked === "equal") && (
          <div className="absolute left-0 top-0 z-50 pointer-events-none w-full md:w-1/2 h-full">
            <Confetti
              width={confettiWidth / (picked === "equal" ? 2 : 2)}
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
        {showConfetti && (picked === "right" || picked === "equal") && (
          <div className="absolute right-0 top-0 z-50 pointer-events-none w-full md:w-1/2 h-full">
            <Confetti
              width={confettiWidth / (picked === "equal" ? 2 : 2)}
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

        <CompanyPanel
          company={{ ...left, elo: leftElo, eloChange: leftEloChange }}
          onClick={() => handleChoice("left")}
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
          company={{ ...right, elo: rightElo, eloChange: rightEloChange }}
          onClick={() => handleChoice("right")}
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
