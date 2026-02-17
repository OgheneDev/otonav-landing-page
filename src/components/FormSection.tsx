"use client";

import React, { useState } from "react";

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

      <section
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#F8F9FB" }}
        className="relative overflow-hidden py-24 px-6 md:px-20"
      >
        {/* Decorative blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "10%",
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
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container mx-auto max-w-2xl relative z-10">
          {/* Form Card */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "40px",
              padding: "48px 40px",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
              border: "1px solid #ECEEF2",
            }}
          >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 12px",
                  letterSpacing: "-1px",
                }}
              >
                Get early access
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  margin: 0,
                }}
              >
                Be the first to experience OtoNav. Limited spots available.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission will be implemented later
                window.location.href = "/thank-you";
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Full Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    Full Name <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "12px",
                      fontSize: "15px",
                      fontFamily: "'DM Sans', sans-serif",
                      background: "#FAFAFA",
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    Business Name <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "12px",
                      fontSize: "15px",
                      fontFamily: "'DM Sans', sans-serif",
                      background: "#FAFAFA",
                    }}
                    placeholder="Enter your business name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    Email Address <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "12px",
                      fontSize: "15px",
                      fontFamily: "'DM Sans', sans-serif",
                      background: "#FAFAFA",
                    }}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "6px",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    Phone Number <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "12px",
                      fontSize: "15px",
                      fontFamily: "'DM Sans', sans-serif",
                      background: "#FAFAFA",
                    }}
                    placeholder="0800 000 0000"
                  />
                </div>

                {/* Type of Business */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0f172a",
                      marginBottom: "12px",
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    Type of Business <span style={{ color: "#FF6B6B" }}>*</span>
                  </label>
                  <div
                    style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
                  >
                    {["Vendor", "Dispatch", "Other"].map((type) => (
                      <label
                        key={type}
                        className="radio-option"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 16px",
                          background:
                            businessType === type ? "#FFF1F1" : "#FAFAFA",
                          border: `1px solid ${businessType === type ? "#FF6B6B" : "#E2E8F0"}`,
                          borderRadius: "30px",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="businessType"
                          value={type}
                          checked={businessType === type}
                          onChange={(e) => setBusinessType(e.target.value)}
                          style={{ margin: 0, accentColor: "#FF6B6B" }}
                          required
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color:
                              businessType === type ? "#FF6B6B" : "#475569",
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
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginTop: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      background: "linear-gradient(135deg, #FF6B6B, #FF5252)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "16px 24px",
                      fontSize: "15px",
                      fontWeight: 700,
                      fontFamily: "'Sora', sans-serif",
                      cursor: "pointer",
                      boxShadow: "0 8px 20px rgba(255,107,107,0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 25px rgba(255,107,107,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(255,107,107,0.3)";
                    }}
                  >
                    Join Early Access →
                  </button>

                  <button
                    type="button"
                    style={{
                      flex: 1,
                      background: "#fff",
                      color: "#FF6B6B",
                      border: "1.5px solid #FF6B6B",
                      borderRadius: "12px",
                      padding: "16px 24px",
                      fontSize: "15px",
                      fontWeight: 600,
                      fontFamily: "'Sora', sans-serif",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FFF1F1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#fff";
                    }}
                    onClick={() => {
                      window.location.href = "/thank-you";
                    }}
                  >
                    Request Demo
                  </button>
                </div>

                {/* Note about redirect */}
                <p
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    textAlign: "center",
                    marginTop: "16px",
                  }}
                >
                  By submitting, you'll be redirected to a thank you page.
                  <br />
                  We'll send a confirmation email with next steps.
                </p>
              </div>
            </form>
          </div>

          {/* Data note */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "12px",
              color: "#94a3b8",
            }}
          >
            🔒 Your information is stored securely • CSV export available for
            leads
          </div>
        </div>
      </section>
    </>
  );
};

export default FormSection;
