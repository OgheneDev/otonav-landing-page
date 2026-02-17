"use client";

import React from "react";

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

      <section
        style={{ fontFamily: "'Sora', sans-serif" }}
        className="relative overflow-hidden bg-[#F8F9FB] py-24"
      >
        {/* Background Pattern */}
        <div
          aria-hidden
          className="bg-pattern"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        {/* Decorative blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            right: "-5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Small indicator */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,107,107,0.08)",
                border: "1px solid rgba(255,107,107,0.18)",
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
                  animation: "pulse 1.5s ease infinite",
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
                THE STRUGGLE IS REAL
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(42px, 6vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Sound{" "}
              <span
                style={{
                  color: "#FF6B6B",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                familiar?
                <svg
                  aria-hidden
                  viewBox="0 0 180 8"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "8px",
                  }}
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
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "18px",
                color: "#64748b",
                maxWidth: "500px",
                margin: "16px auto 0",
                lineHeight: 1.6,
              }}
            >
              Daily frustrations that make you feel like you're losing control
              of your deliveries
            </p>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Rider not picking calls */}
            <div
              className="problem-card"
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "32px",
                boxShadow: "0 15px 30px -12px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,107,107,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FF6B6B, #FFA07A)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                {/* Icon */}
                <div
                  className="card-icon icon-ring"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background: "rgba(255,107,107,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V19C22.001 19.7906 21.816 20.5706 21.4624 21.2723C21.1088 21.974 20.5986 22.574 19.9777 23.0165C19.3568 23.459 18.6461 23.7294 17.9015 23.8026C17.1568 23.8758 16.4045 23.7494 15.71 23.434C13.2593 22.3278 10.987 20.8275 8.99 18.999C7.142 17.169 5.633 14.933 4.562 12.498C4.236 11.798 4.101 11.032 4.065 10.267C4.029 9.502 4.092 8.738 4.327 8.016C4.562 7.294 4.94 6.63 5.437 6.063C5.934 5.496 6.537 5.04 7.215 4.726C7.894 4.412 8.631 4.247 9.375 4.241C9.719 4.237 10.061 4.29 10.388 4.398C10.715 4.506 11.021 4.667 11.292 4.874C11.563 5.082 11.795 5.332 11.977 5.614C12.159 5.896 12.288 6.205 12.357 6.525L13.387 10.799C13.484 11.214 13.491 11.645 13.407 12.063C13.323 12.48 13.15 12.874 12.901 13.215C12.652 13.556 12.334 13.835 11.967 14.032C11.6 14.229 11.193 14.34 10.777 14.355C10.415 14.361 10.061 14.272 9.747 14.096C10.142 15.099 10.647 16.055 11.25 16.943C11.882 17.798 12.639 18.558 13.496 19.199C14.38 19.81 15.329 20.316 16.327 20.704C16.522 20.271 16.815 19.891 17.182 19.594C17.549 19.298 17.979 19.093 18.438 18.997C18.897 18.901 19.371 18.916 19.823 19.041C20.275 19.166 20.692 19.397 21.041 19.715C21.39 20.033 21.66 20.428 21.828 20.868C21.997 21.308 22.058 21.781 22.009 22.249C21.96 22.717 21.802 23.167 21.548 23.564C21.294 23.961 20.95 24.294 20.544 24.535L20.53 24.543"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="18"
                      cy="5"
                      r="3"
                      fill="#FF6B6B"
                      fillOpacity="0.3"
                      stroke="#FF6B6B"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                    }}
                  >
                    Rider not picking calls
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
                    You've called 7 times. It's been 2 hours. Still no answer.
                  </p>
                </div>
              </div>

              {/* Small stat indicator */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>⚠️</span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Happens in <strong style={{ color: "#FF6B6B" }}>73%</strong>{" "}
                  of deliveries
                </span>
              </div>
            </div>

            {/* Card 2: Customer asking "Where is my package?" */}
            <div
              className="problem-card"
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "32px",
                boxShadow: "0 15px 30px -12px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,107,107,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FF6B6B, #FFA07A)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                {/* Icon */}
                <div
                  className="card-icon icon-shake"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background: "rgba(255,107,107,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 4L8 7"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 4L16 7"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                    }}
                  >
                    Customer asking "Where is my package?"
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
                    And you're just as clueless as they are.
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>💬</span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Average{" "}
                  <strong style={{ color: "#FF6B6B" }}>8 messages</strong> per
                  delivery
                </span>
              </div>
            </div>

            {/* Card 3: You have no idea where the rider is */}
            <div
              className="problem-card"
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "32px",
                boxShadow: "0 15px 30px -12px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,107,107,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FF6B6B, #FFA07A)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                {/* Icon */}
                <div
                  className="card-icon"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background: "rgba(255,107,107,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="#FF6B6B"
                      fillOpacity="0.3"
                      stroke="#FF6B6B"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 2V5"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 19V22"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 12L19 12"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 12L2 12"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 5L17 7"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 17L5 19"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                    }}
                  >
                    You have no idea where the rider is
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
                    Is he stuck in traffic? Lost? Or just ghosting you?
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>🕒</span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <strong style={{ color: "#FF6B6B" }}>45min</strong> average
                  uncertainty per trip
                </span>
              </div>
            </div>

            {/* Card 4: You look unserious even when it's not your fault */}
            <div
              className="problem-card"
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "32px",
                boxShadow: "0 15px 30px -12px rgba(0,0,0,0.1)",
                border: "1px solid rgba(255,107,107,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #FF6B6B, #FFA07A)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                {/* Icon */}
                <div
                  className="card-icon"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "18px",
                    background: "rgba(255,107,107,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 15C8 15 9.5 17 12 17C14.5 17 16 15 16 15"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="9"
                      cy="9"
                      r="2"
                      fill="#FF6B6B"
                      fillOpacity="0.3"
                      stroke="#FF6B6B"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="15"
                      cy="9"
                      r="2"
                      fill="#FF6B6B"
                      fillOpacity="0.3"
                      stroke="#FF6B6B"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3 3L21 21"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                    }}
                  >
                    You look unserious even when it's not your fault
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
                    The customer doesn't care who's responsible. They just want
                    their package.
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>📉</span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <strong style={{ color: "#FF6B6B" }}>34%</strong> of customers
                  won't order again
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Cue */}
          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff",
                border: "1px solid rgba(255,107,107,0.2)",
                borderRadius: "100px",
                padding: "8px 20px",
                fontSize: "14px",
                color: "#475569",
                boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
              }}
            >
              <span>👇</span>
              There's a better way. Keep scrolling.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
