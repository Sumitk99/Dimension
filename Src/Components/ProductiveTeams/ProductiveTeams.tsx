import React from "react";

const ProductiveTeams = () => {
  return (
    <div className="relativev mt-0 flex flex-col items-center justify-center min-h-screen w-full px-4 bg-slate-900 text-white overflow-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Slash Commands */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <span className="text-lg">/</span> Slash commands.
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Create meetings, issues and more in just seconds.
            </p>
          </div>
        </div>

        {/* Embeds */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-white">
              📄 Embeds.
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Info at a glance.
            </p>
          </div>
        </div>

        {/* Activity Channels */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-white">
              📡 Activity channels.
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Stay in the know. On the go.
            </p>
          </div>
        </div>

        {/* Auto Resource Pinning */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between col-span-1">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-white">
              📌 Auto resource pinning.
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              We’ll keep track of what’s important in chat.
            </p>
          </div>
        </div>

        {/* Collaborative Debugging */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 col-span-1">
          <h3 className="flex items-center gap-2 font-semibold text-white mb-3">
            {} Collaborative debugging.
          </h3>
          <pre className="bg-black/30 rounded-lg p-3 text-pink-400 text-sm overflow-x-auto">
            const stage = document.querySelector('svg'){"\n"}
            const hit = document.querySelector('di'){"\n"}
            let mPos = {'{'}x:50, y:-50{'}'}
          </pre>
          <p className="text-sm text-gray-400 mt-2">
            Share and collaboratively debug code – together.
          </p>
        </div>

        {/* AI Auto Summarize */}
        <div className="relative bg-white/5 border border-white/10 rounded-xl p-4 overflow-hidden">
          <h3 className="flex items-center gap-2 font-semibold text-white mb-2">
            <span className="bg-pink-500 text-xs px-2 py-0.5 rounded-full">AI</span>
            Auto summarize.
          </h3>
          <p className="text-gray-300 text-sm">
            Get the gist, without the fluff.
          </p>
          {/* Sparkles */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="animate-pulse text-yellow-400 absolute top-4 right-6">✦</div>
            <div className="animate-bounce text-purple-400 absolute top-8 right-12">✦</div>
            <div className="animate-ping text-pink-400 absolute top-2 right-10">✦</div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Communicate more,{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                with
              </span>
              {' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                less
              </span>
              .
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Driven by delightfully smart interactions.
            </p>
          </div>
    </div>
  );
};

export default ProductiveTeams;
