"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-6px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255,107,107,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 10px rgba(255,107,107,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255,107,107,0); }
        }

        .hero-fade-1 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.1s both; }
        .hero-fade-2 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.25s both; }
        .hero-fade-3 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.4s both; }
        .hero-fade-4 { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) 0.55s both; }
        .hero-img    { animation: fadeIn 0.9s ease 0.3s both; }

        .truck-badge { animation: floatBadge 3.5s ease-in-out infinite; }
        .plane-badge { animation: floatY 4s ease-in-out 0.8s infinite; }

        .cta-primary:hover  { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(255,107,107,0.45); }
        .cta-primary        { transition: all 0.25s ease; }
        .cta-secondary:hover .play-ring { animation: pulse-ring 1s ease-out; }

        .stat-pill:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .stat-pill { transition: all 0.2s ease; }
        
        /* Video placeholder styles */
        .video-placeholder {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .video-placeholder:hover {
          transform: scale(1.02);
        }
        .video-placeholder:hover .play-button {
          background: #FF6B6B;
          transform: scale(1.1);
        }
        .play-button {
          transition: all 0.3s ease;
        }
      `}</style>

      <section
        style={{ fontFamily: "'Sora', sans-serif" }}
        className="relative overflow-hidden bg-white min-h-screen flex items-center"
      >
        {/* ── Background layers ───────────────────────────── */}

        {/* Warm gradient blob — top right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-100px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,107,0.12) 0%, rgba(255,138,101,0.06) 55%, transparent 75%)",
            pointerEvents: "none",
          }}
        />

        {/* Soft teal blob — bottom left */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Subtle grid texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Floating badges — updated for delivery problem theme ── */}

        {/* Dispute alert badge — top-center */}
        <div
          className="truck-badge"
          style={{
            position: "absolute",
            top: "28px",
            left: "50%",
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "10px",
                background: "rgba(255,107,107,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{ width: 16, height: 16, color: "#FF6B6B" }}
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: "11px",
                  color: "#94a3b8",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                False claims stopped
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#0f172a",
                  margin: "2px 0 0",
                  lineHeight: 1,
                }}
              >
                847 this week
              </p>
            </div>
          </div>
        </div>

        {/* ── Main layout ─────────────────────────────────── */}
        <div
          className="container mx-auto"
          style={{ padding: "96px 32px 64px", position: "relative", zIndex: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div style={{ maxWidth: "540px" }}>
              {/* Eyebrow pill - updated for Nigerian focus */}
              <div className="hero-fade-1" style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255,107,107,0.08)",
                    border: "1px solid rgba(255,107,107,0.18)",
                    borderRadius: "100px",
                    padding: "5px 14px 5px 8px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#FF6B6B",
                    letterSpacing: "0.3px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#FF6B6B",
                      display: "inline-block",
                      animation: "pulse-ring 1.8s ease-out infinite",
                    }}
                  />
                  Built in Nigeria, for Nigeria
                </span>
              </div>

              {/* Headline - updated */}
              <h1
                className="hero-fade-2"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 52px)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-1.5px",
                  color: "#0f172a",
                  margin: "0 0 20px",
                }}
              >
                Stop losing customers{" "}
                <span
                  style={{
                    color: "#FF6B6B",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  because of
                  <svg
                    aria-hidden
                    viewBox="0 0 220 12"
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: 0,
                      width: "100%",
                      height: "10px",
                      overflow: "visible",
                    }}
                  >
                    <path
                      d="M2 8 Q55 2 110 8 Q165 14 218 8"
                      stroke="#FF6B6B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.35"
                    />
                  </svg>
                </span>{" "}
                delivery problems.
              </h1>

              {/* Subheadline - updated */}
              <p
                className="hero-fade-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#475569",
                  margin: "0 0 36px",
                  maxWidth: "480px",
                  fontWeight: 500,
                }}
              >
                OtoNav is a Nigerian-based delivery visibility app built to help
                vendors track deliveries and stop false "delivered" claims
                before they hurt your business.
              </p>

              {/* CTAs - updated button labels */}
              <div
                className="hero-fade-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="cta-primary"
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #FF5252)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(255,107,107,0.35)",
                    letterSpacing: "0.2px",
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  Join Early Access →
                </button>

                <button
                  className="cta-secondary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "'Sora', sans-serif",
                  }}
                >
                  <div
                    className="play-ring"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 4px 14px rgba(255,107,107,0.25)",
                      border: "1.5px solid rgba(255,107,107,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      style={{ width: 14, height: 14, marginLeft: 2 }}
                      viewBox="0 0 24 24"
                      fill="#FF6B6B"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Request Demo
                  </span>
                </button>
              </div>

              {/* Social proof stats - updated for delivery focus */}
              <div
                className="hero-fade-4"
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "44px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { value: "98%", label: "Dispute reduction" },
                  { value: "15min", label: "Average resolution" },
                  { value: "24/7", label: "Live tracking" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="stat-pill"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "12px",
                      padding: "10px 16px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#0f172a",
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#94a3b8",
                        margin: "4px 0 0",
                        lineHeight: 1,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image + Video Placeholder */}
            <div className="hero-img relative flex justify-center lg:justify-end">
              {/* Decorative ring behind image */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  width: "420px",
                  height: "420px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,107,107,0.15)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "30px",
                  transform: "translateY(-50%)",
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,107,107,0.07) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Main visual - Split between app mockup and video placeholder */}
              <div style={{ position: "relative", zIndex: 10, width: "480px" }}>
                {/* App Mockup Image */}
                <div
                  style={{
                    width: "100%",
                    height: "280px",
                    position: "relative",
                    marginBottom: "20px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  <Image
                    alt="OtoNav delivery tracking app interface"
                    src="https://res.cloudinary.com/dgc8cd67w/image/upload/v1771347060/91fa59e6781adbdced82e349bb595d99_1_kqkt5y.png"
                    fill
                    sizes="480px"
                    className="object-cover"
                    priority
                    quality={100}
                  />
                </div>

                {/* Video Placeholder - 30-second explainer (click-to-play) */}
                <div
                  className="video-placeholder"
                  style={{
                    width: "100%",
                    height: "160px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,107,107,0.2)",
                    background: "linear-gradient(145deg, #f8f9fa, #ffffff)",
                  }}
                  onClick={() => {
                    // Video will be implemented when ready
                    alert("30-second explainer video will play here");
                  }}
                >
                  {/* Video thumbnail/placeholder content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    {/* Play button */}
                    <div
                      className="play-button"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "#FF6B6B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                        boxShadow: "0 8px 16px rgba(255,107,107,0.3)",
                      }}
                    >
                      <svg
                        style={{ width: 20, height: 20, marginLeft: 2 }}
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0f172a",
                        margin: "0 0 4px",
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      Watch 30-second explainer
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#64748b",
                        margin: 0,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      See how OtoNav protects your business
                    </p>

                    {/* Progress bar placeholder */}
                    <div
                      style={{
                        width: "60%",
                        height: "4px",
                        background: "#e2e8f0",
                        borderRadius: "2px",
                        marginTop: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "100%",
                          background: "#FF6B6B",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Video duration badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      background: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 8px",
                      borderRadius: "20px",
                      letterSpacing: "0.3px",
                    }}
                  >
                    0:30
                  </div>
                </div>

                {/* Floating badges - updated for delivery visibility theme */}
                <div
                  style={{
                    position: "absolute",
                    top: "8%",
                    right: "-5%",
                    zIndex: 20,
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "10px 14px",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.10)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    animation: "floatY 3.8s ease-in-out 0.4s infinite",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🛡️</span>
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#94a3b8",
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      Proof of delivery
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#0f172a",
                        margin: "2px 0 0",
                        lineHeight: 1,
                      }}
                    >
                      Photo verified
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "18%",
                    left: "-5%",
                    zIndex: 20,
                    background: "#2DD4BF",
                    borderRadius: "14px",
                    padding: "10px 14px",
                    boxShadow: "0 8px 28px rgba(45,212,191,0.35)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    animation: "floatY 4.2s ease-in-out 1.2s infinite",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>📍</span>
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.7)",
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      Live tracking
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "2px 0 0",
                        lineHeight: 1,
                      }}
                    >
                      Real-time updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
