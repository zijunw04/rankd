"use client";
import { get, ref, update } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { FiArrowRight } from "react-icons/fi";
import CompanyPanel from "./components/compCards";
import RankdHeader from "./components/header";
import companiesData from "./data/company";
import { db } from "./firebase";

function EloRating(Ra, Rb, K, scoreA) {
  const Ea = 1 / (1 + Math.pow(10, (Rb - Ra) / 400));
  const Eb = 1 / (1 + Math.pow(10, (Ra - Rb) / 400));
  const newRa = Math.round(Ra + K * (scoreA - Ea));
  const newRb = Math.round(Rb + K * (1 - scoreA - Eb));
  return [newRa, newRb];
}

function getTwoRandomCompanies(arr) {
  if (arr.length < 2) return [arr[0], arr[0]];
  const firstIdx = Math.floor(Math.random() * arr.length);
  let secondIdx;
  do {
    secondIdx = Math.floor(Math.random() * arr.length);
  } while (secondIdx === firstIdx);
  return [arr[firstIdx], arr[secondIdx]];
}

export default function HomePage() {
  const [companies, setCompanies] = useState([]);
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [voted, setVoted] = useState(false);
  const [picked, setPicked] = useState(null);
  const [leftElo, setLeftElo] = useState(null);
  const [rightElo, setRightElo] = useState(null);
  const [leftEloChange, setLeftEloChange] = useState(null);
  const [rightEloChange, setRightEloChange] = useState(null);
  const K = 32;
  const confettiRef = useRef(null);
  const [confettiHeight, setConfettiHeight] = useState(0);
  const [confettiWidth, setConfettiWidth] = useState(0);

  // Set body overflow safely
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  // Handle confetti size
  useEffect(() => {
    const handleResize = () => {
      setConfettiWidth(
        confettiRef.current ? confettiRef.current.offsetWidth : 0
      );
      setConfettiHeight(
        confettiRef.current ? confettiRef.current.offsetHeight : 0
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch companies data (if needed, otherwise use companiesData directly)
  useEffect(() => {
    setCompanies(companiesData); // or fetch from backend
  }, []);

  // Pick initial random pair when companies are loaded
  useEffect(() => {
    if (companies.length >= 2) {
      const [l, r] = getTwoRandomCompanies(companies);
      setLeft(l);
      setRight(r);
    }
  }, [companies]);

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
  }, [left, right]);

  async function handleChoice(side) {
    if (voted) return;
    if (confettiRef.current) {
      setConfettiWidth(confettiRef.current.offsetWidth);
      setConfettiHeight(confettiRef.current.offsetHeight);
    }
    setPicked(side);
    setShowConfetti(true);
    setVoted(true);
  
    const leftId = left.id || left.name.replace(/\s+/g, "_").toLowerCase();
    const rightId = right.id || right.name.replace(/\s+/g, "_").toLowerCase();
    const leftSnap = await get(ref(db, `companies/${leftId}/elo`));
    const rightSnap = await get(ref(db, `companies/${rightId}/elo`));
    const leftEloBefore = leftSnap.exists() ? leftSnap.val() : 1000;
    const rightEloBefore = rightSnap.exists() ? rightSnap.val() : 1000;
  
    let outcomeLeft = side === "left" ? 1 : side === "right" ? 0 : 0.5;
    const [newLeftElo, newRightElo] = EloRating(
      leftEloBefore,
      rightEloBefore,
      K,
      outcomeLeft
    );
  
    // Optimistically update UI immediately
    setLeftElo(newLeftElo);
    setRightElo(newRightElo);
    setLeftEloChange(newLeftElo - leftEloBefore);
    setRightEloChange(newRightElo - rightEloBefore);
  
    const updates = {
      [`companies/${leftId}/elo`]: newLeftElo,
      [`companies/${leftId}/name`]: left.name,
      [`companies/${rightId}/elo`]: newRightElo,
      [`companies/${rightId}/name`]: right.name,
    };
  
    try {
      await update(ref(db), updates);
      // No need to update state again, already done optimistically
    } catch (e) {
      console.error("Firebase update failed:", e);
      // Optionally: revert state or show error
    }
  }
  
  async function handleEqual() {
    if (voted) return;
    if (confettiRef.current) {
      setConfettiWidth(confettiRef.current.offsetWidth);
      setConfettiHeight(confettiRef.current.offsetHeight);
    }
    setPicked("equal");
    setShowConfetti(true);
    setVoted(true);
  
    const leftId = left.id || left.name.replace(/\s+/g, "_").toLowerCase();
    const rightId = right.id || right.name.replace(/\s+/g, "_").toLowerCase();
    const leftSnap = await get(ref(db, `companies/${leftId}/elo`));
    const rightSnap = await get(ref(db, `companies/${rightId}/elo`));
    const leftEloBefore = leftSnap.exists() ? leftSnap.val() : 1000;
    const rightEloBefore = rightSnap.exists() ? rightSnap.val() : 1000;
    const [newLeftElo, newRightElo] = EloRating(leftEloBefore, rightEloBefore, K, 0.5);
  
    // Optimistically update UI immediately
    setLeftElo(newLeftElo);
    setRightElo(newRightElo);
    setLeftEloChange(newLeftElo - leftEloBefore);
    setRightEloChange(newRightElo - rightEloBefore);
  
    const updates = {
      [`companies/${leftId}/elo`]: newLeftElo,
      [`companies/${leftId}/name`]: left.name,
      [`companies/${rightId}/elo`]: newRightElo,
      [`companies/${rightId}/name`]: right.name,
    };
  
    try {
      await update(ref(db), updates);
      // No need to update state again, already done optimistically
    } catch (e) {
      console.error("Firebase update failed:", e);
      // Optionally: revert state or show error
    }
  }
  
  

  function handleNextPair() {
    const [l, r] = getTwoRandomCompanies(companies);
    setLeft(l);
    setRight(r);
    setShowConfetti(false);
    setVoted(false);
    setPicked(null);
    setLeftElo(null);
    setRightElo(null);
    setLeftEloChange(null);
    setRightEloChange(null);
  }
  

  if (!left || !right) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <RankdHeader />
      <main className="flex-1 flex flex-col items-center px-2">
        <div
          ref={confettiRef}
          className="
    relative flex flex-col md:flex-row w-full px-[10%]
    pt-2 md:pt-4 gap-y-6 md:gap-y-0 md:gap-x-8
    min-h-[400px]
  "
        >
          {/* Vertical divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-slate-200 z-30" />

          {/* Confetti for left */}
          {showConfetti &&
            (picked === "left" || picked === "equal") &&
            confettiWidth > 0 &&
            confettiHeight > 0 && (
              <div className="absolute left-0 top-0 z-50 pointer-events-none w-full md:w-1/2 h-full">
                <Confetti
                  width={confettiWidth / 2}
                  height={confettiHeight}
                  numberOfPieces={200}
                  recycle={false}
                  run={showConfetti}
                  gravity={1.5}
                  initialVelocityY={25}
                  style={{ left: 0 }}
                />
              </div>
            )}

          {/* Confetti for right */}
          {showConfetti &&
            (picked === "right" || picked === "equal") &&
            confettiWidth > 0 &&
            confettiHeight > 0 && (
              <div className="absolute right-0 top-0 z-50 pointer-events-none w-full md:w-1/2 h-full">
                <Confetti
                  width={confettiWidth / 2}
                  height={confettiHeight}
                  numberOfPieces={200}
                  recycle={false}
                  run={showConfetti}
                  gravity={1.5}
                  initialVelocityY={25}
                  style={{ right: 0 }}
                />
              </div>
            )}

<CompanyPanel
  key={left.id || left.name} 
  company={{ ...left, elo: leftElo, eloChange: leftEloChange }}
  onClick={() => handleChoice("left")}
  side="left"
  disabled={voted}
  revealed={voted}
/>

          {/* Center Circle Button for desktop */}
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
  key={right.id || right.name} 
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
      </main>
      {/* Place your footer here if needed */}
    </div>
  );
}
