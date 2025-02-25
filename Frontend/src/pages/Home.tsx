import { useState } from 'react';
import { Star, User } from 'lucide-react';

interface Profile {
  name: string;
  rating: number;
  cases: number;
  years: number;
  about: string;
}

export default function Home() {
  const [profiles] = useState<Profile[]>([
    {
      name: "Hrithik Lawyer",
      rating: 4.5,
      cases: 7,
      years: 5,
      about: "Motivated designer and developer with experience creating custom websites through PHP and CSS. Strong collaboration skill"
    },
    {
      name: "Hrithik SecondLawyer",
      rating: 5.0,
      cases: 17,
      years: 30,
      about: "Just became a Lawyer!"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Top Profiles</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-200 rounded-full p-4">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{profile.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">{profile.cases}</div>
                  <div className="text-sm text-gray-600">Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">{profile.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">{profile.years}</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{profile.about}</p>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}