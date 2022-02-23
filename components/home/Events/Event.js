import Image from "next/image";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Event({ img, title, desc, date, location }) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap md:flex-nowrap max-w-xs md:max-w-2xl bg-white backdrop-blur-xl bg-opacity-10 rounded-lg">
      <div className="relative w-[68rem] h-[14rem] md:h-[22rem] ">
        <Image
          src={img}
          layout="fill"
          alt="newsimage"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="text-white space-y-4 py-5 px-8">
        <h1 className="capitalize font-semibold text-2xl md:text-3xl">
          {title}
        </h1>
        <p className="font-light text-base md:text-lg">{desc}</p>
        <div className="flex items-center space-x-3">
          <CalendarIcon className="text-white h-4 md:h-6" />
          <p className="font-light">{date}</p>
        </div>
        <div className="flex items-center space-x-3">
          <LocationMarkerIcon className="text-white h-4 md:h-6" />
          <p className="font-light">{location}</p>
        </div>
        <button
          className=" button-primary w-full"
          onClick={() => {
            router.push({
              pathname: "/eventDetails",
              query: {
                img,
                title,
                desc,
                date,
                location,
              },
            });
          }}
        >
          view more
        </button>
      </div>
    </div>
  );
}
