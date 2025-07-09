'use client';
import Image from 'next/image';
import Navbar from './Navbar';

export default function HomePage() {
  return (
    <div className="w-full text-white">

      {/* ✅ Sticky Glass Navbar */}
      <Navbar />

      {/* ✅ Hero & Features Section with Background */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* 🌄 Background Image and Overlay */}
        <div className="absolute inset-0 -z-20 h-full w-full">
          <Image
            src="/background.png"
            alt="Leaf n' Peak Camping Gear Malaysia"
            fill
            priority
            quality={100}
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 z-0" />
        </div>

        {/* ✅ Main Content */}
        <main className="relative z-10 px-6 pt-28 pb-36 space-y-28">
          {/* 🌲 Hero Section */}
          <section className="text-center max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Camping Gear Rental in KL & Selangor — Leaf n' Peak
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Affordable, clean, and ready-to-go tents delivered to your doorstep in Kuala Lumpur, Selangor, or anywhere in Malaysia.
            </p>
            <div className="mt-8">
              <button className="glass-button">Explore Gear</button>
            </div>
          </section>

          {/* 🌟 Why Choose Us */}
          <section className="text-center max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Leaf n' Peak?</h2>
            <p className="text-lg text-white/90 mb-12">
              Trusted by outdoor lovers in KL and Selangor, our camping gear is top-quality, sanitized, and beginner-friendly. Whether it's a weekend in Janda Baik or a trip to Taman Negara — we’ve got the gear.
            </p>

            {/* 🌿 Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="rounded-xl p-6 bg-white/20 backdrop-blur-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">🎪 Easy Setup Tents</h3>
                <p className="text-white/80">Pitch your tent in under 5 minutes with our beginner-friendly kits.</p>
              </div>
              <div className="rounded-xl p-6 bg-white/20 backdrop-blur-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">🚚 Fast KL & Selangor Delivery</h3>
                <p className="text-white/80">We deliver camping sets right to your home or campsite — fast and reliable.</p>
              </div>
              <div className="rounded-xl p-6 bg-white/20 backdrop-blur-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">🛠️ All-In-One Packages</h3>
                <p className="text-white/80">Tents, groundsheets, chairs, tables — everything you need in one kit.</p>
              </div>
            </div>
          </section>

          {/* 🎯 CTA */}
          <section className="text-center max-w-3xl mx-auto pt-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rent Camping Gear in Malaysia Today</h2>
            <p className="text-lg text-white/90 mb-6">
              Book online now and start your outdoor adventure with the best camping rentals in KL and beyond.
            </p>
            <button className="glass-button">Book Now</button>
          </section>
        </main>
      </div>

      {/* ✅ Testimonials Section — OUTSIDE background image */}
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Campers in Malaysia Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                “We camped at Janda Baik and the tent setup was super simple. Amazing service!”
              </p>
              <div className="font-semibold">Aiman R.</div>
              <div className="text-sm text-gray-500">Kuala Lumpur</div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                “Affordable gear and really friendly support. Definitely renting again.”
              </p>
              <div className="font-semibold">Nadia M.</div>
              <div className="text-sm text-gray-500">Petaling Jaya</div>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                “The full kit made camping in Taman Negara stress-free. Great quality too.”
              </p>
              <div className="font-semibold">Jason L.</div>
              <div className="text-sm text-gray-500">Shah Alam</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="bg-[#1B2F33] text-white py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-xl font-semibold mb-3">Leaf n' Peak</h3>
            <p className="text-white/70">
              Premium camping gear rental in KL, Selangor & across Malaysia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[var(--brand-sand)]">Home</a></li>
              <li><a href="/rentals" className="hover:text-[var(--brand-sand)]">Rentals</a></li>
              <li><a href="/contact" className="hover:text-[var(--brand-sand)]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <p className="text-white/70">WhatsApp: +60-123-456789</p>
            <p className="text-white/70">Email: hello@leafnpeak.my</p>
          </div>
        </div>

        <div className="mt-10 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} Leaf n' Peak. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
