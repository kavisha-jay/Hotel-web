import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Utensils, Waves, Train, Plane, Wifi, Car, UtensilsCrossed, Coffee, Bed, Ban, Clock, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2c8a8c] to-[#1f6667] text-white py-20 mt-15">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-4">
            Maison D'hotes Sanda Beach
          </h1>
          <p className="text-xl font-light opacity-90">
            Your Perfect Beachside Getaway
          </p>
        </div>
      </section>

      <div className="bg-[#f1f1f1] min-h-screen">
        {/* Hotel Surroundings */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-[#2c8a8c] mb-4">Hotel Surroundings</h2>
              <p className="text-gray-600">Discover what's around our beautiful location</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Top Attractions */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-xl font-semibold text-[#2c8a8c]">Top Attractions</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Kushtarajagala</span>
                    <span className="text-[#b35483] font-medium">8 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Matara Fort</span>
                    <span className="text-[#b35483] font-medium">9 km</span>
                  </li>
                </ul>
              </div>

              {/* Restaurants & Cafes */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Utensils className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-xl font-semibold text-[#2c8a8c]">Restaurants & Cafes</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Restaurant 101</span>
                    <span className="text-[#b35483] font-medium">100 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Turtle Bay Beach Restaurant</span>
                    <span className="text-[#b35483] font-medium">400 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Maggies Rotti Shop</span>
                    <span className="text-[#b35483] font-medium">650 m</span>
                  </li>
                </ul>
              </div>

              {/* Beaches */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-xl font-semibold text-[#2c8a8c]">Beaches</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Thalaramba Beach</span>
                    <span className="text-[#b35483] font-medium">350 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mirissa Beach</span>
                    <span className="text-[#b35483] font-medium">550 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Kamburugamuwa Beach</span>
                    <span className="text-[#b35483] font-medium">1.9 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weligambay Beach</span>
                    <span className="text-[#b35483] font-medium">2.8 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weligama Beach</span>
                    <span className="text-[#b35483] font-medium">4.3 km</span>
                  </li>
                </ul>
              </div>

              {/* Natural Beauty & Transport */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-xl font-semibold text-[#2c8a8c]">More Info</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Natural Beauty</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Lake/Pond</span>
                        <span className="text-[#b35483] font-medium">3.9 km</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Public Transport</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Mirissa Train</span>
                        <span className="text-[#b35483] font-medium">3.9 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Polwathumodara Train</span>
                        <span className="text-[#b35483] font-medium">3.8 km</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Airports</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Koggala Airport</span>
                        <span className="text-[#b35483] font-medium">21 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Mattala Airport</span>
                        <span className="text-[#b35483] font-medium">91 km</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
            <Link href='https://www.booking.com/hotel/lk/mason-d-39-hotes.en-gb.html?aid=356938&label=metagha-link-MRLK-hotel-1699983_dev-desktop_los-1_bw-80_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-21411118307_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260402_ppt-_lp-2144_r-292276354203781676&sid=6b687e80c593544d813a512fc038be60&all_sr_blocks=169998305_244238269_2_1_0&checkin=2026-04-02&checkout=2026-04-03&dest_id=1699983&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=169998305_244238269_2_1_0&hpos=1&matching_block_id=169998305_244238269_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=169998305_244238269_2_1_0__7000&srepoch=1768188007&srpvid=4adf90d9eab4045b3b32f3366ad5cb76&type=total&ucfs=1&'>
              <button className="bg-[#2c8a8c] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#1f6667] transition-all shadow-lg cursor-pointer">
                See Availability
              </button>
            </Link>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-[#2c8a8c] mb-4">Facilities</h2>
              <p className="text-gray-600 mb-2">Great facilities! Review score: <span className="text-[#b35483] font-bold text-lg">8.1</span></p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Plane, name: 'Airport shuttle' },
                { icon: Ban, name: 'Non-smoking rooms' },
                { icon: Wifi, name: 'Free WiFi' },
                { icon: Coffee, name: 'Spa and wellness centre' },
                { icon: Car, name: 'Free parking' },
                { icon: Bed, name: 'Family rooms' },
                { icon: UtensilsCrossed, name: 'Restaurant' },
                { icon: Utensils, name: 'Room service' },
                { icon: Coffee, name: 'Breakfast' },
              ].map((facility, index) => (
                <div key={index} className="bg-[#f1f1f1] rounded-xl p-6 text-center hover:text-white transition-all group">
                  <facility.icon className="w-8 h-8 mx-auto mb-3 text-[#2c8a8c]  transition-colors" />
                  <p className="text-sm font-medium text-[#b35483]">{facility.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
            <Link href='https://www.booking.com/hotel/lk/mason-d-39-hotes.en-gb.html?aid=356938&label=metagha-link-MRLK-hotel-1699983_dev-desktop_los-1_bw-80_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-21411118307_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260402_ppt-_lp-2144_r-292276354203781676&sid=6b687e80c593544d813a512fc038be60&all_sr_blocks=169998305_244238269_2_1_0&checkin=2026-04-02&checkout=2026-04-03&dest_id=1699983&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=169998305_244238269_2_1_0&hpos=1&matching_block_id=169998305_244238269_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=169998305_244238269_2_1_0__7000&srepoch=1768188007&srpvid=4adf90d9eab4045b3b32f3366ad5cb76&type=total&ucfs=1&'>
              <button className="bg-[#2c8a8c] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#1f6667] transition-all shadow-lg cursor-pointer">
                See Availability
              </button>
            </Link>  
            </div>
          </div>
        </section>

        {/* House Rules */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-[#2c8a8c] mb-4">House Rules</h2>
              <p className="text-gray-600">Important information for your stay</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Check-in/Check-out */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-[#2c8a8c]">Check-in & Check-out</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Check-in</p>
                    <p className="text-gray-600">From 14:00</p>
                    <p className="text-sm text-gray-500 mt-1">You'll need to let the property know in advance what time you'll arrive.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Check-out</p>
                    <p className="text-gray-600">Until 12:00</p>
                  </div>
                </div>
              </div>

              {/* Cancellation */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-[#2c8a8c]">Cancellation & Payment</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Cancellation Policy</p>
                    <p className="text-gray-600 text-sm">Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Payment</p>
                    <p className="text-gray-600">Cash only</p>
                    <p className="text-sm text-gray-500 mt-1">This property only accepts cash payments.</p>
                  </div>
                </div>
              </div>

              {/* Children & Beds */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Bed className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-[#2c8a8c]">Children & Beds</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Child Policies</p>
                    <p className="text-gray-600">Children are not allowed.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Extra Beds</p>
                    <p className="text-gray-600 text-sm">Adult (18+ years): Extra bed upon request</p>
                    <p className="text-gray-600 text-sm mt-1">US$20 per person, per night</p>
                    <p className="text-xs text-gray-500 mt-2">Prices for extra beds are not included in the total price, and will have to be paid for separately during your stay. The number of extra beds allowed is dependent on the option you choose. All extra beds are subject to availability.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Age Requirement</p>
                    <p className="text-gray-600">No age restriction - There is no age requirement for check-in</p>
                  </div>
                </div>
              </div>

              {/* Pets */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Ban className="text-[#2c8a8c] w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-[#2c8a8c]">Pets</h3>
                </div>
                <p className="text-gray-600">Pets are not allowed.</p>
              </div>
            </div>

            <div className="mt-8 bg-[#2c8a8c]/10 rounded-xl p-6 text-center">
              <p className="text-gray-700 font-medium">
                Maison D'hotes Sanda Beach takes special requests - add in the next step!
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href='https://www.booking.com/hotel/lk/mason-d-39-hotes.en-gb.html?aid=356938&label=metagha-link-MRLK-hotel-1699983_dev-desktop_los-1_bw-80_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-21411118307_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260402_ppt-_lp-2144_r-292276354203781676&sid=6b687e80c593544d813a512fc038be60&all_sr_blocks=169998305_244238269_2_1_0&checkin=2026-04-02&checkout=2026-04-03&dest_id=1699983&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=169998305_244238269_2_1_0&hpos=1&matching_block_id=169998305_244238269_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=169998305_244238269_2_1_0__7000&srepoch=1768188007&srpvid=4adf90d9eab4045b3b32f3366ad5cb76&type=total&ucfs=1&'>
                <button className="bg-[#2c8a8c] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#1f6667] transition-all shadow-lg cursor-pointer">
                  See Availability
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}