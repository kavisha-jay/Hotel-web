'use client'

import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function Page() {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-white pt-15 ">
      {/* Hero Header - Matching the brand's elegant aesthetic */}
      <section className="relative h-[40vh] bg-[#2c8a8c] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=1600" 
            alt="Beach background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <p className="text-[#b35483] text-[10px] tracking-[0.5em] font-bold uppercase mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wider">Contact Us</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-[#2c8a8c] mb-6">Reach Out to Sanda Beach</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Whether you're planning a romantic getaway or a family retreat, our team is here to ensure your stay at Maison D'hotes is perfect. We typically respond to inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#2c8a8c]/10 flex items-center justify-center text-[#2c8a8c] group-hover:bg-[#b35483] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Call Us</h4>
                  <p className="text-lg text-[#2c8a8c]">+62 812-3841-6830</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#2c8a8c]/10 flex items-center justify-center text-[#2c8a8c] group-hover:bg-[#b35483] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Email Us</h4>
                  <p className="text-lg text-[#2c8a8c]">hello@sandabeachbali.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#2c8a8c]/10 flex items-center justify-center text-[#2c8a8c] group-hover:bg-[#b35483] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">Visit Us</h4>
                  <p className="text-lg text-[#2c8a8c]">Jl. Seririt-Singaraja, Kaliasem, Bali 81152</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex gap-6">
              <a href="#" className="p-3 bg-gray-50 rounded-full text-[#2c8a8c] hover:text-[#b35483] transition-colors"><Instagram /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full text-[#2c8a8c] hover:text-[#b35483] transition-colors"><Facebook /></a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(44,138,140,0.15)] border border-gray-50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#b35483] outline-none transition-colors placeholder:text-gray-300" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#b35483] outline-none transition-colors placeholder:text-gray-300" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <select className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#b35483] outline-none bg-transparent">
                  <option>Room Booking</option>
                  <option>Wellness & Spa Inquiry</option>
                  <option>Events & Group Rates</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea  className="w-full px-0 py-3 border-b border-gray-200 focus:border-[#b35483] outline-none transition-colors placeholder:text-gray-300 resize-none" placeholder="Tell us about your plans..."></textarea>
              </div>

              <button className="w-full py-4 bg-[#b35483] text-white rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#96426a] transition-all shadow-xl shadow-pink-100 flex items-center justify-center gap-3">
                Send Inquiry <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Full-width Map Section */}
      {/* <section className="h-[450px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/contrib/111000565967404436019/reviews"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section> */}
    </main>
    <Footer/>
    
    </>
  );
}