"use client";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="z-10 h-full w-full">
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-2 right-2 p-2 rounded-full hover:bg-teal-600"
      >
        <BiMenuAltRight size={30} />
      </button>
      {menuOpen && (
        <div className="fixed inset-0 bg-yellow-50 flex flex-col">
          <button
            onClick={() => setMenuOpen(false)}
            className="fixed top-2 right-2 p-2 rounded-full hover:bg-gray-100"
          >
            <AiOutlineClose size={30} />
          </button>
          <h2 className="md:hidden mb-20 ml-4 pt-4">Jacob Hughes</h2>
          <nav className="px-20">
            <ul id="mobile-menu-links">
              <li>
                <a href="https://open.spotify.com/artist/5AmZgso5Uv1W3Bl5eStEYC?si=tmY8yaBnQoiKsrnDeM0t-A">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://instagram.com/feedmegrapes49">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@jacobhughes217">YouTube</a>
              </li>
            </ul>
          </nav>
          <div className="grow" />
          <div className="flex gap-3 items-center justify-center p-20">
            <a
              href="https://open.spotify.com/artist/5AmZgso5Uv1W3Bl5eStEYC?si=tmY8yaBnQoiKsrnDeM0t-A"
              className="rounded-full p-2 hover:bg-teal-500"
            >
              <BsSpotify size={20} />
            </a>
            <a
              href="https://instagram.com/feedmegrapes49"
              className="rounded-full p-2 hover:bg-teal-500"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@jacobhughes217"
              className="rounded-full p-2 hover:bg-teal-500"
            >
              <BsYoutube size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
