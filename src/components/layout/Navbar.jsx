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
      dropdown: true,
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Quotes", path: "/quotes" },
    { name: "Financing", path: "/financing" },
    { name: "Giving Back", path: "/giving-back" },
  ];

  const serviceLinks = [
    { name: "Horse Arenas", path: "/services/horse-arenas" },
    { name: "Horse Arena Footing", path: "/services/horse-arena-footing" },
    { name: "Barn & Building Pads", path: "/services/barn-building-pads" },
    { name: "Laser Leveling", path: "/services/laser-leveling" },
    { name: "Driveways", path: "/services/driveways" },
    { name: "Finish Grade", path: "/services/finish-grade" },
    { name: "Foundations", path: "/services/foundations" },
    { name: "Road Base", path: "/services/road-base" },
    { name: "Road Grading", path: "/services/road-grading" },
    { name: "Trenching", path: "/services/trenching" },
    { name: "Earth Moving", path: "/services/earth-moving" },
    { name: "Erosion Matting", path: "/services/erosion-matting" },
    { name: "Dust Control", path: "/services/dust-control" },
  ];

  return (
    <header className="border-b bg-white flex items-center justify-between p-3 px-4 md:px-10">
      <img src={logo} alt="Logo" className="h-30 object-contain" />

      <div className="flex flex-col justify-evenly gap-4">
        {/* Top Contact Row */}
        <div className="text-sm text-gray-700 mb-2 hidden md:flex">
          <div className="flex gap-6">
            <p><strong>📞 Phone:</strong> (303) 435-4774</p>
            <p><strong>📠 Fax:</strong> (303) 646-5438</p>
            <p><strong>📧 E-mail us:</strong> garr@dirtdogsexcavating.com</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end mb-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 ">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } md:flex md:justify-end md:items-center md:gap-6 text-sm font-semibold text-red-700`}
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <NavLink to={link.path} className="hover:underline focus:outline-none">
                  {link.name} ▾
                </NavLink>
                {/* Dropdown */}
                <div className="absolute -left-4 hidden group-hover:block bg-white border shadow-md  z-20 min-w-max">
                  <ul className="py-2 px-4 space-y-1 text-gray-700 text-sm whitespace-nowrap">
                    {serviceLinks.map((service) => (
                      <li key={service.name}>
                        <NavLink
                          to={service.path}
                          className="block hover:text-red-700 hover:scale-105 transition-transform duration-75 "
                        >
                          {service.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "border px-2 py-1 border-red-700" : "hover:border-b hover:border-red-700 px-2 py-1 "
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

