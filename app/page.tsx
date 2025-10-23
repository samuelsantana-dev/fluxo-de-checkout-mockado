"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
