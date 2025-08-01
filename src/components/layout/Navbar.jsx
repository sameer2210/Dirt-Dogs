import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import logo from "../../assets/logo.png";              

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: true, // For demo
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Quotes", path: "/quotes" },
    { name: "Financing", path: "/financing" },
    { name: "Giving Back", path: "/giving-back" },
  ];

  return (
    <header className="border-b bg-white">
      {/* Top Contact Row */}
      <div className="flex items-center justify-around p-2 text-sm text-gray-700 flex-wrap">
        <img src={logo} alt="Logo" className="h-30 object-contain" />
        <div className="hidden  md:block text-right space-y-1">
          <div className="flex justify-between gap-6">
            <p><strong>📞 Phone:</strong> (303) 435-4774</p>
          <p><strong>📠 Fax:</strong> (303) 646-5438</p>
          <p><strong>📧 E-mail us:</strong> garr@dirtdogsexcavating.com</p>
          </div>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:justify-center md:gap-6 text-sm font-semibold text-red-700 p-2`}
      >
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="relative group">
              <button className="hover:underline focus:outline-none">
                {link.name} ▾
              </button>
              {/* Dropdown Placeholder */}
              <div className="absolute left-0 hidden group-hover:block bg-white border shadow-md mt-1 z-10">
                <ul className="py-2 px-4 space-y-2">
                  <li><NavLink to="/services/site-grading">Site Grading</NavLink></li>
                  <li><NavLink to="/services/demo">Demolition</NavLink></li>
                </ul>
              </div>
            </div>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "border px-2 py-1 border-red-700"
                  : "hover:border-b hover:border-red-700 px-2 py-1"
              }
            >
              {link.name}
            </NavLink>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
