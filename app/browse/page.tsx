"use client";
import { useMemo, useState } from "react";
import events from "../../Data/dummyData.json";

const EventListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const categories = [
    "All",
    "Technology",
    "Education",
    "Food & Beverage",
    "Fashion",
    "Health",
    "Arts",
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  interface Event {
    date: string;
    rating?: number;
    footfall: string | number;
    price: string | number;
  }

  const sortedEvents = useMemo(() => {
    // helper parsers
    const parseNumberFromString = (s: string | number): number =>
      parseInt(String(s).replace(/\D/g, ""), 10) || 0;

    const parsePriceMin = (priceStr: string | number): number => {
      // match first number (handles "₹25,000 - ₹45,000" or "25000 - 45000")
      const match = String(priceStr).match(/(\d[\d,]*)/);
      return match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
    };

    return [...filteredEvents].sort((a: Event, b: Event) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

      if (sortBy === "rating") {
        return (b.rating ?? 0) - (a.rating ?? 0);
      }

      if (sortBy === "footfall") {
        const fa = parseNumberFromString(a.footfall);
        const fb = parseNumberFromString(b.footfall);
        return fb - fa; // highest footfall first
      }

      if (sortBy === "price") {
        const pa = parsePriceMin(a.price);
        const pb = parsePriceMin(b.price);
        return pa - pb; // lowest price first
      }

      return 0;
    });
  }, [filteredEvents, sortBy]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Discover Events
          </h1>
          <p className="text-gray-600 text-lg">
            Find the perfect event for your D2C brand 🚀
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters and Sort */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Filter by Category
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="w-full md:w-auto">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/80"
              >
                <option value="date">Event Date</option>
                <option value="rating">Rating</option>
                <option value="footfall">Footfall</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredEvents.length}
              </span>{" "}
              events
            </p>
          </div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group animate-fadeIn"
            >
              {/* Event Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={event.image || "/fallback-image.jpg"} // fallback if event.image is empty
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/fallback-image.jpg"; // fallback if image fails to load
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full shadow">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900">
                      {event.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {event.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {event.name}
                </h3>

                <div className="space-y-3">
                  {/* Date */}
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">{event.location}</span>
                  </div>

                  {/* Footfall */}
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-green-600">
                      {event.footfall} Expected
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Price Range</p>
                      <p className="text-lg font-bold text-gray-900">
                        {event.price}
                      </p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 animate-fadeIn">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListingPage;
