import { db } from "../firebase";
import { ref, get, set, update } from "firebase/database";

// Helper to get or create company in DB
export async function ensureCompany(company) {
  const companyId = company.id || company.name.replace(/\s+/g, "_").toLowerCase();
  const companyRef = ref(db, `companies/${companyId}`);
  const snap = await get(companyRef);
  if (!snap.exists()) {
    // Only write name and elo
    await set(companyRef, {
      name: company.name,
      elo: 1000,
    });
    return { name: company.name, elo: 1000, id: companyId };
  }
  // Only return name, elo, id (ignore other fields in DB)
  const data = snap.val();
  return { name: data.name, elo: data.elo, id: companyId };
}


export async function updateElo(winner, loser) {
  const winnerData = await ensureCompany(winner);
  const loserData = await ensureCompany(loser);

  const delta = Math.floor(Math.random() * 11) + 10; // random 10-20

  // Only update name and elo fields
  await update(ref(db, "companies"), {
    [`${winnerData.id}/elo`]: (winnerData.elo || 1000) + delta,
    [`${winnerData.id}/name`]: winnerData.name,
    [`${loserData.id}/elo`]: (loserData.elo || 1000) - delta,
    [`${loserData.id}/name`]: loserData.name,
  });

  return delta;
}
