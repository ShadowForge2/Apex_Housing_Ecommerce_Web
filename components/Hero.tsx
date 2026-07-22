'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm font-light text-primary-300">Nigeria&apos;s Trusted Rental Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-tight mb-6 tracking-wide">
              <span className="text-white">Rent Smarter.</span>
              <br />
              <span className="text-gradient">Connect Securely.</span>
              <br />
              <span className="text-white">Live Better.</span>
            </h1>

            <p className="text-lg sm:text-xl text-dark-subtitle max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              APEX Housing connects tenants and landlords through a secure, verified platform designed to make renting safer, faster, and more transparent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/api/download-apk"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-dark-surface border border-dark-border hover:border-primary-500/30 text-white font-normal tracking-wide rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download APK
              </a>
              <span className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-dark-surface border border-dark-border text-white/40 font-normal tracking-wide rounded-2xl cursor-not-allowed">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] opacity-50">Coming soon</span>
                  <span>Google Play</span>
                </span>
              </span>
              <span className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-dark-surface border border-dark-border text-white/40 font-normal tracking-wide rounded-2xl cursor-not-allowed">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.06 4.83 18.82 5.06 19.96 6.66C19.87 6.72 17.78 7.92 17.81 10.45C17.84 13.46 20.46 14.46 20.49 14.47C20.46 14.54 20.07 15.92 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] opacity-50">Coming soon</span>
                  <span>App Store</span>
                </span>
              </span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative animate-float scale-[0.65] sm:scale-75 md:scale-85 lg:scale-100 origin-center">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-[3rem] blur-2xl" />
              {/* Phone frame */}
              <div className="relative w-[280px] h-[560px] bg-white rounded-[2.8rem] border-[3px] border-gray-800 overflow-hidden shadow-2xl shadow-primary-500/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[26px] bg-gray-800 rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="w-full h-full bg-white flex flex-col overflow-hidden pt-10 pb-0">

                  {/* Header */}
                  <div className="flex items-center justify-between px-4 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-[#8B5CF6] flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">AB</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-900 leading-tight">Amina Bello</p>
                        <p className="text-[9px] text-gray-400">Ilorin, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-[8px] bg-gray-50 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Search bar */}
                  <div className="px-4 pb-3">
                    <div className="flex items-center h-[36px] bg-gray-50 rounded-full border border-gray-100 overflow-hidden">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-3 shrink-0">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <span className="text-[10px] text-gray-400 ml-2 flex-1">Search properties or map...</span>
                      <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center mr-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="1" x2="7" y1="14" y2="14" /><line x1="9" x2="15" y1="8" y2="8" /><line x1="17" x2="23" y1="16" y2="16" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex gap-1.5 px-4 pb-2 overflow-hidden">
                    {['Near Me', 'All', 'For Rent', 'Villa'].map((cat, i) => (
                      <span key={cat} className={`text-[9px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${i === 0 ? 'bg-[#8B5CF6] text-white' : 'bg-gray-50 text-gray-500 border border-gray-100'}`}>
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Price chips */}
                  <div className="flex gap-1 px-4 pb-3 overflow-hidden">
                    {['Any Price', 'Under 100k', '100k-300k'].map((p, i) => (
                      <span key={p} className={`text-[8px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${i === 0 ? 'bg-[#8B5CF6] text-white' : 'bg-gray-50 text-gray-400 border border-gray-100'}`}>
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Recommended section */}
                  <div className="px-4 pb-1.5 flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-900">Recommended</span>
                    <span className="text-[9px] text-[#8B5CF6] font-semibold">View All</span>
                  </div>

                  {/* Property cards (horizontal scroll) */}
                  <div className="flex gap-2.5 px-4 pb-3 overflow-hidden">
                    {/* Card 1 */}
                    <div className="shrink-0 w-[150px] bg-white rounded-[14px] border border-gray-100 overflow-hidden shadow-sm">
                      <div className="relative h-[80px] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=160&fit=crop" alt="2BR Apartment" className="w-full h-full object-cover" />
                        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </div>
                        <div className="absolute bottom-1.5 left-1.5 bg-white/90 text-[7px] font-semibold text-gray-700 px-2 py-0.5 rounded-full">
                          For Rent
                        </div>
                      </div>
                      <div className="p-2.5">
                        <p className="text-[10px] font-bold text-gray-900 leading-tight truncate">2BR Apartment in GRA</p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                          <span className="text-[8px] text-gray-400">Ilorin, Kwara</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] font-bold text-[#8B5CF6]">₦350,000/yr</span>
                          <div className="flex items-center gap-0.5">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <span className="text-[8px] font-semibold text-gray-700">4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="shrink-0 w-[150px] bg-white rounded-[14px] border border-gray-100 overflow-hidden shadow-sm">
                      <div className="relative h-[80px] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=160&fit=crop" alt="3BR Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="#EF4444" stroke="none">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </div>
                        <div className="absolute bottom-1.5 left-1.5 bg-white/90 text-[7px] font-semibold text-gray-700 px-2 py-0.5 rounded-full">
                          For Rent
                        </div>
                      </div>
                      <div className="p-2.5">
                        <p className="text-[10px] font-bold text-gray-900 leading-tight truncate">3BR Villa in Tanke</p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                          <span className="text-[8px] text-gray-400">Ilorin, Kwara</span>
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] font-bold text-[#8B5CF6]">₦500,000/yr</span>
                          <div className="flex items-center gap-0.5">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            <span className="text-[8px] font-semibold text-gray-700">4.6</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Popular Locations */}
                  <div className="px-4 pb-1.5 flex items-center justify-between">
                    <span className="text-[12px] font-bold text-gray-900">Popular Locations</span>
                    <span className="text-[9px] text-[#8B5CF6] font-semibold">See All</span>
                  </div>
                  <div className="flex gap-2 px-4 pb-2 overflow-hidden">
                    {[
                      { name: 'Unilorin', count: '12 homes', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&h=80&fit=crop' },
                      { name: 'Tanke', count: '8 homes', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=80&fit=crop' },
                      { name: 'GRA', count: '5 homes', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=80&fit=crop' },
                    ].map((loc) => (
                      <div key={loc.name} className="shrink-0 w-[85px] bg-white rounded-[12px] border border-gray-100 overflow-hidden shadow-sm">
                        <div className="h-[36px] overflow-hidden">
                          <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-1.5">
                          <p className="text-[9px] font-bold text-gray-900">{loc.name}</p>
                          <p className="text-[7px] text-gray-400">{loc.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto border-t border-gray-100 bg-white flex items-center justify-around py-2 px-2">
                    {[
                      { label: 'Home', active: true, icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
                      { label: 'Bookings', active: false, icon: 'M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' },
                      { label: 'Chat', active: false, icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
                      { label: 'Saved', active: false, icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' },
                      { label: 'Profile', active: false, icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={item.active ? '#8B5CF6' : 'none'} stroke={item.active ? '#8B5CF6' : '#9CA3AF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                        <span className={`text-[7px] ${item.active ? 'text-[#8B5CF6] font-semibold' : 'text-gray-400'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
