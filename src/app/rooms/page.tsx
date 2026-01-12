import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RoomImageSlider from '../../components/RoomImageSlider'
import RoomDetails from '../../components/RoomDetails'
import { rooms } from '../../data/room'

export default function RoomsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f1f1f1] pt-24 pb-16">
      <div 
        className="max-w-4xl mx-auto text-center mb-16 space-y-4 mt-10"
      >
        <h2 className="text-3xl md:text-6xl font-extrabold text-[#2c8a8c] leading-[1.1] tracking-tight">
          Discover Our Exclusive Rooms
        </h2>
        <p className="text-gray-500 text-sm md:text-xl font-medium max-w-[280px] md:max-w-none mx-auto leading-relaxed">
          Comfortable, stylish, and designed for your perfect stay.
        </p>
      </div>
        <div className="max-w-7xl mx-auto px-6 space-y-24">


          {rooms.map((room) => (
            <div
              key={room.id}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >

              {/* LEFT */}
              <RoomImageSlider images={room.images} />

              {/* RIGHT */}
              <RoomDetails room={room} />

            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  )
}
