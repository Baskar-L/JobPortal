// src/components/common/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-600">
        Job Portal
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="text-black hover:text-green-600">Login</Link>
        <Link to="/register" className="text-black hover:text-green-600">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
