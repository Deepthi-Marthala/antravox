export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-blue-700">ANTRAVOX</h1>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li className="cursor-pointer hover:text-blue-700">Home</li>
          <li className="cursor-pointer hover:text-blue-700">Services</li>
          <li className="cursor-pointer hover:text-blue-700">Products</li>
          <li className="cursor-pointer hover:text-blue-700">Careers</li>
          <li className="cursor-pointer hover:text-blue-700">Industries</li>
          <li className="cursor-pointer hover:text-blue-700">Contact</li>
        </ul>

        <div className="space-x-3">
          <button className="border px-4 py-1 rounded-full font-semibold hover:bg-blue-100">
            Login
          </button>
          <button className="bg-blue-700 text-white px-4 py-1 rounded-full font-semibold hover:bg-blue-800">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}