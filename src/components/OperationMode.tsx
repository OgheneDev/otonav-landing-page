import React from "react";
import { Truck } from "lucide-react";

const OperationMode = () => {
  const steps = [
    {
      number: "01",
      title: "Vendor-Led Initiation",
      description:
        "Your dashboard is the control tower. Unlike other platforms, you initiate every order. This ensures accurate address entry from your saved customer list and gives you full authority over which rider handles which package.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1771350485/Rectangle_1314_kmwlkr.png",
      tag: "Control",
    },
    {
      number: "02",
      title: "On-Demand Rider Broadcasting",
      description:
        "Speed is key. Once you create an order, our system broadcasts it to your available riders instantly. Riders receive a 'Job Alert' and can accept or decline based on their capacity, ensuring that only active and ready drivers are engaged.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1771350485/image_3_j8vynj.png",
      tag: "Speed",
    },
    {
      number: "03",
      title: "Secure Digital Handshake",
      description:
        "Trust, but verify. The delivery cycle is only complete when the customer confirms receipt and the rider's GPS matches the delivery location. If the coordinates don't match, the system flags it immediately for your review.",
      image:
        "https://res.cloudinary.com/dgc8cd67w/image/upload/v1771350485/91fa59e6781adbdced82e349bb595d99_1_1_pup74c.png",
      tag: "Security",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background texture dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#00928A] mb-4 bg-[#00928A]/8 px-4 py-1.5 rounded-full">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Operation{" "}
            <span className="text-[#FF7669] italic font-light">Mode</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            A seamless three-step process designed to give you maximum control
            and visibility.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-5">
                {/* Step tag */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white bg-[#FF7669] px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                  <span className="text-[#FF7669]/30 font-black text-5xl leading-none select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                  {step.title}
                </h3>

                <div className="w-10 h-0.5 bg-[#00928A]" />

                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
                  {step.description}
                </p>

                {/* Step indicator dots */}
                <div className="flex items-center gap-2 pt-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? "w-6 bg-[#FF7669]" : "w-1.5 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Side — no constraining box, natural aspect ratio */}
              <div className="flex-1 flex justify-center">
                <div
                  className={`relative w-full max-w-sm ${
                    index % 2 !== 0
                      ? "md:ml-0 md:mr-auto"
                      : "md:mr-0 md:ml-auto"
                  }`}
                >
                  {/* Decorative blob behind image */}
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-50"
                    style={{
                      background:
                        index % 2 === 0
                          ? "radial-gradient(ellipse at 60% 40%, #FF766920 0%, transparent 70%)"
                          : "radial-gradient(ellipse at 40% 60%, #00928A20 0%, transparent 70%)",
                    }}
                  />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative w-full h-auto object-contain drop-shadow-sm"
                    style={{ maxHeight: "320px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationMode;
