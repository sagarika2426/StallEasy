const Navbar = () => {
    return(
        <>
            <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-blue-600">Stall Easy</div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                        Log In
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </nav>

        </>
    )
}

export default Navbar