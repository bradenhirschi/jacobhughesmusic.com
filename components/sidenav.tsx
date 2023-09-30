"use client";

import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Sidenav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Medium and larger screens */}
      <div className="hidden md:block">
        <div className="w-[200px] h-full" />
        <div className="fixed top-0 left-0 z-[50] bg-white h-full">
          <div className="w-[200px] relative h-full flex flex-col">
            <nav>
              <ul id="page-links" className="sideways">
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
            <h1 id="sideways-header" className="sideways">
              Jacob Hughes
            </h1>
            <div className="grow" />
            <div className="m-8 flex gap-3 items-center justify-center">
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
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden z-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-2 right-2 text-white p-2 rounded-full hover:bg-teal-600"
        >
          <BiMenuAltRight size={30} />
        </button>
        {menuOpen && (
          <div className="fixed inset-0 bg-white p-20 flex flex-col">
            <button
              onClick={() => setMenuOpen(false)}
              className="fixed top-2 right-2 p-2 rounded-full hover:bg-gray-100"
            >
              <AiOutlineClose size={30} />
            </button>
            <h1>Jacob Hughes</h1>
            <nav>
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
            <div className="flex gap-3 items-center justify-center">
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
    </>
  );
};

export default Sidenav;
