import { User, Search } from 'lucide-react';

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-4">Pending Contacts</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-center py-4">--No new requests--</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Contacts</h2>
              
              <div className="space-y-4">
                {['Ajay Gupta', 'Hrithik Lawyer', 'Hrithik SecondLawyer', 'Samya Banerjee', 'Soumya Sen'].map((name, i) => (
                  <div 
                    key={i}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="bg-gray-200 rounded-full p-2">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-800">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}