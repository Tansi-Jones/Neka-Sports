import Image from "next/image";
import Navbar from "../Navigation/Navbar";
import NewsMover from "../home/NewsTicker/NewsMover";
import newsData from "../news/data";

export default function HeroSection() {
  return (
    <>
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
        <div className="absolute bottom-72 md:bottom-96 right-5 md:right-32 bg-white backdrop-blur-md bg-opacity-20 rounded-xl md:h-52 md:w-[26rem] w-[22rem] h-46 py-10 px-8 space-y-5">
          <p className="capitalize font-light text-xl">our vision</p>
          <h1 className="capitalize text-white font-semibold text-3xl">
            Bring in Meka on loan, sell Zonrana
          </h1>
        </div>
        <div className="newsTicker flex space-x-5">
          {newsData.map(({ id, img, title, date, time }) => (
            <NewsMover
              key={id}
              img={img}
              title={title}
              date={date}
              time={time}
            />
          ))}
        </div>
      </div>
    </>
  );
}
