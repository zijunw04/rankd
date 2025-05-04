"use client";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Link from "next/link";
import RankdHeader from "../../components/rankedheader";
import Image from "next/image";
import SimpleFooter from "../../components/footer";
import companiesData from "../../data/company";
import brainrotData from "@/app/data/brainrot";

// Define DATA_MAP here
const DATA_MAP = {
  companies: companiesData,
  brainrot: brainrotData
  // Add more topics as needed
};

export default function Leaderboard() {
  // Extract topic from pathname instead of params
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  // If path is /companies/leaderboard, topic should be "companies"
  const topic = pathSegments.length > 1 ? pathSegments[0] : "";
  
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!topic) return;
    
    const staticData = DATA_MAP[topic] || [];
    const normalize = (name) =>
      typeof name === "string" ? name.trim().toLowerCase() : "";
    const staticItemMap = Object.fromEntries(
      staticData.map((item) => [normalize(item.name), item])
    );

    // Add error handling to your onValue listener
const itemsRef = ref(db, topic);
const unsubscribe = onValue(itemsRef, 
  (snapshot) => {
    const data = snapshot.val();
    console.log("Firebase data received:", data); // Debug log
    if (data) {
      // Process data as before
      const firebaseItems = Object.entries(data).map(([id, item]) => {
        const staticInfo = staticItemMap[normalize(item.name)] || {};
        return {
          ...staticInfo,
          name: item.name,
          elo: item.elo ?? 1000,
          id,
        };
      });
      setItems(
        firebaseItems.slice().sort((a, b) => (b.elo ?? 0) - (a.elo ?? 0))
      );
    } else {
      console.log("No data found at path:", topic);
      setItems([]);
    }
  }, 
  (error) => {
    console.error("Firebase data fetch error:", error);
  }
);

    return () => unsubscribe();
  }, [topic]);

  // Build a map from item id or name to its global rank
  const rankMap = new Map();
  items.forEach((item, idx) => {
    rankMap.set(item.id || item.name, idx + 1);
  });

  // Enhanced search: if user types #number, show that rank
  let filteredItems = items.filter((item) =>
    item && item.name ? item.name.toLowerCase().includes(searchValue.trim().toLowerCase()) : false
  );
  

  const rankMatch = searchValue.trim().match(/^#(\d+)$/);
  if (rankMatch) {
    const rank = parseInt(rankMatch[1], 10);
    const itemAtRank = items[rank - 1];
    filteredItems = itemAtRank ? [itemAtRank] : [];
  }


  const displayTopic = topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : "";

  return (
    <div>
      <RankdHeader />
      <div className="min-h-screen mb-10 bg-white flex flex-col items-center py-10 px-2">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto text-gray-900">
              {displayTopic} Leaderboard
            </h1>
          </div>
          {/* Search input */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={`Search ${topic} by name/rank(#)...`}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-lg"
            />
          </div>
          {/* Only showing top 100 items */}
          <div className="mb-4 text-start text-gray-500 text-sm font-medium">
            Showing top {Math.min(100, items.length)}/{items.length} {topic}
          </div>

          <div className="space-y-4">
            {filteredItems.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                No {topic} found.
              </div>
            ) : (
              filteredItems.slice(0, 99).map((item) => (
                <div
                  key={item.id || item.name}
                  className="flex items-center justify-between bg-white rounded-2xl shadow border border-gray-100 px-6 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 font-bold text-2xl text-gray-700">
                      #{rankMap.get(item.id || item.name)}
                    </div>
                    {(item.image || item.logo) && (
                      <Image
                        src={item.image || item.logo}
                        width={48}
                        height={48}
                        alt={`${item.name} image`}
                        className="rounded-full bg-gray-50 border w-12 h-12 object-cover"
                      />
                    )}
                    <div>
                      <div className="font-bold text-lg text-gray-900">
                        {item.name}
                      </div>
                      {(item.location || item.subtitle || item.type) && (
                        <div className="text-gray-500 text-sm">
                          {item.location || item.subtitle || item.type}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-2xl text-gray-900">
                      {item.elo ?? 1000}
                    </span>
                    <span className="text-xs text-gray-400 tracking-wide font-bold">
                      ELO
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href={`/${topic}`}
              className="px-4 py-2 rounded-lg border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Back to Vote
            </Link>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
}
