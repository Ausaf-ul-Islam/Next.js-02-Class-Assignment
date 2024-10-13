import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-10 mb-6">
          <li>
            <Link
              href="#hero"
              className="relative text-gray-300 transition-colors duration-300 text-lg font-medium group"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="relative text-gray-300 transition-colors duration-300 text-lg font-medium group"
            >
              Featured Cars
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="relative text-gray-300 transition-colors duration-300 text-lg font-medium group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        </ul>
        <p className="text-gray-400 mt-4">
          &copy; 2024 Ausaf Ul Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
