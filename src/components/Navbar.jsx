import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const navLinks = [
    { id: 0, name: "Home", href: "#" },
    { id: 1, name: "About", href: "#" },
    { id: 2, name: "Features", href: "#" },
    { id: 3, name: "Contact Us", href: "#" },
  ];
  return (
    <>
      <div className="flex items-center justify-between mt-6 mb-6">
        <div className="flex items-center justify-center">
          <img
            className="rounded-full mx-2"
            src="https://placehold.co/60x60/png"
            alt=""
          />
          <h1 className="text-2xl font-semibold">TO DO</h1>
        </div>
        <div className="hidden md:block">
          <nav className="flex items-center justify-items-end">
            <ul className="flex items-center justify-center">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="px-4 py-2 mx-4 my-2 text-lg cursor-pointer hover:text-[#3585FF] font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="text-white text-lg mx-4 my-2 bg-[#3585FF] rounded-md px-4 py-2">
              Download
            </button>
          </nav>
        </div>
        <div className="block md:hidden">
          <RxHamburgerMenu size={32} className="text-[#3585FF]" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
