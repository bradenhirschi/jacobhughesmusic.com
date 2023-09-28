import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";

const Sidenav = () => {
  return (
    <>
      <div className="w-[200px]" />
      <div className="fixed top-0 left-0 z-[50] bg-white">
        <div className="w-[200px] relative">
          <nav>
            <ul id="page-links">
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
          <h1 id="sideways-header">Jacob Hughes</h1>
          <div className="h-[250px]"></div>
          <div className="p-8 flex gap-4 items-center justify-center">
            <a href="https://open.spotify.com/artist/5AmZgso5Uv1W3Bl5eStEYC?si=tmY8yaBnQoiKsrnDeM0t-A">
              <BsSpotify size={20} />
            </a>
            <a href="https://instagram.com/feedmegrapes49">
              <BsInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@jacobhughes217">
              <BsYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
