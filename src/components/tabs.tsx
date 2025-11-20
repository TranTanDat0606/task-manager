import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon, StarIcon, Trash, ZapIcon } from "lucide-react";
import { Search as SearchIcon } from "lucide-react";
import TitleHeaderGradientView from "./title";

interface Tab {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

interface GradientTabsProps {
  tabs: Tab[];
  className?: string;
}

export default function GradientTabs({ tabs, className }: GradientTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Magenta Orb Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <div className="w-full ">
        <div className="relative flex items-center justify-center font-sans w-full px-4 py-8">
          <div className="w-full max-w-2xl mx-auto p-4 space-y-6 bg-white/30 dark:bg-black/30 backdrop-blur-3xl border border-black/10 dark:border-white/5 rounded-3xl shadow-lg dark:shadow-2xl dark:shadow-purple-500/15">
            <TitleHeaderGradientView />
            <p className="text-center mb-[40px]">Stay organized, get things done ✨</p>

            <div className={`w-full max-w-4xl mx-auto ${className || ""}`}>
              {/* Tab Navigation */}
              <div className="flex justify-between mb-8">
                <div className="flex rounded-2xl bg-slate-100/50 p-1 backdrop-blur-sm dark:bg-slate-800/50">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "text-white shadow-lg"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="gradientTab"
                            className={`absolute inset-0 rounded-xl ${tab.gradient}`}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}

                        <div className="relative z-10 flex items-center gap-2 mr-[10px]">
                          <Icon className="h-4 w-4" />
                          <span>{tab.title} 0</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:text-black dark:hover:text-white">
                  Clear all
                </button>
              </div>
              {/* -----------------------------------------------------------------------------------------------------------------------------*/}

              {/* Search Input with Enhanced Gradient Border and Glow */}
              <div className="flex gap-2">
                <div className="relative p-px rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 shadow-lg shadow-purple-500/20 dark:shadow-purple-600/30 transition-shadow duration-300 hover:shadow-purple-500/40 dark:hover:shadow-purple-600/50 focus-within:shadow-purple-500/40 dark:focus-within:shadow-purple-600/50 flex-1">
                  <div className="flex items-center w-full px-4 py-2 bg-white/80 dark:bg-gray-900/90 rounded-[15px]">
                    <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search the app.."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-1 text-lg text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none flex-1 min-w-0"
                    />
                  </div>
                </div>

                <button className="relative p-px rounded-2xl bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
                  <div className="px-[20px] py-[14px] bg-white/80 dark:bg-gray-900/90 rounded-[15px] text-gray-800 dark:text-gray-200 font-medium flex items-center gap-2">
                    + Add
                  </div>
                </button>
              </div>

              {/* -----------------------------------------------------------------------------------------------------------------------------*/}

              {/* Content Area */}
              <div className="relative mt-10">
                <AnimatePresence mode="wait">
                  {tabs.map((tab) => {
                    if (activeTab !== tab.id) return null;

                    return (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative"
                      >
                        {/* Background gradient */}
                        <div className={`absolute inset-0 rounded-3xl ${tab.gradient} opacity-10 blur-3xl`} />

                        {/* Content card */}
                        <div className="group relative rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
                          <div className="flex items-center justify-between gap-4">
                            <div className="left-card flex items-center gap-4">
                              <input type="checkbox" name="" id="" />
                              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{tab.title}</h2>
                            </div>
                            <Trash className="text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <p className="text-center mt-10 mb-5">No tasks yet. Add one above! 👆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component
export function GradientTabsDemo() {
  const tabs: Tab[] = [
    {
      id: "all",
      title: "All",
      icon: StarIcon,
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      id: "active",
      title: "Active",
      icon: HeartIcon,
      gradient: "bg-gradient-to-r from-pink-400 to-red-500",
    },
    {
      id: "complete",
      title: "Complete",
      icon: ZapIcon,
      gradient: "bg-gradient-to-r from-blue-400 to-purple-500",
    },
  ];

  return <GradientTabs tabs={tabs} />;
}
