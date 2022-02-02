import Image from "next/image";
import Navbar from "../Navigation/Navbar";
import NewsMover from "../home/NewsTicker/NewsMover";
import newsData from "../news/data";
import Link from "next/link";

export default function Banner({
  imgTitle,
  breadCrumb_1,
  breadCrumb_2,
  breadCrumb_3,
}) {
  return (
    <>
      <div className="relative h-[50vh] w-full">
        <Image
          src={`/assets/img/others/${imgTitle}`}
          layout="fill"
          alt="children playing football"
          objectFit="cover"
          priority
        />
        <div className="z-50 sticky top-0 w-full bg-black bg-opacity-60 backdrop-blur-sm">
          <Navbar />
        </div>
        <div className="absolute bottom-40 left-9 md:left-16 lg:left-28 space-y-5">
          <h1 className="capitalize text-white font-semibold text-6xl">
            {breadCrumb_1}
          </h1>
          <p className="text-white capitalize font-light text-lg">
            <Link href="/">
              <a>Home / </a>
            </Link>
            <Link href={`/${breadCrumb_2}`}>
              <a>
                {breadCrumb_2} {breadCrumb_2 && "/ "}
              </a>
            </Link>
            {breadCrumb_3}
          </p>
        </div>
      </div>
    </>
  );
}
