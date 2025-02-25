import { ArrowRight, Scale } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Find domain of your choosing</h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-semibold">Business Registration</h2>
              <div className="space-y-2">
                <p>GST, Licenses,</p>
                <p>Personal, Property</p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                alt="Business Meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Post your question and see it answered by legal professionals</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Post your question here"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">
              Post
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let the world know, you are open to work</h2>
          <p className="text-gray-600">Connect with your clients, colleagues and friends with Golicit</p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-12">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
            alt="Team Collaboration"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </section>
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
              <ul className="space-y-2">
                <li>support@golicit.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li>Business Registration</li>
                <li>Legal Consultation</li>
                <li>Document Review</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">INFORMATION</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-500">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Scale className="h-8 w-8" />
                <span className="ml-2 text-2xl font-bold">GOLICIT</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200">Instagram</a>
                <a href="#" className="hover:text-blue-200">Twitter</a>
                <a href="#" className="hover:text-blue-200">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}