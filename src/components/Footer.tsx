import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2c8a8c] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Section 1: Brand & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex flex-col items-center group cursor-pointer">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                className="w-12 h-12 mb-2 opacity-90 transition-transform duration-500 group-hover:scale-110"
              >
                {/* Crescent Moon */}
                <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z" />
                {/* Wave Line */}
                <path d="M4 18c2-2 4-2 6 0s4 2 6 0 2-2 2-2" strokeLinecap="round" />
              </svg>
              
              <div className="text-center">
                <p className="text-[10px] tracking-[0.4em] font-light uppercase opacity-80 mb-1">
                   Mirissa
                </p>
                <h1 className="text-4xl font-serif tracking-[0.15em] leading-tight">
                Gate Resort
                </h1>
              </div>
            </div>
            
            <p className="text-sm text-teal-50 font-light leading-relaxed max-w-sm">
              Experience the serene beauty of North Bali. From dolphin watching at sunrise to peaceful evenings by the shore, your journey begins here.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-4 text-sm group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-teal-400/30 flex items-center justify-center group-hover:border-[#b35483] transition-colors">
                  <svg className="w-4 h-4 text-[#b35483]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <span className="font-light">Jl. Seririt- Singaraja, Kaliasem, Bali 81152</span>
              </div>
              <div className="flex items-center gap-4 text-sm group cursor-pointer">
                <div className="w-8 h-8 rounded-full border border-teal-400/30 flex items-center justify-center group-hover:border-[#b35483] transition-colors">
                  <svg className="w-4 h-4 text-[#b35483]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span className="font-light">+62 812-3841-6830</span>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-[#b35483] text-xs font-bold tracking-[0.3em] uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><a href="#" className="hover:text-[#b35483] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#b35483] transition-colors">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-[#b35483] transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-[#b35483] transition-colors">Our Wellness Spa</a></li>
              <li><a href="#" className="hover:text-[#b35483] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Section 3: Google Maps Frame */}
          <div className="lg:col-span-5 h-[300px] w-full rounded-2xl overflow-hidden border border-teal-400/20 shadow-2xl">
  <iframe
    title="Mirissa Gate Resort Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6057791592826!2d80.4713269!3d5.938176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e3683f4823b%3A0x9cd8ea44a32f7cd4!2sMirissa%20Gate%20Resort!5e0!3m2!1sen!2slk!4v1704900000000"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-teal-400/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-widest uppercase opacity-60">
            © 2026 Mirissa Gate Resort Beach Hotel. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold text-[#b35483]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}