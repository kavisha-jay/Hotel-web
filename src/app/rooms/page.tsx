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
