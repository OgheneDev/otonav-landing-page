"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";

const TrialSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 20px 40px -10px rgba(255,107,107,0.3); }
          50% { box-shadow: 0 30px 50px -10px rgba(255,107,107,0.5); }
        }

        .cta-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <section className="font-['DM_Sans'] bg-white relative overflow-hidden py-24 px-6 md:px-20">
        {/* Background decoration */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,107,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto relative z-10 max-w-4xl">
          {/* Content - no card, just normal flow */}
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-[30px] bg-[#FFF1F1] flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V7M12 2H9M12 2H15M19 12H22M2 12H5M12 22V17M12 22H9M12 22H15M5 19L7 17M19 5L17 7M17 17L19 19M5 5L7 7M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#FF6B6B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="2" fill="#FF6B6B" />
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="font-['Sora'] text-[clamp(42px,6vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-slate-900 m-0 mb-5">
              Start Your{" "}
              <span className="text-[#FF6B6B] relative inline-block">
                14-Day Free Trial
                <svg
                  aria-hidden
                  viewBox="0 0 280 12"
                  className="absolute -bottom-2 left-0 w-full h-3"
                >
                  <path
                    d="M2 6 Q70 1 140 6 Q210 11 278 6"
                    stroke="#FF6B6B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.25"
                  />
                </svg>
              </span>
            </h2>

            {/* Supporting line */}
            <p className="text-lg leading-relaxed text-slate-600 max-w-[500px] mx-auto mb-10">
              Built for vendors across Nigeria. No commitment. No risk. See how
              it works for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <button className="cta-glow flex justify-center items-center gap-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] text-white border-none rounded-2xl px-9 py-4.5 text-base font-bold font-['Sora'] cursor-pointer shadow-[0_10px_25px_rgba(255,107,107,0.4)] tracking-[0.3px] transition-all duration-300 hover:-translate-y-0.5">
                Join Early Access
                <ArrowRight size={15} />
              </button>

              <button className="bg-white text-[#FF6B6B] border-2 border-[#FF6B6B] rounded-2xl px-9 py-4.5 text-base font-semibold font-['Sora'] cursor-pointer transition-all duration-300 hover:bg-[#FFF1F1] hover:-translate-y-0.5">
                Request Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center mt-4">
              {[
                "No credit card required",
                "Cancel anytime",
                "Free support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Check size={14} className="text-[#2DD4BF]" />
                  <span className="text-[10px] text-slate-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrialSection;
