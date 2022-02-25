import Banner from "../components/HeroSection/Banner";
import MetaTitle from "../components/Meta/MetaTitle";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { sanityClient, urlFor } from "../sanity";
import Link from "next/link";

export default function Events({ events }) {
  const text =
    " It is a long es tablished fact that a reader will be distracted by the readable. It is a long established fact that a reader will be distracted by the readable.";

  return (
    <>
      <MetaTitle subTitle="Events" />

      <header className="overflow-hidden">
        <Banner
          imgTitle="soccer-highlights.jpg"
          breadCrumb_1="our Events"
          breadCrumb_3="events"
        />
      </header>

      <main className="w-[90%] mx-auto">
        <section className="my-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center max-w-7xl mx-auto gap-10 px-4 lg:pl-1">
            {events.map(
              ({ _id, startDate, mainImage, description, title, location }) => (
                <div key={_id}>
                  <div className="bg-white backdrop-blur-xl bg-opacity-10 rounded-lg max-w-xs md:max-w-2xl flex flex-col md:flex-row">
                    <div className="relative h-60 w-full md:h-auto md:w-[40rem] overflow-auto">
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
                        {`${description.slice(0, 100)}...`}
                      </p>
                      <div className="flex items-center space-x-3">
                        <CalendarIcon className="text-white h-4 md:h-6" />
                        <p className="font-light">{startDate}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <LocationMarkerIcon className="text-white h-4 md:h-6" />
                        <p className="font-light">{location}</p>
                      </div>
                      <Link href="/">
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
    mainImage
  }`;

  const events = await sanityClient.fetch(query);

  return {
    props: { events },
  };
};
