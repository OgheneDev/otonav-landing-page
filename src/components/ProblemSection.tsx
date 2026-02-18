"use client";

import React from "react";
import {
  PhoneOff,
  MapPin,
  Map,
  Frown,
  MessageCircle,
  Clock,
  TrendingDown,
  AlertTriangle,
  HandMetal,
} from "lucide-react";

const ProblemSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }

        @keyframes ring {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(5deg); }
          60% { transform: rotate(-5deg); }
          70% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .problem-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px -10px rgba(255,107,107,0.15) !important;
        }

        .problem-card:nth-child(1) { animation-delay: 0.1s; }
        .problem-card:nth-child(2) { animation-delay: 0.2s; }
        .problem-card:nth-child(3) { animation-delay: 0.3s; }
        .problem-card:nth-child(4) { animation-delay: 0.4s; }

        .card-icon {
          transition: all 0.3s ease;
        }

        .problem-card:hover .card-icon {
          transform: scale(1.1);
        }

        .problem-card:hover .icon-shake {
          animation: shake 0.5s ease;
        }

        .problem-card:hover .icon-ring {
          animation: ring 0.5s ease;
        }

        .bg-pattern {
          background-image: radial-gradient(rgba(255,107,107,0.03) 2px, transparent 2px);
          background-size: 30px 30px;
        }
      `}</style>

      <section className="font-['Sora'] relative overflow-hidden bg-[#F8F9FB] py-24">
        {/* Background Pattern */}
        <div
          aria-hidden
          className="bg-pattern absolute inset-0 opacity-50 pointer-events-none"
        />

        {/* Decorative blobs */}
        <div
          aria-hidden
          className="absolute top-[20%] -right-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-[10%] -left-[5%] w-[250px] h-[250px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Small indicator */}
            <div className="inline-flex items-center gap-2 bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.18)] rounded-full py-1.5 pl-3 pr-4 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B] inline-block animate-[pulse_1.5s_ease_infinite]" />
              <span className="text-[13px] font-semibold text-[#FF6B6B] tracking-[0.3px]">
                THE STRUGGLE IS REAL
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[clamp(42px,6vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-slate-900 m-0">
              Sound{" "}
              <span className="text-[#FF6B6B] relative inline-block">
                familiar?
                <svg
                  aria-hidden
                  viewBox="0 0 180 8"
                  className="absolute -bottom-1 left-0 w-full h-2"
                >
                  <path
                    d="M2 4 Q45 1 90 4 Q135 7 178 4"
                    stroke="#FF6B6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtext */}
            <p className="font-['DM_Sans'] text-lg text-slate-500 max-w-[500px] mx-auto mt-4 leading-relaxed">
              Daily frustrations that make you feel like you're losing control
              of your deliveries
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Rider not picking calls */}
            <div className="problem-card bg-white rounded-[28px] p-8 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.1)] border border-[rgba(255,107,107,0.1)] relative overflow-hidden">
              {/* Card accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A]" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="card-icon icon-ring w-14 h-14 rounded-[18px] bg-[rgba(255,107,107,0.1)] flex items-center justify-center flex-shrink-0">
                  <PhoneOff size={28} color="#FF6B6B" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 m-0 mb-2 leading-tight">
                    Rider not picking calls
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                    You've called 7 times. It's been 2 hours. Still no answer.
                  </p>
                </div>
              </div>

              {/* Small stat indicator */}
              <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-2">
                <AlertTriangle size={14} className="text-slate-400" />
                <span className="text-[13px] text-slate-500 font-['DM_Sans']">
                  Happens in <strong className="text-[#FF6B6B]">73%</strong> of
                  deliveries
                </span>
              </div>
            </div>

            {/* Card 2: Customer asking "Where is my package?" */}
            <div className="problem-card bg-white rounded-[28px] p-8 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.1)] border border-[rgba(255,107,107,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A]" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="card-icon icon-shake w-14 h-14 rounded-[18px] bg-[rgba(255,107,107,0.1)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} color="#FF6B6B" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 m-0 mb-2 leading-tight">
                    Customer asking "Where is my package?"
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                    And you're just as clueless as they are.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-2">
                <MessageCircle size={14} className="text-slate-400" />
                <span className="text-[13px] text-slate-500 font-['DM_Sans']">
                  Average <strong className="text-[#FF6B6B]">8 messages</strong>{" "}
                  per delivery
                </span>
              </div>
            </div>

            {/* Card 3: You have no idea where the rider is */}
            <div className="problem-card bg-white rounded-[28px] p-8 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.1)] border border-[rgba(255,107,107,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A]" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="card-icon w-14 h-14 rounded-[18px] bg-[rgba(255,107,107,0.1)] flex items-center justify-center flex-shrink-0">
                  <Map size={28} color="#FF6B6B" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 m-0 mb-2 leading-tight">
                    You have no idea where the rider is
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                    Is he stuck in traffic? Lost? Or just ghosting you?
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-2">
                <Clock size={14} className="text-slate-400" />
                <span className="text-[13px] text-slate-500 font-['DM_Sans']">
                  <strong className="text-[#FF6B6B]">45min</strong> average
                  uncertainty per trip
                </span>
              </div>
            </div>

            {/* Card 4: You look unserious even when it's not your fault */}
            <div className="problem-card bg-white rounded-[28px] p-8 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.1)] border border-[rgba(255,107,107,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A]" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="card-icon w-14 h-14 rounded-[18px] bg-[rgba(255,107,107,0.1)] flex items-center justify-center flex-shrink-0">
                  <Frown size={28} color="#FF6B6B" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 m-0 mb-2 leading-tight">
                    You look unserious even when it's not your fault
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] text-slate-500 m-0 leading-relaxed">
                    The customer doesn't care who's responsible. They just want
                    their package.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-2">
                <TrendingDown size={14} className="text-slate-400" />
                <span className="text-[13px] text-slate-500 font-['DM_Sans']">
                  <strong className="text-[#FF6B6B]">34%</strong> of customers
                  won't order again
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Cue */}
          <div className="text-center mt-12 animate-[float_3s_ease-in-out_infinite]">
            <span className="inline-flex items-center gap-2 bg-white border border-[rgba(255,107,107,0.2)] rounded-full py-2 px-5 text-sm text-slate-600 shadow-[0_4px_10px_rgba(0,0,0,0.03)]">
              <HandMetal size={16} className="text-slate-500" />
              There's a better way. Keep scrolling.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
