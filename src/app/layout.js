import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rankd",
  description: "Rankd lets you compare, vote, and discover the best tech companies based on salary, benefits, and more. Make informed career decisions with real data.",
  keywords: ["Rankd", "Tech Companies", "Company Comparison", "Salary Comparison", "Career Decisions", "Job Rankings", "Tech Jobs"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
