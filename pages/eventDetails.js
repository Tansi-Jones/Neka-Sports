import Banner from "../components/HeroSection/Banner";
import MetaTitle from "../components/Meta/MetaTitle";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import {
  CalendarIcon,
  LocationMarkerIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function EventDetails() {
  const router = useRouter();

  const { img, title, desc, date, location } = router.query;

  return (
    <>
      <MetaTitle subTitle="Events" />

      <header className="overflow-hidden">
        <Banner
          imgTitle="soccer-highlights.jpg"
          breadCrumb_1="event details"
          breadCrumb_2="events"
          breadCrumb_3="event details"
        />
      </header>

      <main className="w-[90%] mx-auto">
        <section className="my-52 grid justify-center">
          <div className="relative w-[22rem] md:w-[45rem] xl:w-[70rem] mx-auto h-[20rem] md:h-[35rem] rounded-xl overflow-auto">
            <Image src={img} layout="fill" objectFit="cover" alt={img} />
          </div>
          <h1 className="text-white text-5xl capitalize text-center my-16">
            {title}
          </h1>
          <p className="text-white text-base md:text-2xl font-light  xl:w-1/2 mx-auto tracking-wider">
            {desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center xl:w-1/2 md:mx-auto my-16 space-y-5">
            <div className="space-y-5">
              <div className="text-white flex items-center space-x-3">
                <LocationMarkerIcon className="h-4 md:h-8" />
                <p className="font-light text-base md:text-xl tracking-wider">
                  {location}
                </p>
              </div>
              <div className="text-white flex items-center space-x-3">
                <CalendarIcon className="h-4 md:h-8" />
                <p className="font-light text-base md:text-xl tracking-wider">
                  From {date} to {date}
                </p>
              </div>
              <div className="text-white flex items-center space-x-3">
                <ClockIcon className="h-4 md:h-8" />
                <p className="font-light text-base md:text-xl tracking-wider">
                  From {date} to {date}
                </p>
              </div>
            </div>
            <div className="md:justify-self-end grid space-y-5">
              <button className="button-primary px-16 py-3 text-base md:text-2xl">
                Register
              </button>
              <Link href="/events">
                <a className="text-white text-center px-16 py-3 text-light md:text-xl">
                  Go Back
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-[90%] mx-auto">
        <Footer />
      </footer>
    </>
  );
}
