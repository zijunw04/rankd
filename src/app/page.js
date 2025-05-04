"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainHeader from "./components/normalheader";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1368446958309736468/v1e2lx-RxzHd4b2eXEbnEbdt4UOgEo1HyVmHo-76o5L7seRv9oShSDgSdtTFj2091c8v"; 

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const webhookBody = {
      embeds: [
        {
          title: "New Waitlist Signup",
          fields: [
            { name: "Email", value: email },
            { name: "Source", value: "Ranking Game Landing Page" },
          ],
        },
      ],
    };

    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookBody),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError("There was an error. Please try again later.");
      }
    } catch {
      setError("There was an error. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MainHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <motion.section
          className="w-full max-w-xl text-center mt-16 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Decorative Element */}
          <div className="mb-8 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Create Your Own <span className="text-indigo-600 relative">
              Ranking Game
              <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-100 -z-10 rounded"></span>
            </span>
          </h1>
          
          <p className="text-gray-700 mb-8 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Make a ranking game for anything-movies, memes, teams, or your own ideas. 
            Share, vote, and see live Elo leaderboards.
            <span className="block mt-2 font-semibold text-indigo-700">No code needed.</span>
          </p>

          <AnimatePresence>
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row text-black items-center gap-3 w-full max-w-md mx-auto bg-white p-2 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email for early access"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-all"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-60"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="bg-green-50 text-green-600 font-semibold text-lg mt-2 p-4 rounded-lg border border-green-100 shadow-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                🎉 You&apos;re on the waitlist! We&apos;ll notify you when we launch.
              </motion.div>
            )}
          </AnimatePresence>
          {error && (
            <motion.div
              className="text-red-500 font-medium mt-2 p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}
          
     
        </motion.section>

        {/* Feature Highlights */}
        <motion.div
          className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="p-4 text-center">
            <div className="text-2xl mb-2">✨</div>
            <h3 className="font-semibold text-gray-800">Create</h3>
            <p className="text-gray-600 text-sm">Build your ranking game in seconds</p>
          </div>
          <div className="p-4 text-center">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-gray-800">Share</h3>
            <p className="text-gray-600 text-sm">Invite friends with a simple link</p>
          </div>
          <div className="p-4 text-center">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-800">Rank</h3>
            <p className="text-gray-600 text-sm">Watch the leaderboard evolve live</p>
          </div>
        </motion.div>
      </main>

      <footer className="w-full text-center text-gray-400 text-xs py-6 border-t border-slate-100">
        &copy; {new Date().getFullYear()} Rankd. All rights reserved.
      </footer>
    </div>
  );
}
