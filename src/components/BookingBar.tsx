export default function BookingBar() {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 mx-auto max-w-5xl -mt-20 relative z-20">
        <div className="grid grid-cols-4 gap-4">
          <input type="date" className="border p-3 rounded" />
          <input type="date" className="border p-3 rounded" />
          <select className="border p-3 rounded">
            <option>Guests</option>
          </select>
          <button className="bg-pink-600 text-white rounded font-semibold">
            Book Now
          </button>
        </div>
      </div>
    );
  }
  