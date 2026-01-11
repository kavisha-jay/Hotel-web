export default function About() {
    return (
      <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-2 gap-12">
        <img src="/images/pool.jpg" className="rounded-xl" />
        <div>
          <h5 className="uppercase tracking-widest text-sm text-gray-500">
            Beachside Hotel Opened Since 1995
          </h5>
          <h2 className="text-4xl mt-4 font-light">
            Welcome to Lovina Beach Hotel
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Experience luxury, comfort, and breathtaking sea views with world-class hospitality.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded">
            Read More
          </button>
        </div>
      </section>
    );
  }
  