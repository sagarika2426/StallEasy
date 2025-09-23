const HomePage = () => {
    return(
        <>
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Connect Your Brand with
                <span className="text-blue-600">Perfect Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover and book stalls at the best events for your D2C brand. From college fests to trade shows, find your perfect audience.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all">
                Sign In to Browse Events
            </button>
        </div>
    </section>
  
    </>
    )
}

export default HomePage;