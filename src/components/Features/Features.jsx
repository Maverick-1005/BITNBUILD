import React from 'react';

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* KYC Management */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <img src="/path/to/kyc-icon.png" alt="KYC icon" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">KYC Management</h3>
          <p className="text-gray-600 text-center">
            Easily manage and update your company's KYC information.
          </p>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <img src="/path/to/progress-icon.png" alt="Progress tracking icon" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">Progress Tracking</h3>
          <p className="text-gray-600 text-center">
            Monitor your startup's growth with intuitive tracking tools.
          </p>
        </div>

        {/* Monthly Reports */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <img src="/path/to/report-icon.png" alt="Report icon" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">Monthly Reports</h3>
          <p className="text-gray-600 text-center">
            Generate and submit detailed monthly progress reports.
          </p>
        </div>

        {/* Grant Management */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <img src="/path/to/grant-icon.png" alt="Grant icon" className="w-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">Grant Management</h3>
          <p className="text-gray-600 text-center">
            Access and manage various grant schemes and applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
