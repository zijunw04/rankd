// app/rankd/[topic]/page.js
"use client";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import RankdHeader from "../components/rankedheader";
import ItemPanel from "../components/itemCards";
import companiesData from "../data/company"; 
import brainrotData from "../data/brainrot";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client (only for read operations)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Generic adapter function
function mapItemToGenericFormat(item, elo, eloChange, topic) {
  // Base properties all items should have
  const genericItem = {
    name: item.name,
    description: item.description,
    elo: elo,
    eloChange: eloChange,
    tags: item.tags || []
  };
  
  // Topic-specific mapping
  switch(topic) {
    case 'companies':
      return {
        ...genericItem,
        image: item.logo,
        subtitle: item.type,
        externalLink: item.linkedin,
        metadata: {
          Location: item.location,
          Founded: item.foundingDate,
          Employees: item.employeeSize
        },
        sections: {
          "Typical Salary": item.salary,
          "Overall Revenue": item.revenue
        }
      };
    case 'brainrot':
      return {
        ...genericItem,
        image: item.image,
        subtitle: item.category,
        type: "brainrot",
      };
    default:
      return {
        ...genericItem,
        image: item.image,
        subtitle: item.subtitle
      };
  }
}

// Map topic string to data
const DATA_MAP = {
  companies: companiesData,
  brainrot: brainrotData
};

function getTwoRandomItems(arr) {
  if (arr.length < 2) return [arr[0], arr[0]];
  const firstIdx = Math.floor(Math.random() * arr.length);
  let secondIdx;
  do {
    secondIdx = Math.floor(Math.random() * arr.length);
  } while (secondIdx === firstIdx);
  return [arr[firstIdx], arr[secondIdx]];
}

export default function RankdTopicPage() {
  const params = useParams();
  const topic = params.topic;
  const [items, setItems] = useState([]);
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [voted, setVoted] = useState(false);
  const [picked, setPicked] = useState(null);
  const [leftElo, setLeftElo] = useState(null);
  const [rightElo, setRightElo] = useState(null);
  const [leftEloChange, setLeftEloChange] = useState(null);
  const [rightEloChange, setRightEloChange] = useState(null);
  const confettiRef = useRef(null);
  const [confettiHeight, setConfettiHeight] = useState(0);
  const [confettiWidth, setConfettiWidth] = useState(0);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
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

  useEffect(() => {
    if (!topic) return;
    setItems(DATA_MAP[topic] || []);
  }, [topic]);

  useEffect(() => {
    if (items.length >= 2) {
      const [l, r] = getTwoRandomItems(items);
      setLeft(l);
      setRight(r);
    }
  }, [items]);

  useEffect(() => {
    async function fetchElos() {
      if (!left || !right) return;
      
      try {
        // Ensure table exists first via API
        await fetch('/api/ensure-table', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic })
        });
        
        const leftId = left.id || left.name.replace(/\s+/g, "_").toLowerCase();
        const rightId = right.id || right.name.replace(/\s+/g, "_").toLowerCase();
        
      
        
        const { data: leftData, error: leftError } = await supabase
          .from(topic)
          .select('elo')
          .eq('id', leftId)
          .single();
        
        if (leftError && leftError.code !== 'PGRST116') {
          console.error("Error fetching left ELO:", leftError);
        }
        
        const { data: rightData, error: rightError } = await supabase
          .from(topic)
          .select('elo')
          .eq('id', rightId)
          .single();
        
        if (rightError && rightError.code !== 'PGRST116') {
          console.error("Error fetching right ELO:", rightError);
        }
        
        setLeftElo(leftData?.elo || 1000);
        setRightElo(rightData?.elo || 1000);
      } catch (error) {
        console.error("Error in fetchElos:", error);
      }
    }
    
    fetchElos();
  }, [left, right, topic]);

  async function handleChoice(side) {
    if (voted) return;
    
    if (confettiRef.current) {
      setConfettiWidth(confettiRef.current.offsetWidth);
      setConfettiHeight(confettiRef.current.offsetHeight);
    }
    
    setPicked(side);
    setShowConfetti(true);
    setVoted(true);
    
    try {
      const leftId = left.id || left.name.replace(/\s+/g, "_").toLowerCase();
      const rightId = right.id || right.name.replace(/\s+/g, "_").toLowerCase();
      
  
      
      // Call our API route instead of Supabase directly
      const response = await fetch('/api/elo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          leftId,
          rightId,
          leftName: left.name,
          rightName: right.name,
          outcome: side
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update ELO ratings');
      }
   
      // Update state with returned values
      setLeftElo(data.left_elo);
      setRightElo(data.right_elo);
      setLeftEloChange(data.left_elo_change);
      setRightEloChange(data.right_elo_change);
    } catch (error) {
      console.error("Error in handleChoice:", error);
  
    }
  }

  async function handleEqual() {
    await handleChoice("equal");
  }

  function handleNextPair() {
    const [l, r] = getTwoRandomItems(items);
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
          className="relative flex flex-row items-start justify-center w-full px-[5%] sm:px-[10%] gap-x-2 sm:gap-x-8 min-h-[95vh]"
        >
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
  
          <ItemPanel
            key={left.id || left.name}
            item={mapItemToGenericFormat(left, leftElo, leftEloChange, topic)}
            onClick={() => handleChoice("left")}
            side="left"
            disabled={voted}
            revealed={voted}
            className="w-1/2 flex items-center justify-center px-1 sm:px-4"
          />
  
          <div className="h-full w-px bg-gray-200 absolute left-1/2 transform -translate-x-1/2 z-30"></div>
          
          {/* Center Button for all screen sizes */}
          <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 items-center justify-center">
            {!voted ? (
              <button
                className="flex items-center justify-center rounded-full bg-white shadow-lg w-16 h-16 sm:w-24 sm:h-24 border border-blue-200 text-blue-700 font-semibold text-sm sm:text-lg hover:bg-blue-50 hover:scale-105 transition"
                onClick={handleEqual}
                aria-label="Equal"
                title="Equal"
              >
                Equal
              </button>
            ) : (
              <button
                className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg w-16 h-16 sm:w-24 sm:h-24 text-white font-semibold text-sm sm:text-lg hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transition"
                onClick={handleNextPair}
                aria-label="Next Pair"
                title="Next Pair"
              >
                Next
              </button>
            )}
          </div>
  
          <ItemPanel
            key={right.id || right.name}
            item={mapItemToGenericFormat(right, rightElo, rightEloChange, topic)}
            onClick={() => handleChoice("right")}
            side="right"
            disabled={voted}
            revealed={voted}
            className="w-1/2 flex items-center justify-center px-1 sm:px-4"
          />
        </div>
      </main>
    </div>
  );
}
