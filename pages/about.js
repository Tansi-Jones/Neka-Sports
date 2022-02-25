import Banner from "../components/banner/Banner";
import MetaTitle from "../components/meta/MetaTitle";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import ourTeam from "../components/about/ourTeam";
import ourClients from "../components/about/ourClients";

export default function About() {
  return (
    <>
      <MetaTitle subTitle="About" />

      <header className="overflow-hidden">
        <Banner
          imgTitle="balls.png"
          breadCrumb_1="about us"
          breadCrumb_3="about"
        />
      </header>

      <main className="w-[90%] mx-auto">
        <section className="my-52">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:gap-x-10 lg:gap-x-48 gap-y-10 mt-20">
            {visionMisionData.map(({ id, img, title, desc }) => (
              <div key={id}>
                <div className="flex flex-wrap max-w-[18rem] md:max-w-[22rem] bg-white backdrop-blur-xl bg-opacity-10 rounded-lg">
                  <div className="relative w-[40rem] h-[12rem] md:h-[14rem] ">
                    <Image
                      src={img}
                      layout="fill"
                      alt="newsimage"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className=" space-y-4 py-5 px-8">
                    <h1 className="text-gold capitalize font-semibold text-2xl md:text-3xl text-center">
                      {title}
                    </h1>
                    <p className="font-light text-base md:text-lg text-white">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-52">
          <div className=" flex space-x-3 font-semibold text-4xl capitalize items-center justify-center tracking-wide">
            <p className="text-white">our</p>
            <p className="text-gold">team</p>
          </div>
          <p className="text-white text-xl w-5/5 md:w-3/5 mx-auto mt-10 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            assumenda dolor quia numquam ducimus molestiae delectus quisquam cum
            dignissimos dolorem!
          </p>

          <div className="flex overflow-x-auto scrollbar-hide flex-nowrap xl:flex-wrap  items-center xl:justify-center gap-x-10 lg:gap-x-48 gap-y-10 mt-20">
            {ourTeam.map(({ id, img, title, position, desc }) => (
              <div key={id}>
                <div className="flex flex-wrap md:flex-nowrap max-w-[18rem] md:max-w-2xl bg-white backdrop-blur-xl bg-opacity-10 rounded-lg">
                  <div className="relative w-[68rem] h-[14rem] md:h-[22rem] ">
                    <Image
                      src={img}
                      layout="fill"
                      alt="newsimage"
                      objectFit="cover"
                      objectPosition="top"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-white space-y-8 p-8">
                    <h1 className="text-gold capitalize font-semibold text-2xl md:text-3xl">
                      {title}
                    </h1>
                    <p className="font-extralight text-base md:text-2xl capitalize">
                      {position}
                    </p>
                    <p className="hidden md:block font-extralight text-base md:text-xl">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-20 button-primary block w-[40%] md:w-[20%] xl:w-[10%] mx-auto">
            load more
          </button>
        </section>

        <section className="my-52">
          <div className=" flex space-x-3 font-semibold text-4xl capitalize items-center justify-center tracking-wide">
            <p className="text-white">our</p>
            <p className="text-gold">clients</p>
          </div>
          <p className="text-white text-xl w-5/5 md:w-3/5 mx-auto mt-10 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            assumenda dolor quia numquam ducimus molestiae delectus quisquam cum
            dignissimos dolorem!
          </p>

          <div className="flex overflow-x-auto scrollbar-hide flex-nowrap xl:flex-wrap  items-center xl:justify-center gap-x-10 lg:gap-x-48 gap-y-10 mt-20">
            {ourClients.map(({ id, img, title, position }) => (
              <div key={id}>
                <div className="flex flex-wrap max-w-[18rem] md:max-w-[22rem] bg-white backdrop-blur-xl bg-opacity-10 rounded-lg">
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
                    <p className="font-extralight text-base md:text-2xl capitalize">
                      {position}
                    </p>
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

export const visionMisionData = [
  {
    id: 1,
    img: "/assets/img/others/vission.jpg",
    title: "our vision",
    desc: " It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.",
  },
  {
    id: 2,
    img: "/assets/img/others/mission'.jpg",
    title: "our mission",
    desc: " It is a long established fact that a reader will be distracted by the readable. It is a long established fact that a reader.",
  },
];
