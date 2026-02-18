"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Company", hasDropdown: true },
    { name: "Services", hasDropdown: true },
    { name: "Solutions", hasDropdown: false },
    { name: "Industries", hasDropdown: false },
    { name: "Insights", hasDropdown: false },
    { name: "News", hasDropdown: false },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .navbar {
          font-family: 'DM Sans', sans-serif;
        }

        .navbar-logo {
          font-family: 'Sora', sans-serif;
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }

        .btn-text {
          font-family: 'Sora', sans-serif;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-animate {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      <nav className="navbar fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 px-4 md:px-12 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Sora font */}
          <Link href="/" className="group">
            <div className="navbar-logo text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8A65] bg-clip-text text-transparent">
                Oto
              </span>
              <span className="text-[#0f172a] group-hover:text-[#FF6B6B] transition-colors">
                Nav
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="#"
                  className="nav-link px-4 py-2 text-gray-600 hover:text-[#FF6B6B] text-sm flex items-center gap-1 transition-colors rounded-lg hover:bg-[#FFF5F4]"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="dropdown-animate absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {["Overview", "About Us", "Careers"].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="nav-link block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#FFF5F4] hover:text-[#FF6B6B] transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="btn-text px-5 py-2.5 border border-[#FF6B6B] text-[#FF6B6B] rounded-xl text-sm hover:bg-[#FFF5F4] transition-all font-medium">
              Request Quote
            </button>
            <button className="btn-text px-6 py-2.5 bg-gradient-to-r from-[#FF6B6B] to-[#FF8A65] text-white rounded-xl text-sm hover:shadow-lg hover:shadow-red-200 transition-all font-medium">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#FF6B6B] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full h-screen left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col space-y-3 dropdown-animate">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href="#"
                  className="nav-link block text-base font-medium text-gray-800 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <hr className="border-gray-100 my-2" />
            <button className="btn-text w-full py-3.5 border border-[#FF6B6B] text-[#FF6B6B] rounded-xl text-sm font-medium hover:bg-[#FFF5F4] transition-all">
              Request Quote
            </button>
            <button className="btn-text w-full py-3.5 bg-gradient-to-r from-[#FF6B6B] to-[#FF8A65] text-white rounded-xl text-sm font-medium shadow-lg shadow-red-200 transition-all">
              Join Now
            </button>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;
