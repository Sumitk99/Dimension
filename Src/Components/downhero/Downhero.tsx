import React from 'react'

function Downhero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 py-16 bg-slate-900 text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      {/* Floating dots/particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Top section with waitlist text */}
        <div className="space-y-8">
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Join the maintainers and contributors to the<br />
            largest open-source projects on our waitlist.
          </p>

          {/* Company logos */}
         
        </div>
        <div className="flex items-center justify-center  flex-wrap opacity-60">
          
          <img src="https://www.dimension.dev/build/q-c80f189d.png" alt="M" className='w-64' />
       
          
           <img src="https://www.dimension.dev/build/q-71ea0b86.png" alt="" className='w-64'/>
          
         
            
            <img src="https://www.dimension.dev/build/q-9d30e728.png" alt="" className='w-64' />
          
          
              <img src="https://www.dimension.dev/build/q-d1321835.png" alt="" className='w-64'/>
       
        </div>

        {/* Main content section */}
        <div className="space-y-8 pt-16">
          {/* Gradient icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Build software{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                faster
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                together
              </span>
              .
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              The most complete developer experience.
            </p>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Downhero

