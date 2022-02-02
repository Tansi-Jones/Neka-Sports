import Banner from "../components/HeroSection/Banner";
import MetaTitle from "../components/Meta/MetaTitle";
import Footer from "../components/home/Footer/Footer";
import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import newsData from "../components/news/data";
import { useRouter } from "next/router";

export default function News() {
  const router = useRouter();

  return (
    <>
      <MetaTitle />

      <header className="overflow-hidden">
        <Banner
          imgTitle="soccer-field-2.jpg"
          breadCrumb_1="our news"
          breadCrumb_3="news"
        />
      </header>

      <main className="w-[90%] xl:w-[70%] mx-auto">
        <section className="my-52">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-items-center gap-x-10 lg:gap-x-48 gap-y-10 mt-20">
            {newsData.map(({ id, img, title, details, time, date }) => (
              <>
                <div
                  className="cursor-pointer flex flex-wrap max-w-[18rem] md:max-w-[22rem] bg-white backdrop-blur-xl bg-opacity-10 rounded-lg"
                  key={id}
                  onClick={() => {
                    router.push({
                      pathname: "/newsDetails",
                      query: {
                        img,
                        title,
                        date,
                        location,
                        details,
                      },
                    });
                  }}
                >
                  <div className="relative w-[40rem] h-[14rem] md:h-[20rem] ">
                    <Image
                      src={img}
                      layout="fill"
                      alt="newsimage"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-white space-y-4 py-5 px-8">
                    <h1 className="text-gold capitalize font-semibold text-2xl md:text-3xl">
                      {title}
                    </h1>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CalendarIcon className="text-white h-4 md:h-6" />
                        <p className="font-light">{date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ClockIcon className="text-white h-4 md:h-6" />
                        <p className="font-light">{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
