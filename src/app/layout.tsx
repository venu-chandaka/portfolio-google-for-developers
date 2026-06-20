import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Chandaka Venu | Software Engineer & AI Enthusiast",
  description: "Portfolio of Chandaka Venu, a Software Engineer, Full-Stack Developer, and AI/ML Enthusiast specialized in React, Node.js, FastAPI, TensorFlow and modern web applications.",
  keywords: ["Chandaka Venu", "Portfolio", "Software Engineer", "Full-Stack Developer", "AI Engineer", "MERN Stack", "Python Developer", "India"],
  authors: [{ name: "Chandaka Venu" }],
  creator: "Chandaka Venu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/venu-chandaka/",
    title: "Chandaka Venu | Software Engineer & AI Enthusiast",
    description: "Explore the projects, achievements, and skillset of Chandaka Venu, Software Engineer and AI & ML Enthusiast.",
    siteName: "Chandaka Venu Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {/* Global glassy mesh backdrop */}
          <div className="bg-mesh-container">
            <div className="bg-orb-1"></div>
            <div className="bg-orb-2"></div>
            <div className="bg-orb-3"></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
