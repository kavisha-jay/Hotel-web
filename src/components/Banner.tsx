'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import p1 from '../assests/p1.jpg'
import p2 from '../assests/p2.jpg'
import p3 from '../assests/p3.jpg'

import p8 from '../assests/p8.jpg'
import p9 from '../assests/p9.jpg'
import p10 from '../assests/p10.jpg'
import p11 from '../assests/p11.jpg'
import p13 from '../assests/p13.jpg'
import p14 from '../assests/p14.jpg'
import p15 from '../assests/p15.jpg'
import Link from 'next/link'

const images = [p1, p2, p3]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  // Placeholder images for hotel rooms - replace with actual assets
  const roomImages = [
    p13, // Room 1
    p14, // Room 2
    p15  // Room 3
  ];

  const wellnessImages = [
    {
      url: p9,
      title: "Traditional Massage"
    },
    {
      url: p11,
      title: "Sunrise Yoga"
    },
    {
      url: p8,
      title: "Essential Oils"
    },
    {
      url: p10,
      title: "Meditation Space"
    }
  ];

  const activities = [
    {
      title: "Thalaramba Beach",
      category: "350m Away",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800",
      size: "col-span-1 row-span-2" // Tall card for the nearest beach
    },
    {
      title: "Mirissa Beach",
      category: "550m Away",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
      size: "col-span-1 row-span-1"
    },
    {
      title: "Lake Pond",
      category: "Natural Beauty",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
      size: "col-span-1 row-span-1"
    },
    {
      title: "Kamburugamuwa Beach",
      category: "1.9km Coastline",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      size: "col-span-2 row-span-1" // Wide card for scenic views
    },
    {
      title: "Weligama Bay",
      category: "Surfing & Views",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800",
      size: "col-span-1 row-span-1"
    }
  ];

  const reviews = [
    {
      name: "Matthew Moorhouse",
      role: "Local Guide",
      rating: 5,
      text: "Lovely Hotel! Very spacious, very clean & lovely lady that runs the place. We stayed here for 4 nights - it was perfect, very close to the beach and right next door to the spa! Really great breakfast cooked fresh.",
      date: "2 weeks ago"
    },
    {
      name: "Laura González",
      role: "Local Guide",
      rating: 5,
      text: "This is the best place to stay in the area for sure, don't doubt it and book this accommodation. The rooms are perfectly clean and comfortable, the views and location are wonderful.",
      date: "3 weeks ago"
    },
    {
      name: "Mika Borgmeyer",
      role: "Local Guide",
      rating: 5,
      text: "Amazing people, big room, nice view of the sea. They clean your room every day. We wanted to use our laptop here so they even put a strong router for us (for free!). Would recommend it to anyone!",
      date: "a month ago"
    },
    {
      name: "Ishana Khan",
      role: "Local Guide",
      rating: 5,
      text: "One of the best places we have stayed. The staff were very nice, especially during the yoga sessions. They were extremely friendly, making our stay comfortable and guiding us about many things.",
      date: "1 week ago"
    }
  ];

  // We double the array to create a seamless infinite loop
  const loopReviews = [...reviews, ...reviews];

  // Auto-rotate images every 4 seconds for the "pop" transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % roomImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roomImages.length]);

  // Refs for scroll animations
  const welcomeRef = useRef(null);
  const featuredRef = useRef(null);
  const roomsRef = useRef(null);
  const wellnessRef = useRef(null);
  const activitiesRef = useRef(null);
  const reviewsRef = useRef(null);

  const welcomeInView = useInView(welcomeRef, { once: true, amount: 0.3 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const roomsInView = useInView(roomsRef, { once: true, amount: 0.3 });
  const wellnessInView = useInView(wellnessRef, { once: true, amount: 0.3 });
  const activitiesInView = useInView(activitiesRef, { once: true, amount: 0.3 });
  const reviewsInView = useInView(reviewsRef, { once: true, amount: 0.3 });

  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Mirissa Gate Resort"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-font text-5xl md:text-7xl tracking-wide"
          >
            ENJOY <br /> YOUR STAY
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 uppercase tracking-[0.3em] text-sm opacity-90"
          >
            With Beachside View of Mirissa Gate Resort
          </motion.p>
        </div>
      </section>

      <div className="bg-[#fdfdfd] min-h-screen font-sans text-gray-800">
        
        {/* SECTION 1: Welcome / About */}
        <section ref={welcomeRef} className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Overlapping Images */}
          <motion.div 
            initial="hidden"
            animate={welcomeInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            className="relative h-[500px] w-full"
          >
            {/* Back Image (Pathway) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.2 }
                }
              }}
              className="absolute top-0 left-0 w-2/3 h-4/5 shadow-2xl overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" 
                alt="Pathway" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Front Image (Beach Seating) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 }
                }
              }}
              className="absolute bottom-0 right-0 w-2/3 h-3/5 shadow-2xl border-8 border-white overflow-hidden rounded-sm z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" 
                alt="Beach View" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate={welcomeInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
              }
            }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <div className="w-12 h-0.5 bg-[#b35483]"></div>
              <p className="text-[12px] tracking-[0.3em] uppercase font-medium text-gray-500">
                Beachside Hotel Opened Since 1953
              </p>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-5xl font-serif text-[#2c2c2c] leading-tight">
              Welcome to <br /> Mirissa Gate Resort
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed text-sm max-w-md">
            Waking up to the rhythmic song of the Indian Ocean, our hotel offers a front-row seat to nature’s most breathtaking theater. Each room is designed with expansive, floor-to-ceiling glass doors that lead to private terraces, ensuring that the turquoise waters and golden sands are the first thing you see every morning.
            </motion.p>
            <Link href="/about">
              <motion.button 
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b35483] text-white px-10 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#96426a] transition-colors shadow-lg shadow-pink-200"
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* SECTION 2: Featured Overlay Section */}
        <section ref={featuredRef} className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
          {/* Blurred Background Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={featuredInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" 
              alt="Blurred Resort" 
              className="w-full h-full object-cover blur-[2px] brightness-75"
            />
          </motion.div>

          {/* The Teal Card */}
          <motion.div 
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={scaleFade}
            className="relative z-10 bg-[#2c8a8c]/95 text-white p-10 md:p-14 max-w-2xl text-center shadow-2xl backdrop-blur-sm"
          >
            {/* Decorative Flower */}
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              animate={featuredInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 -right-6 text-yellow-400 drop-shadow-lg"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2L13.5,8.5L20,10L13.5,11.5L12,18L10.5,11.5L4,10L10.5,8.5L12,2Z" />
              </svg>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate={featuredInView ? "visible" : "hidden"}
              variants={stagger}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <motion.svg 
                variants={fadeUp}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="w-10 h-10"
              >
                <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z" />
                <path d="M4 18c2-2 4-2 6 0s4 2 6 0 2-2 2-2" strokeLinecap="round" />
              </motion.svg>
              <motion.h3 variants={fadeUp} className="text-2xl font-serif tracking-widest uppercase">Mirissa</motion.h3>
              <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] uppercase opacity-80">Gate Resort</motion.p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs leading-relaxed opacity-90 font-light"
            >
            Panoramic Vistas: Uninterrupted views of the coastline from every vantage point.

Seamless Indoor-Outdoor Living: Large balconies that act as an extension of your living space.

Nature's Soundtrack: The soothing sound of waves providing a natural white-noise for relaxation.
            </motion.p>
          </motion.div>
        </section>

      </div>

      {/* SECTION 3: Rooms Section */}
      <section ref={roomsRef} className="bg-[#fdfdfd] py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
        {/* Optional subtle background element */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={roomsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-64 h-64 bg-[#2c8a8c]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ></motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            animate={roomsInView ? "visible" : "hidden"}
            variants={fadeLeft}
            className="space-y-8 relative z-10"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-[#2c2c2c] leading-tight">
              Rest in Comfort, <br />
              Wake Up to the Sea
              <motion.span 
                initial={{ rotate: -30, opacity: 0 }}
                animate={roomsInView ? { rotate: 0, opacity: 1 } : { rotate: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block ml-4 text-[#2c8a8c]"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 16C3.5 14 6 14 7.5 16C9 18 11.5 18 13 16C14.5 14 17 14 18.5 16C20 18 21 17 22 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 11C3.5 9 6 9 7.5 11C9 13 11.5 13 13 11C14.5 9 17 9 18.5 11C20 13 21 12 22 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                </svg>
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={activeIndex !== undefined ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 font-light leading-relaxed max-w-md text-base mt-3"
            >
              Our rooms are designed to blend comfort, privacy, and breathtaking ocean views. 
              Experience the ultimate relaxation in our carefully curated spaces.
            </motion.p>
            
            {/* Button */}
            <Link href='/rooms'>
              <motion.button 
                variants={fadeUp}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#b35483] text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-[#96426a] transition-all shadow-lg shadow-pink-200/50 flex items-center gap-3"
              >
                Explore Our Rooms
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column: 3-Image Pop Transition Stack */}
          <motion.div 
            initial="hidden"
            animate={roomsInView ? "visible" : "hidden"}
            variants={fadeRight}
            className="relative h-[450px] w-full flex items-center justify-center perspective-1000"
          >
            {roomImages.map((img, index) => {
              let positionClass = '';
              if (index === activeIndex) {
                  positionClass = 'z-30 opacity-100 scale-100 translate-x-0 translate-y-0 shadow-2xl shadow-gray-300/50';
              } 
              else if (index === (activeIndex + 1) % roomImages.length) {
                  positionClass = 'z-20 opacity-60 scale-95 translate-x-8 translate-y-8 shadow-xl shadow-gray-300/30';
              } 
              else {
                  positionClass = 'z-10 opacity-30 scale-90 translate-x-16 translate-y-16 shadow-lg shadow-gray-300/20';
              }

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={roomsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`absolute w-4/5 h-4/5 rounded-3xl overflow-hidden border-4 border-white transition-all duration-700 ease-in-out will-change-transform ${positionClass}`}
                >
                  <Image
                    src={img} 
                    alt={`Room view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Wellness Section */}
      {/* SECTION 4: Rooftop Pool & Experiences */}
<section ref={wellnessRef} className="bg-[#fcfaf7] py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Header */}
    <motion.div
      initial="hidden"
      animate={wellnessInView ? "visible" : "hidden"}
      variants={fadeUp}
      className="mb-12"
    >
      <p className="text-[#c5a35d] text-[10px] tracking-[0.4em] font-bold uppercase mb-2">
        Leisure & Experiences
      </p>
      <h2 className="text-4xl font-serif text-[#2c8a8c] tracking-tight">
        Rooftop Pool & Coastal Adventures
      </h2>
    </motion.div>

    {/* Image Gallery */}
    <div className="relative w-full h-full">
      <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
        {wellnessImages.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 50 }}
      animate={wellnessInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="
        relative
        min-w-[280px] md:min-w-[320px]
        aspect-[4/3]
        rounded-2xl
        overflow-hidden
        shadow-lg
        snap-center
      "
    >
      <Image
        src={item.url}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 320px"
      />
    </motion.div>
  ))}
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ width: 0 }}
        animate={wellnessInView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex items-center justify-center gap-4 mt-2"
      >
        <span className="text-gray-400 text-xs">◀</span>
        <div className="w-full max-w-xl h-[3px] bg-gray-200 rounded-full relative">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-xs">▶</span>
      </motion.div>
    </div>

    {/* Description */}
    <motion.div
      initial="hidden"
      animate={wellnessInView ? "visible" : "hidden"}
      variants={fadeUp}
      className="mt-12 max-w-3xl mx-auto"
    >
      <p className="text-gray-600 text-sm leading-relaxed font-light">
        Enjoy breathtaking ocean views from our rooftop infinity pool, unwind on sun loungers,
        or explore the coastal lifestyle with curated activities. From peaceful poolside mornings
        to vibrant evenings with live music, every moment is designed for relaxed seaside living.
      </p>
    </motion.div>

    {/* Feature Highlights */}
    <motion.div
      initial="hidden"
      animate={wellnessInView ? "visible" : "hidden"}
      variants={stagger}
      className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10"
    >

      {/* Rooftop Pool */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <div className="text-[#b35483]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 18c1.5 1 4.5 1 6 0s4.5-1 6 0 4.5 1 6 0" />
            <path d="M2 14c1.5 1 4.5 1 6 0s4.5-1 6 0 4.5 1 6 0" />
          </svg>
        </div>
        <span className="text-[#2c8a8c] font-medium text-sm tracking-wide">
          Rooftop Infinity Pool
        </span>
      </motion.div>

      {/* Sun Loungers */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <div className="text-[#b35483]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 18h18" />
            <path d="M7 18V8l10 6v4" />
          </svg>
        </div>
        <span className="text-[#2c8a8c] font-medium text-sm tracking-wide">
          Sun Loungers & Poolside Relaxation
        </span>
      </motion.div>

      {/* Activities */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <div className="text-[#b35483]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8c.36.63.49 1.36.33 2.09" />
          </svg>
        </div>
        <span className="text-[#2c8a8c] font-medium text-sm tracking-wide">
          Coastal Activities & Live Music
        </span>
      </motion.div>

    </motion.div>
  </div>
</section>


      {/* SECTION 5: Activities Section */}
      <section ref={activitiesRef} className="bg-[#fdfdfd] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            initial="hidden"
            animate={activitiesInView ? "visible" : "hidden"}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-xl">
              <motion.div variants={fadeLeft} className="flex items-center gap-3 mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={activitiesInView ? { width: 40 } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[1px] bg-[#b35483]"
                ></motion.div>
                <span className="text-[#b35483] text-[10px] tracking-[0.4em] font-bold uppercase">
                  Discover Lovina
                </span>
              </motion.div>
              <motion.h2 variants={fadeLeft} className="text-4xl md:text-5xl font-serif text-[#2c8a8c] leading-tight">
                Experiences Beyond <br /> the Shoreline
              </motion.h2>
            </div>
            <motion.p variants={fadeRight} className="text-gray-500 text-sm max-w-xs leading-relaxed font-light italic">
              "The magic of Sanda Beach isn't just in the stay, but in the memories made exploring our island home."
            </motion.p>
          </motion.div>

          {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-6">
          {activities.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              // Removed item.size to ensure consistent mobile stacking
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/5] w-full"
            >
              {/* Image with Zoom effect */}
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay - Slightly darker at bottom to match image_6b4742.jpg */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                {/* Category Label - Styled to match pink text in screenshot */}
                <span className="text-[#e879f9] text-[10px] tracking-[0.3em] font-bold uppercase mb-2 block opacity-90">
                  {item.category}
                </span>
                
                {/* Title - Serif font as seen in screenshot */}
                <h3 className="text-white text-2xl md:text-3xl font-serif tracking-wide leading-tight">
                  {item.title}
                </h3>
                
                {/* Interaction indicator (Optional - matches the 'View Details' logic) */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-white/80 text-[10px] tracking-widest uppercase font-semibold"
                >
                  Explore 
                  <span className="w-8 h-[1px] bg-white/50"></span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

          {/* Call to Action Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={activitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex justify-center"
          >
          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-[#2c8a8c] text-white rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#1f6667] transition-all shadow-xl shadow-teal-100 flex items-center gap-4"
            >
              Browse All Activities
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
          </motion.div>
          
        </div>
      </section>

      {/* SECTION 6: Reviews Section */}
      <section ref={reviewsRef} className="bg-[#faf9f6] py-24 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate={reviewsInView ? "visible" : "hidden"}
        //   variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#2c8a8c] tracking-tight">
            Guest Reviews
          </h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={reviewsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex overflow-x-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap py-12">
            {loopReviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={reviewsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % reviews.length) * 0.1 }}
                className="mx-6 w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(44,138,140,0.15)] border border-gray-50 flex flex-col gap-4 whitespace-normal"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#2c8a8c] mb-1">{review.name}</h3>
                  <p className="text-[#b35483] text-[10px] tracking-widest uppercase font-bold">
                    {review.role}
                  </p>
                </div>

                {/* Star Rating */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={reviewsInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: (index % reviews.length) * 0.1 + 0.2 }}
                  className="flex gap-1 text-yellow-400 origin-left"
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </motion.div>

                <p className="text-gray-600 text-sm leading-relaxed font-light italic">
                  "{review.text}"
                </p>

                <p className="text-gray-400 text-[11px] mt-auto">
                  {review.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animation styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </section>

    </div>
    
  )
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8},
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8},
  },
}

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}