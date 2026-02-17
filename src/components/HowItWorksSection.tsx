"use client";

import React from "react";
import Image from "next/image";

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

      <section
        style={{ fontFamily: "'Sora', sans-serif", background: "#ffffff" }}
        className="relative overflow-hidden py-24"
      >
        {/* Clean white background - no gradients */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            {/* Small label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f8f9fa",
                border: "1px solid #e9ecef",
                borderRadius: "100px",
                padding: "6px 16px 6px 12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#FF6B6B",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#FF6B6B",
                  letterSpacing: "0.3px",
                }}
              >
                THE SOLUTION
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-1.2px",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Here's how{" "}
              <span
                style={{
                  color: "#FF6B6B",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                OtoNav
                <svg
                  aria-hidden
                  viewBox="0 0 140 8"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "8px",
                  }}
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

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "18px",
                color: "#64748b",
                maxWidth: "550px",
                margin: "16px auto 0",
                lineHeight: 1.6,
              }}
            >
              Three simple steps to complete delivery visibility
            </p>
          </div>

          {/* Three Steps Visual Explanation */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting line (desktop only) */}
            <svg
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: "120px",
                left: "15%",
                right: "15%",
                width: "70%",
                height: "2px",
                zIndex: 0,
              }}
            >
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
              <div
                className="step-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "32px",
                  padding: "32px",
                  boxShadow: "0 15px 35px -10px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                }}
              >
                {/* Step Number */}
                <div
                  className="step-number"
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "32px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f8f9fa",
                    border: "2px solid #FF6B6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#FF6B6B",
                    zIndex: 2,
                  }}
                >
                  1
                </div>

                {/* Visual Element */}
                <div
                  className="visual-element"
                  style={{
                    height: "200px",
                    marginBottom: "24px",
                    marginTop: "8px",
                    background: "#fafafa",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid #f0f0f0",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Quick create interface mockup */}
                  <div style={{ position: "relative", height: "100%" }}>
                    {/* Top bar */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#FF6B6B",
                        }}
                      />
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#FFB347",
                        }}
                      />
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#2DD4BF",
                        }}
                      />
                    </div>

                    {/* Form fields */}
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                      }}
                    >
                      <div
                        style={{
                          height: "12px",
                          width: "70%",
                          background: "#FF6B6B",
                          borderRadius: "20px",
                          marginBottom: "12px",
                          opacity: 0.2,
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          marginBottom: "12px",
                        }}
                      >
                        <div
                          style={{
                            height: "12px",
                            width: "40%",
                            background: "#e9ecef",
                            borderRadius: "20px",
                          }}
                        />
                        <div
                          style={{
                            height: "12px",
                            width: "40%",
                            background: "#e9ecef",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "12px",
                          width: "100%",
                          background: "#e9ecef",
                          borderRadius: "20px",
                          marginBottom: "12px",
                        }}
                      />

                      {/* Create button */}
                      <div
                        style={{
                          background: "#FF6B6B",
                          borderRadius: "30px",
                          padding: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#fff",
                            fontWeight: 600,
                          }}
                        >
                          Create delivery
                        </span>
                        <span style={{ color: "#fff", fontSize: "14px" }}>
                          ⚡
                        </span>
                      </div>
                    </div>

                    {/* Time badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        background: "#2DD4BF",
                        borderRadius: "30px",
                        padding: "6px 12px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      ~8 seconds
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}
                >
                  Create delivery in seconds
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Enter pickup, drop-off, and rider — done. No complicated
                  forms, no delays.
                </p>

                {/* Feature tag */}
                <div
                  style={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#f8f9fa",
                    borderRadius: "30px",
                    padding: "4px 12px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#FF6B6B" }}>✓</span>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>
                    Bulk create available
                  </span>
                </div>
              </div>

              {/* Step 2: Track your rider live */}
              <div
                className="step-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "32px",
                  padding: "32px",
                  boxShadow: "0 15px 35px -10px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                }}
              >
                <div
                  className="step-number"
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "32px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f8f9fa",
                    border: "2px solid #FF6B6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#FF6B6B",
                    zIndex: 2,
                  }}
                >
                  2
                </div>

                {/* Visual Element */}
                <div
                  className="visual-element"
                  style={{
                    height: "200px",
                    marginBottom: "24px",
                    marginTop: "8px",
                    background: "#fafafa",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid #f0f0f0",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Map mockup */}
                  <div style={{ position: "relative", height: "100%" }}>
                    {/* Grid lines (map background) */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(#e9ecef 1px, transparent 1px), linear-gradient(90deg, #e9ecef 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        opacity: 0.3,
                      }}
                    />

                    {/* Route line */}
                    <svg
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        width: "80%",
                        height: "80%",
                      }}
                    >
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

                    {/* Car icon (moving) */}
                    <div
                      className="car-move"
                      style={{
                        position: "absolute",
                        top: "65px",
                        left: "70px",
                        fontSize: "20px",
                      }}
                    >
                      🛵
                    </div>

                    {/* Stop indicator */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "100px",
                        background: "#fff",
                        borderRadius: "20px",
                        padding: "6px 10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        border: "1px solid #e9ecef",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span
                        className="pulse-dot"
                        style={{ color: "#FF6B6B", fontSize: "10px" }}
                      >
                        ●
                      </span>
                      <span style={{ fontSize: "11px", fontWeight: 600 }}>
                        2 stops away
                      </span>
                    </div>

                    {/* ETA badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "10px",
                        background: "#FF6B6B",
                        borderRadius: "20px",
                        padding: "6px 12px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      ETA: 12 min
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}
                >
                  Track your rider live
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  See exactly how many stops away they are + precise ETA. No
                  more guessing.
                </p>

                {/* Feature tags */}
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "30px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    🗺️ Live map
                  </span>
                  <span
                    style={{
                      background: "#f8f9fa",
                      borderRadius: "30px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    ⏱️ Accurate ETA
                  </span>
                </div>
              </div>

              {/* Step 3: Location-matched completion */}
              <div
                className="step-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "32px",
                  padding: "32px",
                  boxShadow: "0 15px 35px -10px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                }}
              >
                <div
                  className="step-number"
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "32px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#f8f9fa",
                    border: "2px solid #FF6B6B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#FF6B6B",
                    zIndex: 2,
                  }}
                >
                  3
                </div>

                {/* Visual Element */}
                <div
                  className="visual-element"
                  style={{
                    height: "200px",
                    marginBottom: "24px",
                    marginTop: "8px",
                    background: "#fafafa",
                    borderRadius: "20px",
                    padding: "20px",
                    border: "1px solid #f0f0f0",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Verification interface */}
                  <div style={{ position: "relative", height: "100%" }}>
                    {/* Top: Location check */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ fontSize: "14px" }}>📍</span>
                        <span style={{ fontSize: "12px", fontWeight: 600 }}>
                          Drop-off location
                        </span>
                      </div>
                      <div
                        style={{
                          background: "#e8f7f0",
                          borderRadius: "20px",
                          padding: "4px 8px",
                          fontSize: "11px",
                          color: "#2DD4BF",
                          fontWeight: 600,
                        }}
                      >
                        ✓ Verified
                      </div>
                    </div>

                    {/* Map pin visual */}
                    <div
                      style={{
                        position: "relative",
                        height: "80px",
                        marginBottom: "20px",
                      }}
                    >
                      {/* Pin and radius */}
                      <div style={{ position: "relative", left: "30%" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "rgba(255,107,107,0.1)",
                            border: "2px dashed #FF6B6B",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              background: "#FF6B6B",
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            position: "absolute",
                            top: "45px",
                            left: "5px",
                            fontSize: "11px",
                            color: "#64748b",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Geofence: 50m radius
                        </span>
                      </div>

                      {/* Rider marker */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "30%",
                          fontSize: "24px",
                        }}
                      >
                        🛵
                      </div>
                    </div>

                    {/* Completion status */}
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "12px",
                        border: "1px solid #e9ecef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            background: "#2DD4BF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: "14px",
                          }}
                        >
                          ✓
                        </div>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 600 }}>
                            Delivery complete
                          </div>
                          <div style={{ fontSize: "11px", color: "#64748b" }}>
                            Location matched: 2m accuracy
                          </div>
                        </div>
                      </div>
                      <span style={{ fontSize: "18px" }}>✅</span>
                    </div>

                    {/* Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        background: "#2DD4BF",
                        borderRadius: "30px",
                        padding: "4px 10px",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      No false claims
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}
                >
                  Location-matched completion
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Delivery only completes when the rider is at the exact
                  drop-off location. No more false "delivered" claims.
                </p>

                {/* Key benefit */}
                <div
                  style={{
                    marginTop: "16px",
                    background: "#f8f9fa",
                    borderRadius: "12px",
                    padding: "12px",
                    borderLeft: "3px solid #FF6B6B",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#0f172a",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    🛡️ Proof of delivery with photo + GPS coordinates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA hint */}
          <div
            style={{
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#f8f9fa",
                borderRadius: "100px",
                padding: "12px 24px",
              }}
            >
              <span style={{ fontSize: "14px", color: "#475569" }}>
                👉 Ready to take control of your deliveries?
              </span>
              <button
                style={{
                  background: "#FF6B6B",
                  color: "#fff",
                  border: "none",
                  borderRadius: "30px",
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
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
