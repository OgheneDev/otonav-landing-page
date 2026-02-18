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

      <section className="font-['Sora'] relative overflow-hidden bg-white min-h-screen flex items-center">
        {/* Background layers */}
        <div
          aria-hidden
          className="absolute -top-[100px] -right-[120px] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,107,0.12) 0%, rgba(255,138,101,0.06) 55%, transparent 75%)",
          }}
        />

        <div
          aria-hidden
          className="absolute -bottom-20 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Main layout */}
        <div className="container mx-auto px-8 py-24 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Copy */}
            <div className="max-w-[540px]">
              {/* Eyebrow pill */}
              <div className="hero-fade-1 mb-5 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.18)] rounded-full py-1.5 pl-2 pr-3.5 text-xs font-semibold text-[#FF6B6B] tracking-[0.3px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] inline-block animate-[pulse-ring_1.8s_ease-out_infinite]" />
                  Built in Nigeria, for Nigeria
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-fade-2 text-center md:text-start text-[clamp(36px,4.5vw,52px)] font-extrabold leading-[1.12] tracking-[-1.5px] text-slate-900 m-0 mb-5">
                Stop losing customers{" "}
                <span className="text-[#FF6B6B] relative inline-block">
                  because of
                  <svg
                    aria-hidden
                    viewBox="0 0 220 12"
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 overflow-visible"
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

              {/* Subheadline */}
              <p className="hero-fade-3 text-center md:text-start font-['DM_Sans'] text-base leading-relaxed text-slate-600 m-0 mb-9 max-w-[480px] font-medium">
                OtoNav is a Nigerian-based delivery visibility app built to help
                vendors track deliveries and stop false "delivered" claims
                before they hurt your business.
              </p>

              {/* CTAs */}
              <div className="hero-fade-3 flex items-center  gap-4 flex-col md:flex-row">
                <button className="cta-primary w-full md:w-fit flex-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] text-white border-none rounded-xl px-7 py-3.5 text-sm font-bold cursor-pointer shadow-[0_6px_20px_rgba(255,107,107,0.35)] tracking-[0.2px] font-['Sora']">
                  Join Early Access →
                </button>

                <button className="cta-secondary w-full md:w-fit flex flex-1 items-center justify-center gap-2.5 bg-transparent border-none cursor-pointer p-0 font-['Sora']">
                  <div className="play-ring w-[42px] h-[42px] rounded-full bg-white shadow-[0_4px_14px_rgba(255,107,107,0.25)] border border-[rgba(255,107,107,0.2)] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 ml-0.5"
                      viewBox="0 0 24 24"
                      fill="#FF6B6B"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-600">
                    Request Demo
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Image + Video Placeholder */}
            <div className="hero-img relative flex justify-center lg:justify-end">
              {/* Decorative rings */}
              <div
                aria-hidden
                className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-2 border-dashed border-[rgba(255,107,107,0.15)] pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute top-1/2 right-[30px] -translate-y-1/2 w-[340px] h-[340px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,107,107,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Main visual */}
              <div className="relative z-10 w-[480px]">
                {/* App Mockup Image */}
                <div className="w-full h-[280px] relative mb-5 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
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

                {/* Video Placeholder */}
                <div
                  className="video-placeholder w-full h-40 rounded-2xl overflow-hidden relative shadow-[0_12px_30px_rgba(0,0,0,0.1)] border border-[rgba(255,107,107,0.2)] bg-gradient-to-br from-gray-50 to-white"
                  onClick={() =>
                    alert("30-second explainer video will play here")
                  }
                >
                  <div className="flex flex-col items-center justify-center h-full p-5 text-center">
                    <div className="play-button w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center mb-3 shadow-[0_8px_16px_rgba(255,107,107,0.3)]">
                      <svg
                        className="w-5 h-5 ml-0.5"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    <p className="text-sm font-semibold text-slate-900 m-0 mb-1 font-['Sora']">
                      Watch 30-second explainer
                    </p>
                    <p className="text-xs text-slate-500 m-0 font-['DM_Sans']">
                      See how OtoNav protects your business
                    </p>

                    <div className="w-3/5 h-1 bg-slate-200 rounded-sm mt-4">
                      <div className="w-[30%] h-full bg-[#FF6B6B] rounded-sm" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-semibold px-2 py-1 rounded-full tracking-[0.3px]">
                    0:30
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-[8%] -right-[5%] z-20 bg-white rounded-xl p-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.10)] border border-black/6 flex items-center gap-2 animate-[floatY_3.8s_ease-in-out_0.4s_infinite]">
                  <span className="text-lg">🛡️</span>
                  <div>
                    <p className="text-[10px] text-slate-400 leading-none m-0">
                      Proof of delivery
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5 leading-none m-0">
                      Photo verified
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-[18%] -left-[5%] z-20 bg-teal-400 rounded-xl p-2.5 shadow-[0_8px_28px_rgba(45,212,191,0.35)] flex items-center gap-2 animate-[floatY_4.2s_ease-in-out_1.2s_infinite]">
                  <span className="text-lg">📍</span>
                  <div>
                    <p className="text-[10px] text-white/70 leading-none m-0">
                      Live tracking
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5 leading-none m-0">
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
