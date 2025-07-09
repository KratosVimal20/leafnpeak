// app/rentals/page.tsx

const tents = [
  {
    id: 1,
    name: "2-Person Dome Tent",
    price: 100,
    slug: "2-person-dome-tent",
    image: "/tent1.jpg",
    description: "Compact and lightweight. Perfect for 1–2 people.",
  },
  {
    id: 2,
    name: "Family Tent (4–6 Pax)",
    price: 180,
    slug: "family-tent",
    image: "/tent2.jpg",
    description: "Spacious tent for families or groups with large windows and flysheet.",
  },
  {
    id: 3,
    name: "Luxury Glamping Tent",
    price: 250,
    slug: "luxury-glamping-tent",
    image: "/tent3.jpg",
    description: "Premium setup for glamping. High ceiling, comfort-focused design.",
  },
];

export default function RentalsPage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🏕️ Available Camping Tents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tents.map((tent) => (
          <div
            key={tent.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={tent.image}
              alt={tent.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{tent.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{tent.description}</p>
            <p className="text-green-600 font-bold text-lg">RM{tent.price}/day</p>
            <div className="mt-auto pt-4">
              <a
                href={`/rentals/${tent.slug}`}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
