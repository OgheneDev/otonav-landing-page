"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is OtoNav available across Nigeria?",
      answer:
        "Yes! OtoNav is built specifically for Nigerian vendors and is available in all 36 states. We're actively expanding our coverage to ensure every vendor can benefit from delivery visibility.",
    },
    {
      question: "Do customers need to download the app?",
      answer:
        "No, customers don't need to download anything. They receive real-time tracking links via SMS or WhatsApp that show exactly where their package is — no app required.",
    },
    {
      question: "How does the 14-day free trial work?",
      answer:
        "You get full access to all OtoNav features for 14 days, completely free. No credit card required. After the trial, you can choose a plan that fits your business size and needs.",
    },
    {
      question: "When is official launch?",
      answer:
        "We're launching soon! Join early access above to be the first to know and get exclusive launch benefits.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .faq-item {
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(255,107,107,0.3);
        }

        .faq-question {
          transition: all 0.2s ease;
        }

        .faq-question:hover {
          color: #FF6B6B;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .faq-answer {
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#ffffff" }}
        className="relative overflow-hidden py-24 px-6 md:px-20"
      >
        {/* Decorative elements */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            right: "0",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255,107,107,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "10%",
            left: "0",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(45,212,191,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div className="container mx-auto max-w-3xl relative z-10">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            {/* Small pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#FFF1F1",
                border: "1px solid rgba(255,107,107,0.2)",
                borderRadius: "100px",
                padding: "4px 16px 4px 12px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#FF6B6B",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#FF6B6B",
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: "0.3px",
                }}
              >
                GOT QUESTIONS?
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(36px, 5vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-1.2px",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#FF6B6B" }}>Questions</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#64748b",
                marginTop: "12px",
              }}
            >
              Everything you need to know about OtoNav
            </p>
          </div>

          {/* FAQ Items */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "32px",
              border: "1px solid #ECEEF2",
              overflow: "hidden",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                style={{
                  borderBottom:
                    index < faqs.length - 1 ? "1px solid #ECEEF2" : "none",
                }}
              >
                {/* Question */}
                <div
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : (index as any))
                  }
                  style={{
                    padding: "24px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className="chevron"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0)",
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        openIndex === index ? "#FFF1F1" : "transparent",
                      borderRadius: "50%",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#FF6B6B"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <div
                    className="faq-answer"
                    style={{
                      padding: "0 28px 24px 28px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "#475569",
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              padding: "24px",
              background: "#F8F9FB",
              borderRadius: "20px",
              border: "1px solid #ECEEF2",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "#0f172a",
                margin: "0 0 12px",
              }}
            >
              Still have questions? We're here to help.
            </p>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid #FF6B6B",
                color: "#FF6B6B",
                borderRadius: "30px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Sora', sans-serif",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFF1F1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact Support →
            </button>
          </div>

          {/* Note about launch date */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "12px",
              color: "#94a3b8",
            }}
          >
            ⏳ Official launch date coming soon • Join early access to be
            notified
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
