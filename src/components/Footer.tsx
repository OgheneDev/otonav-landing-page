"use client";

import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  ArrowUpRight,
  Send,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Warehouses", href: "#" },
    { label: "Blog", href: "#" },
    { label: "News & Media", href: "#" },
  ];

  const legalLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const socials = [
    { icon: <Facebook size={18} />, key: "fb", label: "Facebook" },
    { icon: <Twitter size={18} />, key: "tw", label: "Twitter" },
    { icon: <MessageCircle size={18} />, key: "wa", label: "WhatsApp" },
    { icon: <Instagram size={18} />, key: "ig", label: "Instagram" },
  ];

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        background:
          "linear-gradient(135deg, #FF5252 0%, #FF6B6B 40%, #FF8A65 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      className="w-full text-white"
    >
      {/* Decorative background shapes */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "10%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "35%",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          pointerEvents: "none",
        }}
      />

      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.9), rgba(255,255,255,0.6), transparent)",
        }}
      />

      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 32px 0" }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: "span 2", minWidth: "220px" }}>
            {/* Logo */}
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  letterSpacing: "-1px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                OtoNav
              </span>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "14px",
                lineHeight: "1.75",
                maxWidth: "300px",
                marginBottom: "28px",
              }}
            >
              OtoNav delivers unparalleled customer service through dedicated
              teams, agile culture, and a global footprint — bringing your
              shipments home, faster.
            </p>

            {/* Contact info */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                { icon: <MapPin size={14} />, text: "Lagos, Nigeria" },
                { icon: <Phone size={14} />, text: "+234 800 123 4567" },
                { icon: <Mail size={14} />, text: "hello@otonav.com.ng" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ opacity: 0.9 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "20px",
              }}
            >
              Explore
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHovered(link.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color:
                        hovered === link.label
                          ? "#fff"
                          : "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                      fontWeight: hovered === link.label ? "600" : "400",
                      textDecoration: "none",
                      padding: "6px 0",
                      transition: "all 0.2s ease",
                      transform:
                        hovered === link.label
                          ? "translateX(4px)"
                          : "translateX(0)",
                    }}
                  >
                    {link.label}
                    {hovered === link.label && (
                      <ArrowUpRight size={13} style={{ opacity: 0.8 }} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "20px",
              }}
            >
              Legal
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHovered(link.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color:
                        hovered === link.label
                          ? "#fff"
                          : "rgba(255,255,255,0.8)",
                      fontSize: "14px",
                      fontWeight: hovered === link.label ? "600" : "400",
                      textDecoration: "none",
                      padding: "6px 0",
                      transition: "all 0.2s ease",
                      transform:
                        hovered === link.label
                          ? "translateX(4px)"
                          : "translateX(0)",
                    }}
                  >
                    {link.label}
                    {hovered === link.label && (
                      <ArrowUpRight size={13} style={{ opacity: 0.8 }} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "20px",
              }}
            >
              Stay Updated
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.75)",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              Get shipping tips and news delivered to your inbox.
            </p>

            {subscribed ? (
              <div
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  fontSize: "13px",
                  color: "#fff",
                  fontWeight: "500",
                  backdropFilter: "blur(8px)",
                }}
              >
                ✓ You're subscribed!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "10px",
                    padding: "11px 14px",
                    color: "#fff",
                    fontSize: "13px",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    backdropFilter: "blur(4px)",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.25)")
                  }
                />
                <button
                  type="submit"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,1)";
                    e.currentTarget.style.color = "#FF5252";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                    e.currentTarget.style.color = "#FF5252";
                  }}
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    color: "#FF5252",
                    border: "none",
                    borderRadius: "10px",
                    padding: "11px 16px",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.3px",
                  }}
                >
                  Subscribe <Send size={14} />
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div style={{ marginTop: "24px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "12px",
                }}
              >
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {socials.map((item) => (
                  <button
                    key={item.key}
                    aria-label={item.label}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.15)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            paddingBottom: "36px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.6)",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
              © {new Date().getFullYear()} OtoNav. All rights reserved.
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
              Powered by
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "800",
                letterSpacing: "-0.5px",
                color: "#fff",
              }}
            >
              otonav.com.ng
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        input::placeholder { color: rgba(255,255,255,0.4); }
      `}</style>
    </footer>
  );
};

export default Footer;
