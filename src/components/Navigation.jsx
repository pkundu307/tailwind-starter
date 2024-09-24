import React from "react";

function Navigation() {
  const icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white font-semibold">
            T s
          </a>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
          <img src={icon} className="h-8 md:hidden"/>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
