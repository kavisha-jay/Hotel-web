type Props = {
    room: any
  }
  
  export default function RoomDetails({ room }: Props) {
    return (
      <div className="space-y-6">
  
        {/* Title */}
        <div>
          <h1 className="text-3xl font-semibold text-[#0b3558]">
            {room.name}
          </h1>
          <p className="text-gray-600 mt-1">
            {room.availability}
          </p>
        </div>
  
        {/* Pills */}
        <div className="flex flex-wrap gap-3">
          <span className="bg-[#f1c27b] text-sm px-4 py-1 rounded-full">
            {room.baseInfo.size}
          </span>
  
          <span className="bg-[#0b3558] text-white text-sm px-4 py-1 rounded-full">
            {room.baseInfo.bed}
          </span>
  
          <span className="bg-[#3ddc97] text-sm px-4 py-1 rounded-full">
            {room.baseInfo.views.join(', ')}
          </span>
        </div>
  
        {/* Description */}
        <div className="bg-white rounded-xl border-l-4 border-[#0b3558] p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            This room includes {room.baseInfo.features.join(', ')}.
          </p>
        </div>
  
        {/* Highlights */}
        <div>
          <h3 className="font-semibold text-[#0b3558] mb-3">
            Room Highlights
          </h3>
          <div className="flex flex-wrap gap-3 text-black">
            {room.baseInfo.features.map((item: string) => (
              <span
                key={item}
                className="border rounded-full px-4 py-1 text-sm"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
  
        {/* Amenities Accordion */}
        <details className="border rounded-lg p-4 bg">
          <summary className="cursor-pointer font-medium text-black">
            Room Facilities
          </summary>
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1 text-black">
            {room.amenities.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
  
        {/* Price Options */}
        <div className="space-y-3">
          {room.options.map((option: any, index: number) => (
            <div
              key={index}
              className="border rounded-xl p-4 bg-white flex justify-between items-center"
            >
              <div>
                <p className="font-medium">
                  Max persons: {option.maxPersons}
                </p>
                <p className="text-sm text-gray-500">
                  LKR {option.price.toLocaleString()} + LKR {option.taxes.toLocaleString()} taxes
                </p>
                <p className="text-xs text-green-600">
                  {option.cancellation}
                </p>
              </div>
  
              <button className="bg-[#2c8a8c] text-white px-4 py-2 rounded-lg text-sm">
                Select
              </button>
            </div>
          ))}
        </div>
  
        {/* Rules */}
        <p className="text-sm text-gray-500 flex items-center gap-2">
          🚫 No smoking
        </p>
  
        {/* CTA */}
        <button className="bg-[#b35483] text-white px-8 py-3 rounded-full font-medium hover:opacity-90">
          Reserve now
        </button>
  
      </div>
    )
  }
  