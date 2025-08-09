import React from "react";

const Form = () => {
  return (
    <div className="min-h-1/4 w-[80%] bg-[#080808] ml-35 mb-3 flex items-stretch font-sans relative overflow-hidden">
      {/* Background gradient effects for Form */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-gray-900/30 to-slate-800/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      {/* Form-specific floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 left-1/6 w-0.5 h-0.5 bg-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-0.5 h-0.5 bg-purple-400/20 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/6 left-1/2 w-0.5 h-0.5 bg-blue-400/20 rounded-full animate-pulse delay-5000"></div>
        <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-stretch w-full">
        {/* Sidebar */}
        <aside className="flex flex-col items-center gap-4 py-6 px-2 bg-white/5 border-r border-white/10 backdrop-blur-md min-w-[64px] max-w-[64px]">
        {/* Icons (replace with SVGs or icon components as needed) */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-500 flex items-center justify-center mb-4">
          <img src="https://www.dimension.dev/build/q-715f17d1.png" alt="D" className="w-7 h-7 object-cover" />
        </div>
        <div className="flex flex-col gap-4 text-gray-400 text-xl">
          <span>🏠</span>
          <span>💬</span>
          <span>📁</span>
          <span>📡</span>
          <span>⚙️</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-500 flex items-center justify-center">
              <img src="https://www.dimension.dev/build/q-715f17d1.png" alt="D" className="w-6 h-6 object-cover" />
            </div>
            <span className="text-lg font-semibold text-white">Dimension</span>
            <span className="ml-2 text-gray-400 text-sm">⌄</span>
            <button className="ml-4 text-white/80 text-xl">+</button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80 text-xl">+</span>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white/20" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Chat/Team Panel */}
          <nav className="w-64 min-w-[220px] max-w-[300px] bg-white/5 border-r border-white/10 p-4 flex flex-col gap-4 backdrop-blur-md">
            <div className="text-gray-300 font-semibold mb-2">Chat</div>
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Team</div>
              <div className="flex flex-col gap-1">
                <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 text-white/80"># dev</button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-gray-400 hover:bg-white/10"># chat</button>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">Direct messages</div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">
                <img src="https://randomuser.me/api/portraits/men/31.jpg" className="w-6 h-6 rounded-full" alt="Tejas" />
                <span className="text-white/90">Tejas</span>
                <span className="w-2 h-2 bg-green-400 rounded-full ml-auto"></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-6 h-6 rounded-full" alt="Ari" />
                <span className="text-white/90">Ari</span>
                <span className="w-2 h-2 bg-green-400 rounded-full ml-auto"></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" className="w-6 h-6 rounded-full" alt="Landon" />
                <span className="text-white/90">Landon</span>
                <span className="w-2 h-2 bg-green-400 rounded-full ml-auto"></span>
              </div>
            </div>
          </nav>

          {/* Main Chat Area */}
          <main className="flex-1 flex flex-col bg-white/2 p-8 overflow-y-auto">
            <div className="text-lg font-semibold text-white mb-4">Core Team</div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/men/31.jpg" className="w-7 h-7 rounded-full" alt="Tejas" />
                  <span className="text-white font-medium">Tejas</span>
                  <span className="text-xs text-gray-400 ml-2">1:14 PM</span>
                </div>
                <div className="text-gray-200">Hey Ari! I wanted to check in with you on the next release and bug list. Do you think we’ll be on track to share the latest with the team on Friday?</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-7 h-7 rounded-full" alt="Ari" />
                  <span className="text-white font-medium">Ari</span>
                  <span className="text-xs text-gray-400 ml-2">1:15 PM</span>
                </div>
                <div className="text-gray-200">There are a few items on the tasklist that needs to be addressed on IOS.</div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mt-2 text-xs text-gray-300">
                  <div className="mb-1 font-medium">Linear</div>
                  <div className="mb-1 text-gray-400">Follow up not highlighted in the block at the 2nd level</div>
                  <div className="mb-1 text-gray-500">The 2nd level comment block does not highlight the follow up button.</div>
                  <div className="flex gap-2 flex-wrap text-gray-500 mt-2">
                    <span>IOS-21</span>
                    <span>Mobile</span>
                    <span>Ari</span>
                    <span>In Progress</span>
                    <span>Urgent</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img src="https://randomuser.me/api/portraits/men/31.jpg" className="w-7 h-7 rounded-full" alt="Tejas" />
                  <span className="text-white font-medium">Tejas</span>
                  <span className="text-xs text-gray-400 ml-2">1:16 PM</span>
                </div>
                <div className="text-gray-200">Awesome! Make sure it looks as close to the Figma as possible :)<br/>Here’s a link to our Figma file if you don’t have access yet!</div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mt-2 text-xs text-gray-300">
                  <div className="mb-1 font-medium">Figma</div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-64 min-w-[220px] max-w-[300px] bg-white/5 border-l border-white/10 p-4 flex flex-col gap-4 backdrop-blur-md">
            <div className="text-gray-300 font-semibold mb-2">Members - 3</div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/31.jpg" className="w-6 h-6 rounded-full" alt="Tejas" />
                <span className="text-white/90">Tejas</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-6 h-6 rounded-full" alt="Ari" />
                <span className="text-white/90">Ari</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" className="w-6 h-6 rounded-full" alt="Landon" />
                <span className="text-white/90">Landon</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">Quick Access</div>
            <div className="flex flex-col gap-1 mb-4">
              <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 text-gray-400">Database</button>
              <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 text-gray-400">API Collections</button>
            </div>
            <div className="text-xs text-gray-500 mb-1">Tasks</div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-pink-500" /> IOS-211 - Selector fix
              </label>
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-pink-500" /> Discord auth
              </label>
            </div>
            <div className="text-xs text-gray-500 mb-1">Deployments</div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-400">Frontend</span>
              <span className="text-gray-400">Landing</span>
              <span className="text-gray-400">Backend</span>
            </div>
          </aside>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Form;
