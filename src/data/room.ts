import p13 from '../assests/p13.jpg'
import p14 from '../assests/p14.jpg'
import p15 from '../assests/p15.jpg'

const roomImages = [
  p13, // Room 1
  p14, // Room 2
  p15  // Room 3
];

export const rooms = [
  {
    id: 1,
    name: 'Superior Room with Balcony & Terrace (Partial Sea View)',
    availability: 'We have 2 left',

    baseInfo: {
      bed: '1 extra-large double bed',
      size: '30 m²',
      views: ['Partial Sea View'],
      features: [
        'Balcony',
        'Terrace',
        'Rooftop pool',
        'Air conditioning',
        'Ensuite bathroom',
        'Minibar',
        'Free WiFi',
      ],
    },

    amenities: [
      'Free toiletries',
      'Safety deposit box',
      'Toilet',
      'Bath or shower',
      'Towels',
      'Linen',
      'Desk',
      'Seating Area',
      'Mosquito net',
      'Telephone',
      'Ironing facilities',
      'Tea/Coffee maker',
      'Hairdryer',
      'Fan',
      'Extra long beds (> 2 metres)',
      'Wake up service / Alarm clock',
      'Electric kettle',
      'Outdoor furniture',
      'Outdoor dining area',
      'Wardrobe or closet',
      'Dining area',
      'Dining table',
      'Upper floors accessible by stairs only',
      'Clothes rack',
      'Drying rack for clothing',
      'Toilet paper',
    ],

    options: [
      {
        maxPersons: 2,
        price: 28380,
        taxes: 2838,
        breakfast: {
          included: false,
          price: 1546,
          type: 'Optional',
        },
        cancellation: 'Free cancellation before 30 January 2026',
        payment: 'No prepayment needed – pay at the property',
        note: 'Discount may be available',
      },
      {
        maxPersons: 2,
        price: 29604,
        taxes: 2960,
        breakfast: {
          included: true,
          type: 'Continental breakfast included',
        },
        cancellation: 'Free cancellation before 30 January 2026',
        payment: 'No prepayment needed – pay at the property',
        note: 'Discount may be available',
      },
    ],

    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    ],
  },

  {
    id: 2,
    name: 'Deluxe Double Room with Balcony and Sea View',
    availability: 'We have 5 left',

    baseInfo: {
      bed: '1 extra-large double bed',
      size: '30 m²',
      views: ['Sea View'],
      features: [
        'Balcony',
        'Rooftop pool',
        'Air conditioning',
        'Ensuite bathroom',
        'Minibar',
        'Free WiFi',
      ],
    },

    amenities: ['More amenities available'],

    options: [
      {
        maxPersons: 2,
        price: 29215,
        taxes: 2921,
        breakfast: {
          included: false,
          price: 1546,
          type: 'Optional',
        },
        cancellation: 'Free cancellation before 30 January 2026',
        payment: 'No prepayment needed – pay at the property',
        note: 'Discount may be available',
      },
      {
        maxPersons: 2,
        price: 31997,
        taxes: 3200,
        breakfast: {
          included: true,
          type: 'Continental breakfast included',
        },
        cancellation: 'Free cancellation before 30 January 2026',
        payment: 'No prepayment needed – pay at the property',
        note: 'Discount may be available',
      },
      {
        maxPersons: 1,
        price: 26293,
        taxes: 2629,
        breakfast: {
          included: false,
          price: 1546,
          type: 'Optional',
        },
        cancellation: 'Free cancellation before 30 January 2026',
        payment: 'No prepayment needed – pay at the property',
        note: 'Only for 1 guest',
      },
      {
        maxPersons: 1,
        price: 28797,
        taxes: 2880,
        breakfast: {
          included: true,
          type: 'Continental breakfast included',
        },
        cancellation: 'Free cancellation before 30 January 2026',
        payment: 'No prepayment needed – pay at the property',
        note: 'Only for 1 guest',
      },
    ],

    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    ],
  },
]
