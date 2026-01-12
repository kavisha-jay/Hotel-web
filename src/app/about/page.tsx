import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  MapPin,
  Utensils,
  Waves,
  Train,
  Plane,
  Wifi,
  Car,
  Coffee,
  Bed,
  Ban,
  Clock,
  CreditCard,
  Dumbbell,
  Music,
  Bike,
  Fish,
} from 'lucide-react'
import Link from 'next/link';
import { LucideIcon } from 'lucide-react'

export default function AboutPage() {

  const facilities: { label: string; Icon: LucideIcon }[] = [
    { label: 'Restaurant', Icon: Utensils },
    { label: 'Bar', Icon: Coffee },
    { label: 'Breakfast', Icon: Coffee },
    { label: 'Indoor rooftop pool', Icon: Waves },
    { label: 'Free WiFi', Icon: Wifi },
    { label: 'Free private parking', Icon: Car },
  ]
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#2c8a8c] to-[#1f6667] text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            Mirissa Gate Resort
          </h1>
          <p className="text-xl opacity-90">
            Beachfront comfort with rooftop infinity pool
          </p>
        </div>
      </section>

      <div className="bg-[#f1f1f1]">

        {/* Surroundings */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2c8a8c] text-center mb-12">
              Hotel Surroundings
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard icon={MapPin} title="Attractions">
                <Item label="Kushtarajagala" value="8 km" />
                <Item label="Matara Fort" value="9 km" />
              </InfoCard>

              <InfoCard icon={Utensils} title="Restaurants & Cafes">
                <Item label="Restaurant 101" value="100 m" />
                <Item label="Turtle Bay Beach Restaurant" value="400 m" />
                <Item label="Maggies Rotti Shop" value="650 m" />
              </InfoCard>

              <InfoCard icon={Waves} title="Beaches">
                <Item label="Thalaramba Beach" value="350 m" />
                <Item label="Mirissa Beach" value="550 m" />
                <Item label="Weligama Beach" value="4.3 km" />
              </InfoCard>

              <InfoCard icon={Plane} title="Transport">
                <Item label="Mirissa Train Station" value="3.9 km" />
                <Item label="Koggala Airport" value="21 km" />
                <Item label="Mattala Airport" value="91 km" />
              </InfoCard>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2c8a8c] text-center mb-12">
              Facilities
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {facilities.map(({ label, Icon }, i) => (
                <div
                  key={i}
                  className="bg-[#f1f1f1] rounded-xl p-6 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#2c8a8c]" />
                  <p className="text-sm font-medium text-[#b35483]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2c8a8c] text-center mb-12">
              Activities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Activity icon={Bike} text="Bicycle rental" />
              <Activity icon={Music} text="Live music / performances" />
              <Activity icon={Fish} text="Snorkelling & Diving (off-site)" />
              <Activity icon={MapPin} text="Walking tours" />
              <Activity icon={Utensils} text="Cooking classes" />
              <Activity icon={Waves} text="Beach activities" />
            </div>
          </div>
        </section>

        {/* House Rules */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2c8a8c] text-center mb-12">
              House Rules
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <RuleCard icon={Clock} title="Check-in / Check-out">
                <p><strong>Check-in:</strong> 14:00 – 22:00</p>
                <p><strong>Check-out:</strong> 12:00 – 00:00</p>
              </RuleCard>

              <RuleCard icon={CreditCard} title="Payment">
                <p>Visa, Mastercard, JCB, UnionPay</p>
                <p>Cash accepted</p>
              </RuleCard>

              <RuleCard icon={Bed} title="Children & Beds">
                <p>Children of any age welcome</p>
                <p>Extra bed: US$10 per night</p>
                <p>Cot (0–2 years): Free</p>
              </RuleCard>

              <RuleCard icon={Ban} title="Pets">
                <p>Pets are not allowed</p>
              </RuleCard>
            </div>

            <div className="text-center mt-12">
              <Link
                href="https://www.booking.com/hotel/lk/mason-d-39-hotes.en-gb.html"
                target="_blank"
              >
                <button className="bg-[#2c8a8c] text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase hover:bg-[#1f6667] transition-all">
                  See Availability
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

/* Reusable components */
const InfoCard = ({ icon: Icon, title, children }: any) => (
  <div className="bg-white rounded-xl p-6 shadow">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-[#2c8a8c]" />
      <h3 className="text-xl font-semibold text-[#2c8a8c]">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-700">{children}</ul>
  </div>
)

const Item = ({ label, value }: any) => (
  <li className="flex justify-between">
    <span>{label}</span>
    <span className="text-[#b35483] font-medium">{value}</span>
  </li>
)

const Activity = ({ icon: Icon, text }: any) => (
  <div className="bg-white rounded-xl p-6 shadow flex items-center gap-4">
    <Icon className="text-[#2c8a8c]" />
    <span className="text-gray-700">{text}</span>
  </div>
)

const RuleCard = ({ icon: Icon, title, children }: any) => (
  <div className="bg-[#f1f1f1] rounded-xl p-6">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-[#2c8a8c]" />
      <h3 className="text-xl font-semibold text-[#2c8a8c]">{title}</h3>
    </div>
    <div className="space-y-2 text-gray-700">{children}</div>
  </div>
)
