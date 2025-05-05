import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rankd | Create Your Own Ranking Game",
  description: "Make ranking games for companies, brainrots, teams, or your own ideas. Share, vote, and see live Elo leaderboards - no code needed.",
  keywords: ["Rankd", "Tech Companies", "Company Comparison", "Salary Comparison", "Career Decisions", "Job Rankings", "Tech Jobs"],
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
    </>
  );
}
