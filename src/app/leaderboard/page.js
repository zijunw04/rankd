"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import companiesData from "../data/company";
import Link from "next/link";
import RankdHeader from "../components/header";
import Image from "next/image";
import SimpleFooter from "../components/footer";

export default function Leaderboard() {
  const [companies, setCompanies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const normalize = (name) =>
      typeof name === "string" ? name.trim().toLowerCase() : "";
    const staticCompanyMap = Object.fromEntries(
      companiesData.map((c) => [normalize(c.name), c])
    );

    const companiesRef = ref(db, "companies");
    const unsubscribe = onValue(companiesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const firebaseCompanies = Object.entries(data).map(([id, company]) => {
          const staticInfo = staticCompanyMap[normalize(company.name)] || {};
          return {
            ...staticInfo,
            name: company.name,
            elo: company.elo ?? 1000,
            id,
          };
        });
        setCompanies(
          firebaseCompanies.slice().sort((a, b) => (b.elo ?? 0) - (a.elo ?? 0))
        );
      } else {
        setCompanies([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Build a map from company id or name to its global rank
  const rankMap = new Map();
  companies.forEach((company, idx) => {
    rankMap.set(company.id || company.name, idx + 1);
  });

  // Enhanced search: if user types #number, show that rank
  let filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  const rankMatch = searchValue.trim().match(/^#(\d+)$/);
  if (rankMatch) {
    const rank = parseInt(rankMatch[1], 10);
    const companyAtRank = companies[rank - 1];
    filteredCompanies = companyAtRank ? [companyAtRank] : [];
  }

  return (
    <div>
      <RankdHeader />
      <div className="min-h-screen mb-10 bg-white flex flex-col items-center py-10 px-2">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto text-gray-900">
              Leaderboard
            </h1>
          </div>
          {/* Search input */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search companies by name/rank(#)..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-lg"
            />
          </div>
          {/* Only showing top 100 companies */}
          <div className="mb-4 text-start text-gray-500 text-sm font-medium">
            Showing top 100/{companies.length} companies
          </div>

          <div className="space-y-4">
            {filteredCompanies.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                No companies found.
              </div>
            ) : (
              filteredCompanies.slice(0, 100).map((company) => (
                <div
                  key={company.id || company.name}
                  className="flex items-center justify-between bg-white rounded-2xl shadow border border-gray-100 px-6 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 font-bold text-2xl text-gray-700">
                      #{rankMap.get(company.id || company.name)}
                    </div>
                    {company.logo && (
                      <Image
                        src={company.logo}
                        width={48}
                        height={48}
                        alt={`${company.name} logo`}
                        className="rounded-full bg-gray-50 border w-12 h-12 object-cover"
                      />
                    )}
                    <div>
                      <div className="font-bold text-lg text-gray-900">
                        {company.name}
                      </div>
                      {company.location && (
                        <div className="text-gray-500 text-sm">
                          {company.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-2xl text-gray-900">
                      {company.elo ?? 1000}
                    </span>
                    <span className="text-xs text-gray-400 tracking-wide font-bold">
                      ELO
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="md:hidden mt-8 flex justify-center">
            <Link
              href="/"
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
