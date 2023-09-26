import React from "react";
import pf from "../assets/Profile.pdf";

export default function Navbar() {
  return (
    <nav className="overflow-hidden flex justify-center p-4 bg-black shadow-md">
      <div className="flex gap-x-12">
        <a
          href="/"
          className="text-white hover:text-pink-500 transition duration-300"
        >
          <p>Home</p>
        </a>
        <a
          href="/apresentacao"
          className="text-white hover:text-pink-500 transition duration-300"
        >
          <p>Apresentação</p>
        </a>
        <a
          href={pf}
          target="_blank"
          className="text-white hover:text-pink-500 transition duration-300"
        >
          <p>Currículo</p>
        </a>
      </div>
    </nav>
  );
}
