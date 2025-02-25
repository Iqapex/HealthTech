import { Search as SearchIcon, MapPin } from 'lucide-react';

export default function Search() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter name"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Results</h2>
          <div className="space-y-4">
            {/* Placeholder results */}
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 rounded-full p-4">
                    <SearchIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Search Result {i}</h3>
                    <p className="text-gray-600">Sample description for search result {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}