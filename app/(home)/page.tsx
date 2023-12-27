import Image from "next/image";
import artistPicture from "../../public/artist-picture.png";
import albumCover from "../../public/album-cover.png";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="w-full bg-yellow-50">
        <section className="bg-teal-500 slanted-bottom">
          <h2 className="md:hidden mb-20 ml-4 pt-4">Jacob Hughes</h2>
          <div className="relative h-full mx-auto container">
            <Image
              priority
              loading="eager"
              id="main-image"
              alt="Picture of Jacob Hughes"
              src={artistPicture}
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute top-[20%] left-[10%] text-center">
              <a href="https://open.spotify.com/album/0qBSQ65L07h1xoXfviiHHO?si=BhBPKP36QNO2Baj5l2b-CQ">
                <Image
                  loading="eager"
                  alt={"Album cover"}
                  src={albumCover}
                  className="h-32 w-32 sm:h-44 sm:w-44 lg:w-64 lg:h-64"
                />
              </a>
              <div className="hidden md:block bg-black h-12 w-[2px] my-4 ml-6"></div>
              <a href="https://open.spotify.com/album/0qBSQ65L07h1xoXfviiHHO?si=BhBPKP36QNO2Baj5l2b-CQ">
                <h3 className="uppercase text-white font-semibold">
                  Stream the new single
                </h3>
              </a>
            </div>
          </div>
        </section>
        <section className="mx-8 my-16 lg:mx-44 lg:my-24">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/_U3lPHakMzA?si=y4bGmtVi-CnYE_mN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <Footer />
      </main>
    </>
  );
}
