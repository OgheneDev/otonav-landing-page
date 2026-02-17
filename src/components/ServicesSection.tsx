import React from "react";
import {
  MapPin,
  Navigation,
  ShieldCheck,
  AlertTriangle,
  Bell,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Real-time tracking",
      description:
        "See exactly where your rider is at every moment of the journey.",
      icon: MapPin,
      number: "01",
    },
    {
      title: "Stops-away visibility",
      description:
        "Know precisely how many stops before delivery — no more guessing.",
      icon: Navigation,
      number: "02",
    },
    {
      title: "Delivery confirmation control",
      description:
        "You approve completion — not the rider. Full control in your hands.",
      icon: ShieldCheck,
      number: "03",
    },
    {
      title: "Location mismatch protection",
      description:
        "System blocks delivery if rider isn't at the exact drop-off location.",
      icon: AlertTriangle,
      number: "04",
    },
    {
      title: "Instant alerts to vendor and customer",
      description:
        "Both parties get notified immediately at every key milestone.",
      icon: Bell,
      number: "05",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .services-section {
          font-family: 'DM Sans', sans-serif;
        }

        .services-section h2,
        .services-section h3 {
          font-family: 'Sora', sans-serif;
        }

        .service-card {
          position: relative;
          background: white;
          border: 1px solid #ECEEF2;
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: default;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,107,0.04) 0%, transparent 60%);
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover {
          border-color: rgba(255, 107, 107, 0.3);
          box-shadow: 0 16px 48px rgba(255, 107, 107, 0.1), 0 4px 16px rgba(0,0,0,0.06);
          transform: translateY(-4px);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover .card-icon {
          background: #FF6B6B;
          transform: scale(1.08) rotate(-4deg);
        }

        .service-card:hover .card-icon svg {
          color: white !important;
        }

        .service-card:hover .card-number {
          opacity: 0.12;
        }

        .card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #FFF1F1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-number {
          position: absolute;
          top: 28px;
          right: 28px;
          font-family: 'Sora', sans-serif;
          font-size: 72px;
          font-weight: 800;
          color: #141414;
          opacity: 0.04;
          line-height: 1;
          transition: opacity 0.3s ease;
          user-select: none;
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border: 1.5px solid #FF6B6B;
          color: #FF6B6B;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Sora', sans-serif;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }

        .btn-outline:hover {
          background: #FFF1F1;
          border-color: #FF6B6B;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #FF6B6B;
          color: white;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          border-radius: 12px;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.35);
        }

        .btn-primary:hover {
          background: #FF5252;
          box-shadow: 0 6px 24px rgba(255, 107, 107, 0.45);
          transform: translateY(-1px);
        }

        .btn-primary:active,
        .btn-outline:active {
          transform: translateY(0px) scale(0.98);
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFF1F1;
          color: #FF6B6B;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Sora', sans-serif;
          padding: 6px 14px;
          border-radius: 100px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .tag-dot {
          width: 6px;
          height: 6px;
          background: #FF6B6B;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .underline-accent {
          height: 3px;
          width: 48px;
          background: linear-gradient(90deg, #FF6B6B, rgba(255,107,107,0.2));
          border-radius: 100px;
          margin-top: 12px;
        }

        .decorative-blob {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255,107,107,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .decorative-blob-2 {
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ECEEF2 20%, #ECEEF2 80%, transparent);
          margin: 48px 0;
        }

        /* Custom grid for 5 items */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .features-grid .service-card:last-child {
          grid-column: 2 / 3;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-grid .service-card:last-child {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Feature badge styles */
        .feature-badge {
          display: inline-block;
          background: #FF6B6B;
          color: white;
          font-size: 10px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          padding: 2px 8px;
          border-radius: 30px;
          margin-left: 8px;
          vertical-align: middle;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>

      <section className="services-section relative w-full bg-[#F8F9FB] py-24 px-6 md:px-20 overflow-hidden">
        <div className="decorative-blob" />
        <div className="decorative-blob-2" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16">
            <div className="tag-pill">
              <span className="tag-dot" />
              KEY FEATURES
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#141414] leading-tight tracking-tight">
              Everything you need to{" "}
              <span className="text-[#FF6B6B]">stay in control</span>
            </h2>
            <div className="underline-accent" />

            <p className="mt-5 text-slate-500 text-base max-w-lg leading-relaxed">
              Simple, powerful tools that eliminate delivery uncertainty and
              protect your reputation.
            </p>
          </div>

          {/* Features Grid - 5 items */}
          <div className="features-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <span className="card-number">{service.number}</span>

                  <div className="card-icon">
                    <Icon className="w-5 h-5 text-[#FF6B6B]" strokeWidth={2} />
                  </div>

                  <h3
                    className="text-[18px] font-700 text-[#141414] mb-3 leading-snug flex items-center flex-wrap"
                    style={{ fontWeight: 700 }}
                  >
                    {service.title}
                    {index === 4 && <span className="feature-badge">NEW</span>}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Small visual indicators for key features */}
                  {index === 2 && (
                    <div
                      style={{
                        marginTop: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "10px", color: "#2DD4BF" }}>
                        ●
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#64748b",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        Rider can't self-confirm
                      </span>
                    </div>
                  )}

                  {index === 3 && (
                    <div
                      style={{
                        marginTop: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "10px", color: "#FF6B6B" }}>
                        ●
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#64748b",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        Geofence protection active
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="divider-line" />

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="btn-outline w-full sm:w-auto">
              See All Features
            </button>
            <button className="btn-primary w-full sm:w-auto">
              Start Protecting Your Deliveries
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>

          {/* Feature highlight note */}
          <div
            style={{
              textAlign: "center",
              marginTop: "24px",
              fontSize: "13px",
              color: "#94a3b8",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ⚡ No long contracts • Pay only for what you use
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
