import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-between min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            Track, Manage, and Grow <br /> Your Startup
          </h1>
          <p className="text-gray-600 mb-6">
            StartupTrack provides all the tools you need to monitor your progress,
            manage KYC, and access grants.
          </p>
          <Link to="/signup">
            <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Get Started
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          {/* Placeholder for the illustration */}
          <img
            src="path/to/illustration.png"
            alt="Startup growth illustration"
            className="w-96"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
