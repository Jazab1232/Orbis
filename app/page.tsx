"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart2, Layers, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-50 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          IndusNext.
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-sm font-medium hover:text-blue-400 transition-colors">
            Login
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full">
            Production Ready
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Build Faster with <span className="text-blue-500">Precision.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            The ultimate starter kit for modern industrial web applications. Scalable, secure, and beautiful by default.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/dashboard"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              Enter Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/your-repo"
              className="px-8 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-all"
            >
              View on GitHub
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart2 className="w-8 h-8 text-blue-400" />}
              title="Real-time Analytics"
              description="Monitor your industrial metrics with sub-millisecond latency and beautiful visualizations."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-emerald-400" />}
              title="Enterprise Security"
              description="Built-in role-based access control, encrypted data storage, and audit logging."
            />
            <FeatureCard
              icon={<Layers className="w-8 h-8 text-purple-400" />}
              title="Scalable Architecture"
              description="Designed to handle millions of data points without breaking a sweat. Powered by Next.js 14."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Industrial Next.js Starter. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
}
