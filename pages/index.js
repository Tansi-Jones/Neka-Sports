import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";
import services from "../components/services/data";
import MetaTitle from "../components/meta/MetaTitle";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home({ events, news }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [email, setEmail] = useState("");

  const videoPlayer = useRef();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoPlayer.current.play();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <MetaTitle />

      <header className="overflow-hidden">
        <div className="relative h-screen w-full">
          <Image
            src="/assets/img/others/children.jpg"
            layout="fill"
            alt="children playing football"
            objectFit="cover"
            priority
          />
          <div className="z-50 sticky top-0 w-full bg-black bg-opacity-60 backdrop-blur-sm">
            <Navbar />
          </div>
          <div className="absolute bottom-72 md:bottom-96 right-5 md:right-32 bg-white backdrop-blur-md bg-opacity-20 rounded-xl md:h-64 md:w-[30rem] w-[22rem] h-46 py-10 px-8 space-y-5">
            <p className="capitalize font-light text-xl">our vision</p>
            <h1 className="capitalize text-white font-semibold text-3xl md:text-4xl">
              Bring in Meka on loan, sell Zonrana
            </h1>
          </div>
          <div className="newsTicker flex space-x-5">
            {news.map(({ _id, _createdAt, title, slug, mainImage }) => (
              <Link href={`/news/${slug.current}`} passHref key={_id}>
                <div className="flex items-center space-x-3 cursor-pointer text-white bg-black backdrop-blur-3xl bg-opacity-80 rounded-lg  w-96">
                  <div className="relative md:w-24 md:h-20 w-16 h-16">
                    <Image
                      src={urlFor(mainImage).url()}
                      layout="fill"
                      alt="newsimage"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <h1 className="text-sm md:text-base font-regular text-center">
                      {title}
                    </h1>
                    <p className="text-sm md:text-base font-light text-center">
                      {new Date(_createdAt).toDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="w-[90%] mx-auto ">
        <section className="flex justify-center items-center my-52">
          <div className="relative rounded-xl" onClick={handlePlayPause}>
            <video
              width={1000}
              height={1000}
              ref={videoPlayer}
              className="rounded-xl"
            >
              <source src="assets/video/soccer.mp4" type="video/mp4" />
            </video>
            <div
              className={` cursor-pointer ${isPlaying ? "hidden" : "block"}`}
            >
              <Image
                src="/assets/img/others/stadium.jpg"
                layout="fill"
                objectFit="cover"
                alt=""
                className="rounded-xl"
                priority
              />
              <div className="absolute md:top-[29%] xl:top-1/3 md:left-[36%] xl:left-[38%]">
                <div className="absolute bg-gold rounded-full md:w-[200px] md:h-[200px] animate-ping -z-0"></div>
              </div>
              <div className="absolute top-[45%] left-[45%] md:left-[45%] bg-transparent rounded-full w-[200px] h-[200px] z-50">
                <FaPlay className="text-4xl md:text-7xl text-white" />
              </div>
            </div>
          </div>
        </section>

        <section className="my-52">
          <div>
            <div className=" flex space-x-3 font-semibold text-4xl capitalize items-center justify-center tracking-wide">
              <p className="text-white">what we</p>
              <p className="text-gold">offer</p>
            </div>
            <p className="text-white text-lg w-5/5 md:w-3/5 mx-auto mt-10 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, assumenda dolor quia numquam ducimus molestiae delectus
              quisquam cum dignissimos dolorem!
            </p>
            <div className="card grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 my-20 gap-5 ">
              {services.map(({ id, img, title, desc }) => (
                <div
                  className="text-white max-w-xs text-center rounded-xl border-gold border space-y-5 px-5 py-14"
                  key={id}
                >
                  <div className="relative w-20 h-20 mx-auto">
                    <Image src={img} layout="fill" alt="" objectFit="cover" />
                  </div>
                  <h1 className="capitalize font-semibold text-2xl">{title}</h1>
                  <p className="font-light text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="my-52">
          <div className="">
            <div className=" flex space-x-3 font-semibold text-4xl capitalize items-center justify-center tracking-wide">
              <p className="text-white">upcoming</p>
              <p className="text-gold">events</p>
            </div>
            <p className="text-white text-lg w-5/5 md:w-3/5 mx-auto mt-10 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, assumenda dolor quia numquam ducimus molestiae delectus
              quisquam cum dignissimos dolorem!
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-10 px-4 lg:pl-1 mt-16">
              {events.map(
                ({
                  _id,
                  startDate,
                  mainImage,
                  description,
                  title,
                  location,
                  slug,
                }) => (
                  <div key={_id}>
                    <div className="bg-white backdrop-blur-xl bg-opacity-10 rounded-lg max-w-xs md:max-w-2xl flex flex-col md:flex-row">
                      <div className="relative h-60 w-full md:h-auto md:w-[25rem] overflow-auto">
                        <Image
                          src={urlFor(mainImage).url()}
                          layout="fill"
                          alt="newsimage"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="text-white space-y-4 py-5 px-8">
                        <h1 className="text-gold capitalize font-semibold text-2xl md:text-2xl">
                          {title}
                        </h1>
                        <p className="font-light text-base md:text-lg">
                          {`${
                            description.length > 50
                              ? description.slice(0, 50) + " ..."
                              : description
                          }`}
                        </p>
                        <div className="flex items-center space-x-3">
                          <CalendarIcon className="text-white h-4 md:h-6" />
                          <p className="font-light">{startDate}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <LocationMarkerIcon className="text-white h-4 md:h-6" />
                          <p className="font-light">{location}</p>
                        </div>
                        <Link href={`/events/${slug.current}`}>
                          <a className="block text-center button-primary w-full">
                            view more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            {events.length > 6 && (
              <button className="mt-20 button-primary block w-[40%] md:w-[20%] xl:w-[10%] mx-auto">
                load more
              </button>
            )}
          </div>
        </section>

        <section className="my-52">
          <div className="bg-white backdrop-blur-xl bg-opacity-10 rounded-lg text-white p-12 max-w-4xl mx-auto space-y-10">
            <div className=" flex flex-wrap space-x-3 font-semibold text-3xl md:text-4xl capitalize items-center justify-center tracking-wide">
              <p className="text-white">subscribe to our</p>
              <p className="text-gold">newsletter</p>
            </div>
            <p className="text-white text-lg w-5/5 md:w-3/5 mx-auto mt-10 text-center">
              Get updated on every events & and news from neka sports
            </p>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-wrap md:flex-nowrap md:border md:border-white p-1 rounded-full">
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="border border-white md:border-0 rounded-full px-4 py-3 md:pl-0 md:ml-5 outline-none flex-grow bg-transparent text-white text-lg md:text-xl placeholder:text-white font-light"
                />
                <button
                  type="submit"
                  className="bg-gold  hover:bg-transparent hover:text-gold border border-gold text-lg transition ease-out text-white rounded-full py-3 md:py-5 px-5 md:px-10 capitalize md:w-fit w-full mt-3 md:mt-0"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-[90%] mx-auto">
        <Footer />
      </footer>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "event"]{
    _id,
    title,
    slug,
    body,
    location,
    startDate,
    endDate,
    mainImage,
    description
  }`;

  const query_2 = `*[_type == "news"]{
    _id,
    _createdAt,
    title,
    slug,
    mainImage,
  }`;

  const events = await sanityClient.fetch(query);
  const news = await sanityClient.fetch(query_2);

  return {
    props: { events, news },
  };
};
