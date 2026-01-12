import Link from "next/link"

type Props = {
    room: any
  }
  
  export default function RoomDetails({ room }: Props) {
    return (
      <div className="space-y-6">
  
        {/* Title */}
        <div>
          <h1 className="text-3xl font-semibold text-[#2c8a8c]">
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
          <ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-black">
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
                <p className="font-medium text-black">
                  Max persons: {option.maxPersons}
                </p>
                <p className="text-sm text-gray-500">
                  LKR {option.price.toLocaleString()} + LKR {option.taxes.toLocaleString()} taxes
                </p>
                <p className="text-xs text-green-600">
                  {option.cancellation}
                </p>
              </div>
  
              {/* <button className="bg-[#2c8a8c] text-white px-4 py-2 rounded-lg text-sm">
                Select
              </button> */}
            </div>
          ))}
        </div>
  
        {/* Rules */}
        <p className="text-sm text-gray-500 flex items-center gap-2">
          🚫 No smoking
        </p>
  
        {/* CTA */}
        <Link href='https://www.booking.com/hotel/lk/mason-d-39-hotes.en-gb.html?aid=356938&label=metagha-link-MRLK-hotel-1699983_dev-desktop_los-1_bw-80_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-0_aud-0_gacid-21411118307_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260402_ppt-_lp-2144_r-292276354203781676&sid=6b687e80c593544d813a512fc038be60&all_sr_blocks=169998305_244238269_2_1_0&checkin=2026-04-02&checkout=2026-04-03&dest_id=1699983&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=169998305_244238269_2_1_0&hpos=1&matching_block_id=169998305_244238269_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=169998305_244238269_2_1_0__7000&srepoch=1768188007&srpvid=4adf90d9eab4045b3b32f3366ad5cb76&type=total&ucfs=1&'>
          <button className="bg-[#b35483] text-white px-8 py-3 rounded-full font-medium hover:opacity-90">
            Reserve now
          </button>
        </Link>
  
      </div>
    )
  }
  