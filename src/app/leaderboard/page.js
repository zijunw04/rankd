'use client'
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import companiesData from "../data/company";
import Link from "next/link";
import RankdHeader from "../components/header";
import Image from "next/image";

export default function Leaderboard() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Normalize function
    const normalize = name => (typeof name === "string" ? name.trim().toLowerCase() : "");
    // Build a lookup map for static data
    const staticCompanyMap = Object.fromEntries(
      companiesData.map(c => [normalize(c.name), c])
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
        setCompanies(firebaseCompanies.slice().sort((a, b) => (b.elo ?? 0) - (a.elo ?? 0)));
      } else {
        setCompanies([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <RankdHeader/>
      <div className="min-h-screen bg-white flex flex-col items-center py-10 px-2">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto text-gray-900">
              Company Leaderboard
            </h1>
          </div>
          <div className="space-y-4">
            {companies.length === 0 ? (
              <div className="text-center text-gray-400 py-12">No companies found.</div>
            ) : (
              companies.map((company, idx) => (
                <div
                  key={company.id || company.name}
                  className="flex items-center justify-between bg-white rounded-2xl shadow border border-gray-100 px-6 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 font-bold text-2xl text-gray-700">
                      #{idx + 1}
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
                      <div className="font-bold text-lg text-gray-900">{company.name}</div>
                      {company.location && (
                        <div className="text-gray-500 text-sm">{company.location}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-2xl text-gray-900">{company.elo ?? 1000}</span>
                    <span className="text-xs text-gray-400 tracking-wide font-bold">ELO</span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="md:hidden mt-8 flex justify-center">
            <Link href="/" className="px-4 py-2 rounded-lg border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition">
              Back to Vote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
