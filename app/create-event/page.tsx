"use client";
import { useState } from "react";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    footfall: "",
    rating: "",
    image: "",
  });


  const categories = [
    "Technology",
    "Education",
    "Food & Beverage",
    "Fashion",
    "Health",
    "Arts",
    "Sports",
    "Business",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Info Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Create New Event
              </div>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                List Your Event &
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Connect with Brands
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Showcase your event to thousands of D2C brands looking for the
                perfect venue to connect with their audience.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="flex items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-blue-100 rounded-xl p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Instant Visibility
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get discovered by brands actively searching for events
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-green-100 rounded-xl p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Verified Bookings
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Secure and reliable booking process
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full -mr-20 -mt-20 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full -ml-16 -mb-16 opacity-50"></div>
                <div className="relative">
                  <svg
                    className="w-full h-48"
                    viewBox="0 0 400 200"
                    fill="none"
                  >
                    <rect
                      x="50"
                      y="80"
                      width="80"
                      height="100"
                      rx="8"
                      fill="#3B82F6"
                      opacity="0.2"
                    />
                    <rect
                      x="150"
                      y="50"
                      width="80"
                      height="130"
                      rx="8"
                      fill="#8B5CF6"
                      opacity="0.3"
                    />
                    <rect
                      x="250"
                      y="70"
                      width="80"
                      height="110"
                      rx="8"
                      fill="#06B6D4"
                      opacity="0.2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 lg:p-10 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Event Details
              </h2>
              <p className="text-gray-600">
                Fill in the information to list your event
              </p>
            </div>

            <div className="space-y-6">
              {/* Event Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Tech Fest Mumbai 2025"
                  value={formData.name}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Location Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Mumbai, Maharashtra"
                    value={formData.location}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Footfall *
                  </label>
                  <input
                    type="number"
                    name="footfall"
                    placeholder="e.g., 15000"
                    value={formData.footfall}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range (₹) *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    value={formData.minPrice}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max Price"
                    value={formData.maxPrice}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Footfall */}

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center"
              >
                Create Event Listing
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

    
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
