// 'use client'

// type RoomCardProps = {
//   title: string
//   beds: string
//   size: string
//   view: string
//   maxPersons: number
//   price: string
//   taxes: string
//   image: string
//   breakfast?: boolean
//   freeCancellation?: boolean
//   onlyForOne?: boolean
// }

// export default function RoomCard({
//   title,
//   beds,
//   size,
//   view,
//   maxPersons,
//   price,
//   taxes,
//   image,
//   breakfast = true,
//   freeCancellation = true,
//   onlyForOne = false,
// }: RoomCardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
//       <div className="grid md:grid-cols-[260px_1fr_220px] gap-6">

//         {/* Image */}
//         <div className="relative h-full">
//           <img
//             src={image}
//             alt={title}
//             className="h-full w-full object-cover"
//           />
//           <span className="absolute top-3 left-3 bg-[#b35483] text-white text-xs px-3 py-1 rounded-full">
//             We have 1 left
//           </span>
//         </div>

//         {/* Room Info */}
//         <div className="p-5">
//           <h3 className="text-xl font-semibold text-[#2c8a8c]">
//             {title}
//           </h3>

//           <p className="text-sm text-gray-600 mt-1">
//             {beds} • {size} m² • {view}
//           </p>

//           <p className="text-sm mt-2 text-gray-700">
//             Max persons: <strong>{maxPersons}</strong>
//           </p>

//           <ul className="mt-4 space-y-1 text-sm text-gray-700">
//             {breakfast && <li>✔ Good breakfast included</li>}
//             {freeCancellation && (
//               <li className="text-green-600">
//                 ✔ Free cancellation
//               </li>
//             )}
//             <li>No prepayment needed</li>
//             <li>No credit card needed</li>
//             {onlyForOne && (
//               <li className="text-red-600">
//                 Only for 1 guest
//               </li>
//             )}
//           </ul>
//         </div>

//         {/* Price & Select */}
//         <div className="p-5 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col justify-between">
//           <div>
//             <p className="text-lg font-semibold text-gray-900">
//               LKR {price}
//             </p>
//             <p className="text-sm text-gray-500">
//               +LKR {taxes} taxes & charges
//             </p>
//           </div>

//           <div className="mt-6" onClick={(e) => e.stopPropagation()}>
//             <label className="text-sm text-gray-600 block mb-1">
//               Select rooms
//             </label>
//             <select 
//               className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2c8a8c]"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {[0, 1, 2, 3, 4, 5].map((n) => (
//                 <option key={n}>{n}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }
