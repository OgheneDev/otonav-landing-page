"use client";

import React, { useState } from "react";
import { Lock } from "lucide-react";

const FormSection = () => {
  const [businessType, setBusinessType] = useState("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .form-input {
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #FF6B6B;
          box-shadow: 0 0 0 3px rgba(255,107,107,0.1);
        }

        .radio-option {
          transition: all 0.2s ease;
        }

        .radio-option:hover {
          border-color: #FF6B6B;
          background: #FFF1F1;
        }
      `}</style>

      <section className="font-['DM_Sans'] bg-[#F8F9FB] relative overflow-hidden py-24 px-6 md:px-20">
        {/* Decorative blobs */}
        <div
          aria-hidden
          className="absolute top-[10%] -right-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-[10%] -left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto max-w-2xl relative z-10">
          {/* Header - now outside form container */}
          <div className="text-center mb-10">
            <h2 className="font-['Sora'] text-[32px] font-extrabold text-slate-900 m-0 mb-3 tracking-[-1px]">
              Get early access
            </h2>
            <p className="text-[15px] text-slate-500 m-0">
              Be the first to experience OtoNav. Limited spots available.
            </p>
          </div>

          {/* Form - no card container, just the form elements */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/thank-you";
            }}
            className="bg-white rounded-[40px] p-12 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-[#ECEEF2]"
          >
            <div className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-[13px] font-semibold text-slate-900 mb-1.5 font-['Sora']">
                  Full Name <span className="text-[#FF6B6B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input w-full p-3.5 px-4 border border-slate-200 rounded-xl text-[15px] font-['DM_Sans'] bg-[#FAFAFA]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-[13px] font-semibold text-slate-900 mb-1.5 font-['Sora']">
                  Business Name <span className="text-[#FF6B6B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="form-input w-full p-3.5 px-4 border border-slate-200 rounded-xl text-[15px] font-['DM_Sans'] bg-[#FAFAFA]"
                  placeholder="Enter your business name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[13px] font-semibold text-slate-900 mb-1.5 font-['Sora']">
                  Email Address <span className="text-[#FF6B6B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="form-input w-full p-3.5 px-4 border border-slate-200 rounded-xl text-[15px] font-['DM_Sans'] bg-[#FAFAFA]"
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[13px] font-semibold text-slate-900 mb-1.5 font-['Sora']">
                  Phone Number <span className="text-[#FF6B6B]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="form-input w-full p-3.5 px-4 border border-slate-200 rounded-xl text-[15px] font-['DM_Sans'] bg-[#FAFAFA]"
                  placeholder="0800 000 0000"
                />
              </div>

              {/* Type of Business */}
              <div>
                <label className="block text-[13px] font-semibold text-slate-900 mb-3 font-['Sora']">
                  Type of Business <span className="text-[#FF6B6B]">*</span>
                </label>
                <div className="flex gap-4 flex-wrap">
                  {["Vendor", "Dispatch", "Other"].map((type) => (
                    <label
                      key={type}
                      className="radio-option flex items-center gap-2 px-4 py-2.5 rounded-full cursor-pointer"
                      style={{
                        background:
                          businessType === type ? "#FFF1F1" : "#FAFAFA",
                        border: `1px solid ${businessType === type ? "#FF6B6B" : "#E2E8F0"}`,
                      }}
                    >
                      <input
                        type="radio"
                        name="businessType"
                        value={type}
                        checked={businessType === type}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="m-0 accent-[#FF6B6B]"
                        required
                      />
                      <span
                        className="text-sm"
                        style={{
                          color: businessType === type ? "#FF6B6B" : "#475569",
                          fontWeight: businessType === type ? 600 : 400,
                        }}
                      >
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 flex-col md:flex-row mt-5 flex-wrap">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] text-white border-none rounded-xl px-6 py-4 text-[15px] font-bold font-['Sora'] cursor-pointer shadow-[0_8px_20px_rgba(255,107,107,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(255,107,107,0.4)]"
                >
                  Join Early Access →
                </button>

                <button
                  type="button"
                  className="flex-1 bg-white text-[#FF6B6B] border-2 border-[#FF6B6B] rounded-xl px-6 py-4 text-[15px] font-semibold font-['Sora'] cursor-pointer transition-all duration-300 hover:bg-[#FFF1F1]"
                  onClick={() => {
                    window.location.href = "/thank-you";
                  }}
                >
                  Request Demo
                </button>
              </div>

              {/* Note about redirect */}
              <p className="text-xs text-slate-400 text-center mt-4">
                By submitting, you'll be redirected to a thank you page.
                <br />
                We'll send a confirmation email with next steps.
              </p>
            </div>
          </form>

          {/* Data note */}
          <div className="text-center mt-5 text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <Lock size={18} className="text-slate-400" />
            Your information is stored securely
          </div>
        </div>
      </section>
    </>
  );
};

export default FormSection;
