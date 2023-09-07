import Image from "next/image";
import artistPicture from "../../public/artist-picture.png";
import albumCover from "../../public/album-cover.png";

export default function Home() {
  return (
    <main className="bg-teal-500 abg-stone-300 w-full min-h-screen relative">
      <Image
        id="main-image"
        alt="Picture of the artist"
        src={artistPicture}
        className="h-24"
        layout="fill"
        objectFit="contain"
      />
      <div className="absolute top-[30%] left-[15%] text-center">
        <a href="https://open.spotify.com/album/0qBSQ65L07h1xoXfviiHHO?si=BhBPKP36QNO2Baj5l2b-CQ">
          <Image
            alt={"Album cover"}
            src={albumCover}
            className="w-[220px] h-[220px]"
          />
        </a>
        <div className="bg-black h-12 w-[2px] my-4 ml-6"></div>
        <a href="https://open.spotify.com/album/0qBSQ65L07h1xoXfviiHHO?si=BhBPKP36QNO2Baj5l2b-CQ">
          <h3 className="uppercase text-white font-semibold">
            Stream the new single
          </h3>
        </a>
      </div>
    </main>
  );
}
