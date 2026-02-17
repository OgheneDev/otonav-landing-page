"use client";

import React from "react";

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

        .trial-card {
          animation: float 6s ease-in-out infinite;
        }

        .cta-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <section
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#ffffff" }}
        className="relative overflow-hidden py-24 px-6 md:px-20"
      >
        {/* Background decoration */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(255,107,107,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div className="container mx-auto relative z-10 max-w-4xl">
          {/* Main Trial Card */}
          <div
            className="trial-card"
            style={{
              background: "linear-gradient(145deg, #ffffff, #fafafa)",
              border: "1px solid #ECEEF2",
              borderRadius: "48px",
              padding: "64px 48px",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.15)",
              textAlign: "center",
            }}
          >
            {/* Icon */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "30px",
                  background: "#FFF1F1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(42px, 6vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                color: "#0f172a",
                margin: "0 0 20px",
              }}
            >
              Start Your{" "}
              <span
                style={{
                  color: "#FF6B6B",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                14-Day Free Trial
                <svg
                  aria-hidden
                  viewBox="0 0 280 12"
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: 0,
                    width: "100%",
                    height: "12px",
                  }}
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
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#475569",
                maxWidth: "500px",
                margin: "0 auto 40px",
              }}
            >
              Built for vendors across Nigeria. No commitment. No risk. See how
              it works for your business.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <button
                className="cta-glow"
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #FF5252)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "16px",
                  padding: "18px 36px",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "'Sora', sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(255,107,107,0.4)",
                  letterSpacing: "0.3px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Join Early Access →
              </button>

              <button
                style={{
                  background: "#fff",
                  color: "#FF6B6B",
                  border: "1.5px solid #FF6B6B",
                  borderRadius: "16px",
                  padding: "18px 36px",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "'Sora', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFF1F1";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Request Demo
              </button>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {[
                "No credit card required",
                "Cancel anytime",
                "Free support",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ color: "#2DD4BF", fontSize: "14px" }}>✓</span>
                  <span style={{ fontSize: "13px", color: "#64748b" }}>
                    {item}
                  </span>
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
