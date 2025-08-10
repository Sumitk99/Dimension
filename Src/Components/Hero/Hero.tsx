import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-4 pt-16 pb-12 bg-transparent overflow-hidden">
      {/* Enhanced Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
      
      {/* Additional floating particles for Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-pink-400/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-orange-400/30 rounded-full animate-pulse delay-2500"></div>
      </div>

      <div className="relative z-10">
        {/* Announcement Pill */}
      <div className="mb-6 mr-48 flex justify-center md:justify-end md:pr-12  lg:pr-24">

        <span className="px-5 py-1 rounded-full bg-white/10 text-pink-300 text-sm font-medium border border-pink-400/30 backdrop-blur-md shadow-sm">
          Announcing our <span className="text-pink-200 font-semibold">$1.4M Fundraise</span>
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">
        Dimension is the new <br />
        <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-200 bg-clip-text text-transparent">
          standard for collaboration
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-center text-lg md:text-xl text-gray-300 mb-10">
        Chat, code, cloud, deployments, and more.
      </p>

      {/* Email + Button Form */}
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-full max-w-xl mx-auto backdrop-blur-md shadow-lg">
        <input
          type="email"
          placeholder="Email address..."
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="px-8 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 shadow-md hover:from-pink-600 hover:to-orange-500 transition"
        >
          Join waitlist
        </button>
      </form>

      {/* Optional: Subtle background dots or glow can be added here with absolute divs or SVG */}
      </div>
    </section>
  );
};

export default Hero;
