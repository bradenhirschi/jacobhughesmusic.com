import { BsApple, BsInstagram, BsSpotify, BsYoutube } from 'react-icons/bs';

const Sidenav = () => {
  return (
    <>
      <div className="w-[200px] h-full" />
      <div className="fixed top-0 left-0 z-[50] bg-white h-full">
        <div className="w-[200px] relative h-full flex flex-col">
          <nav>
            <ul
              id="page-links"
              className="sideways"
            >
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
          <h1
            id="sideways-header"
            className="sideways"
          >
            Jacob Hughes
          </h1>
          <div className="grow" />
          <div className="m-8 flex gap-2 items-center justify-center">
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
            <a
              href="https://music.apple.com/us/artist/jacob-hughes/1412502853"
              className="rounded-full p-2 hover:bg-teal-500"
            >
              <BsApple size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
