import Banner from "../components/HeroSection/Banner";
import MetaTitle from "../components/Meta/MetaTitle";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import eventsData from "../components/event/eventsData";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Events({ loadEvents }) {
  const router = useRouter();

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
        <section className="my-52">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 mt-20">
            {eventsData.map(({ id, img, title, desc, date, location }) => (
              <div key={id}>
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
              </div>
            ))}
          </div>
          <button className="mt-20 button-primary block w-[40%] md:w-[20%] xl:w-[10%] mx-auto">
            load more
          </button>
        </section>
      </main>

      <footer className="w-[90%] mx-auto">
        <Footer />
      </footer>
    </>
  );
}

// export async function getServerSideProps() {
//   const dev = process.env.NODE_ENV !== "production";
//   const { DEV_URL, PROD_URL } = process.env;

//   const response = await fetch(
//     `${dev ? "http://localhost:3000" : PROD_URL}/api/event`
//   ).then((res) => res.json());

//   const { data: loadEvents } = response;

//   return {
//     props: { loadEvents },
//   };
// }
