import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-purple-600 text-2xl font-bold">
          StartupTrack
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="/" className="text-purple-600 hover:text-purple-800">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-purple-600">
            About
          </a>
          <a href="/features" className="text-gray-600 hover:text-purple-600">
            Features
          </a>
          <a href="/contact" className="text-gray-600 hover:text-purple-600">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
