const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-green-900 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 text-white">
        <div className="flex gap-2 items-center">
          <img
            src="./src/assets/logo.svg"
            alt="logo"
            className="relative z-10 w-10 h-10 rounded-lg"
          />
          <h1 className="text-xl font-bold">JournAI</h1>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-6">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Features</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
          <button className="bg-green-500 px-4 py-2 rounded-lg text-white font-bold">
            Download
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center relative gap-80">
        <div className="text-white p-10">
          <h2 className="text-6xl font-bold">JournAI</h2>
          <p className="mt-4 text-lg opacity-75">
            Meditate on your thoughts & unlock clarity
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-lg">
            Start Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-100 h-100 bg-[#f8603f] rounded-full"></div>
          <img
            src="./src/assets/heroImage.svg"
            alt="Hero"
            className="relative z-10 w-64 h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
