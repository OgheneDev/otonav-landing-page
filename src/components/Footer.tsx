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
      }}
      className="w-full text-white relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute -top-[120px] -right-20 w-[420px] h-[420px] rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 left-[10%] w-[280px] h-[280px] rounded-full bg-white/4 pointer-events-none" />
      <div className="absolute top-[40%] left-[35%] w-[160px] h-[160px] rounded-full bg-white/3 pointer-events-none" />

      {/* Top accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-white/60 via-white/90 to-white/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-14">
          {/* Brand Column - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight inline-flex items-center gap-1.5">
                OtoNav
              </span>
            </div>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-[300px] mb-7">
              OtoNav delivers unparalleled customer service through dedicated
              teams, agile culture, and a global footprint — bringing your
              shipments home, faster.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: <MapPin size={14} />, text: "Lagos, Nigeria" },
                { icon: <Phone size={14} />, text: "+234 800 123 4567" },
                { icon: <Mail size={14} />, text: "hello@otonav.com.ng" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-white/75 text-xs sm:text-sm"
                >
                  <span className="opacity-90">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-5">
              Explore
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHovered(link.label)}
                    onMouseLeave={() => setHovered(null)}
                    className={`inline-flex items-center gap-1 text-sm py-1.5 transition-all duration-200 ${
                      hovered === link.label
                        ? "text-white font-semibold translate-x-1"
                        : "text-white/80 font-normal translate-x-0"
                    }`}
                  >
                    {link.label}
                    {hovered === link.label && (
                      <ArrowUpRight size={13} className="opacity-80" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-5">
              Legal
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHovered(link.label)}
                    onMouseLeave={() => setHovered(null)}
                    className={`inline-flex items-center gap-1 text-sm py-1.5 transition-all duration-200 ${
                      hovered === link.label
                        ? "text-white font-semibold translate-x-1"
                        : "text-white/80 font-normal translate-x-0"
                    }`}
                  >
                    {link.label}
                    {hovered === link.label && (
                      <ArrowUpRight size={13} className="opacity-80" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-5">
              Stay Updated
            </h3>
            <p className="text-xs sm:text-sm text-white/75 mb-4 leading-relaxed">
              Get shipping tips and news delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-white/15 rounded-xl p-3 text-sm text-white font-medium backdrop-blur-sm">
                ✓ You're subscribed!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2.5"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-white/12 border border-white/25 rounded-xl px-3.5 py-2.5 text-white text-xs sm:text-sm outline-none w-full box-border backdrop-blur-sm transition-colors placeholder:text-white/40 focus:border-white/60"
                  required
                />
                <button
                  type="submit"
                  className="bg-white/90 text-[#FF5252] border-none rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold cursor-pointer flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-white hover:scale-[1.02] active:scale-[0.98] tracking-[0.3px]"
                >
                  Subscribe <Send size={14} />
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-white/55 mb-3">
                Follow Us
              </p>
              <div className="flex gap-2 flex-wrap">
                {socials.map((item) => (
                  <button
                    key={item.key}
                    aria-label={item.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all duration-250 backdrop-blur-sm hover:bg-white hover:text-[#FF5252] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-9">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
            <span className="text-xs sm:text-sm text-white/65">
              © {new Date().getFullYear()} OtoNav. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-1.5 order-1 sm:order-2">
            <span className="text-[11px] sm:text-xs text-white/50">
              Powered by
            </span>
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-white">
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
      `}</style>
    </footer>
  );
};

export default Footer;
