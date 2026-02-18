"use client";

import React from "react";
import Image from "next/image";
import {
  Zap,
  Check,
  MapPin,
  Map,
  Navigation,
  Shield,
  ArrowRight,
  LocateFixed,
  Timer,
  Target,
} from "lucide-react";

const HowItWorksSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }

        @keyframes moveCar {
          0% { transform: translateX(0); }
          50% { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }

        .step-card {
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 40px -20px rgba(0,0,0,0.15) !important;
        }

        .step-number {
          transition: all 0.3s ease;
        }

        .step-card:hover .step-number {
          background: #FF6B6B;
          color: white;
        }

        .visual-element {
          transition: all 0.3s ease;
        }

        .step-card:hover .visual-element {
          transform: scale(1.05);
        }

        .connector-line {
          stroke-dasharray: 8;
          animation: dash 30s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        .pulse-dot {
          animation: pulseDot 2s ease infinite;
        }

        .car-move {
          animation: moveCar 2s ease infinite;
        }
      `}</style>

      <section className="font-['Sora'] bg-white relative overflow-hidden py-24">
        {/* Clean white background - no gradients */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full py-1.5 pl-3 pr-4 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B] inline-block" />
              <span className="text-[13px] font-semibold text-[#FF6B6B] tracking-[0.3px]">
                THE SOLUTION
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[clamp(38px,5vw,48px)] font-extrabold leading-[1.2] tracking-[-1.2px] text-slate-900 m-0">
              Here's how{" "}
              <span className="text-[#FF6B6B] relative inline-block">
                OtoNav
                <svg
                  aria-hidden
                  viewBox="0 0 140 8"
                  className="absolute -bottom-1 left-0 w-full h-2"
                >
                  <path
                    d="M2 4 Q35 1 70 4 Q105 7 138 4"
                    stroke="#FF6B6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
              </span>{" "}
              changes that
            </h2>

            <p className="font-['DM_Sans'] text-lg text-slate-500 max-w-[550px] mx-auto mt-4 leading-relaxed">
              Three simple steps to complete delivery visibility
            </p>
          </div>

          {/* Three Steps Visual Explanation */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting line (desktop only) */}
            <svg className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] w-[70%] h-[2px] z-0">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#e9ecef"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="connector-line"
              />
              <circle cx="0" cy="0" r="4" fill="#FF6B6B" />
              <circle cx="50%" cy="0" r="4" fill="#FF6B6B" fillOpacity="0.3" />
              <circle cx="100%" cy="0" r="4" fill="#FF6B6B" />
            </svg>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {/* Step 1: Create delivery in seconds */}
              <div className="step-card bg-white rounded-[32px] p-8 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-gray-100 relative">
                {/* Step Number */}
                <div className="step-number absolute -top-[15px] left-8 w-10 h-10 rounded-full bg-gray-50 border-2 border-[#FF6B6B] flex items-center justify-center text-xl font-bold text-[#FF6B6B] z-[2]">
                  1
                </div>

                {/* Visual Element */}
                <div className="visual-element h-[200px] mb-6 mt-2 bg-gray-50 rounded-xl p-5 border border-gray-100 relative overflow-hidden">
                  {/* Quick create interface mockup */}
                  <div className="relative h-full">
                    {/* Top bar */}
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFB347]" />
                      <div className="w-3 h-3 rounded-full bg-[#2DD4BF]" />
                    </div>

                    {/* Form fields */}
                    <div className="bg-white rounded-xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
                      <div className="h-3 w-[70%] bg-[#FF6B6B] rounded-full mb-3 opacity-20" />
                      <div className="flex gap-2 mb-3">
                        <div className="h-3 w-[40%] bg-gray-200 rounded-full" />
                        <div className="h-3 w-[40%] bg-gray-200 rounded-full" />
                      </div>
                      <div className="h-3 w-full bg-gray-200 rounded-full mb-3" />

                      {/* Create button */}
                      <div className="bg-[#FF6B6B] rounded-full p-2.5 flex items-center justify-center gap-1.5">
                        <span className="text-xs text-white font-semibold">
                          Create delivery
                        </span>
                        <Zap size={14} className="text-white" />
                      </div>
                    </div>

                    {/* Time badge */}
                    <div className="absolute bottom-0 right-0 bg-[#2DD4BF] rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                      ~8 seconds
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-[22px] font-bold text-slate-900 m-0 mb-2 leading-tight">
                  Create delivery in seconds
                </h3>
                <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                  Enter pickup, drop-off, and rider — done. No complicated
                  forms, no delays.
                </p>
              </div>

              {/* Step 2: Track your rider live */}
              <div className="step-card bg-white rounded-[32px] p-8 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-gray-100 relative">
                <div className="step-number absolute -top-[15px] left-8 w-10 h-10 rounded-full bg-gray-50 border-2 border-[#FF6B6B] flex items-center justify-center text-xl font-bold text-[#FF6B6B] z-[2]">
                  2
                </div>

                {/* Visual Element */}
                <div className="visual-element h-[200px] mb-6 mt-2 bg-gray-50 rounded-xl p-5 border border-gray-100 relative overflow-hidden">
                  {/* Map mockup */}
                  <div className="relative h-full">
                    {/* Grid lines (map background) */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(#e9ecef 1px, transparent 1px), linear-gradient(90deg, #e9ecef 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Route line */}
                    <svg className="absolute top-5 left-5 w-[80%] h-[80%]">
                      <path
                        d="M10,80 Q40,30 80,40 Q120,50 150,30"
                        stroke="#FF6B6B"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="6 6"
                      />
                      <circle cx="10" cy="80" r="6" fill="#2DD4BF" />
                      <circle cx="150" cy="30" r="6" fill="#FF6B6B" />
                    </svg>

                    {/* Rider icon (moving) */}
                    <div className="car-move absolute top-[65px] left-[70px] text-xl">
                      🛵
                    </div>

                    {/* Stop indicator */}
                    <div className="absolute bottom-[30px] left-[100px] bg-white rounded-full py-1.5 px-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-gray-200 flex items-center gap-1">
                      <span className="pulse-dot text-[#FF6B6B] text-[10px]">
                        ●
                      </span>
                      <span className="text-[11px] font-semibold">
                        2 stops away
                      </span>
                    </div>

                    {/* ETA badge */}
                    <div className="absolute top-5 right-2.5 bg-[#FF6B6B] rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                      ETA: 12 min
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-[22px] font-bold text-slate-900 m-0 mb-2 leading-tight">
                  Track your rider live
                </h3>
                <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                  See exactly how many stops away they are + precise ETA. No
                  more guessing.
                </p>

                {/* Feature tags */}
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="bg-gray-50 rounded-full px-3 py-1 text-xs text-slate-500 flex items-center gap-1">
                    <Map size={12} /> Live map
                  </span>
                  <span className="bg-gray-50 rounded-full px-3 py-1 text-xs text-slate-500 flex items-center gap-1">
                    <Timer size={12} /> Accurate ETA
                  </span>
                </div>
              </div>

              {/* Step 3: Location-matched completion */}
              <div className="step-card bg-white rounded-[32px] p-8 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-gray-100 relative">
                <div className="step-number absolute -top-[15px] left-8 w-10 h-10 rounded-full bg-gray-50 border-2 border-[#FF6B6B] flex items-center justify-center text-xl font-bold text-[#FF6B6B] z-[2]">
                  3
                </div>

                {/* Visual Element */}
                <div className="visual-element h-[200px] mb-6 mt-2 bg-gray-50 rounded-xl p-5 border border-gray-100 relative overflow-hidden">
                  {/* Verification interface */}
                  <div className="relative h-full">
                    {/* Top: Location check */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-500" />
                        <span className="text-xs font-semibold">
                          Drop-off location
                        </span>
                      </div>
                      <div className="bg-emerald-50 rounded-full px-2 py-1 text-[11px] text-emerald-500 font-semibold flex items-center gap-0.5">
                        <Check size={10} /> Verified
                      </div>
                    </div>

                    {/* Map pin visual */}
                    <div className="relative h-20 mb-5">
                      {/* Pin and radius */}
                      <div className="relative left-[30%]">
                        <div className="w-10 h-10 rounded-full bg-[rgba(255,107,107,0.1)] border-2 border-dashed border-[#FF6B6B] relative">
                          <div className="w-3 h-3 rounded-full bg-[#FF6B6B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <span className="absolute top-[45px] left-[5px] text-[11px] text-slate-500 whitespace-nowrap">
                          Geofence: 50m radius
                        </span>
                      </div>

                      {/* Rider marker */}
                      <div className="absolute top-[10px] right-[30%] text-2xl">
                        🛵
                      </div>
                    </div>

                    {/* Completion status */}
                    <div className="bg-white rounded-xl p-3 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2DD4BF] flex items-center justify-center text-white text-sm">
                          <Check size={14} />
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold">
                            Delivery complete
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Location matched: 2m accuracy
                          </div>
                        </div>
                      </div>
                      <Check size={18} className="text-emerald-500" />
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-0 right-0 bg-[#2DD4BF] rounded-full px-2.5 py-1 text-[10px] font-semibold text-white">
                      No false claims
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-[22px] font-bold text-slate-900 m-0 mb-2 leading-tight">
                  Location-matched completion
                </h3>
                <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                  Delivery only completes when the rider is at the exact
                  drop-off location. No more false "delivered" claims.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA hint */}
          <div className="text-center mt-[60px]">
            <div className="inline-flex items-center flex-col md:flex-row gap-3 bg-gray-50 rounded-full py-3 px-6">
              <span className="text-sm text-slate-600 flex items-center gap-1">
                Ready to take control of your deliveries?
              </span>
              <button className="bg-[#FF6B6B] text-white border-none rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:translate-x-1">
                See OtoNav in action →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
