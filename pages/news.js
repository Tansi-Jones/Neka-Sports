import Banner from "../components/banner/Banner";
import MetaTitle from "../components/meta/MetaTitle";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/solid";
import { sanityClient, urlFor } from "../sanity";
import Link from "next/link";

export default function News({ news }) {
  return (
    <>
      <MetaTitle subTitle="News" />

      <header className="overflow-hidden">
        <Banner
          imgTitle="soccer-field-2.jpg"
          breadCrumb_1="our news"
          breadCrumb_3="news"
        />
      </header>

      <main className="w-[90%] xl:w-[70%] mx-auto">
        <section className="my-32">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-items-center gap-x-10 lg:gap-x-48 gap-y-10 mt-20">
            {news.map(({ _id, _createdAt, title, slug, mainImage }) => (
              <Link href={`/news/${slug.current}`} key={_id} passHref>
                <div key={_id}>
                  <div className="cursor-pointer flex flex-wrap max-w-[18rem] md:max-w-[21rem] bg-white backdrop-blur-xl bg-opacity-10 rounded-lg">
                    <div className="relative w-[40rem] h-[14rem] md:h-[16rem] ">
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

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <ClockIcon className="text-white h-4 md:h-6" />
                          <p className="font-light">
                            {new Date(_createdAt).toDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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

export const getServerSideProps = async () => {
  const query = `*[_type == "news"]{
    _id,
    _createdAt,
    title,
    slug,
    body,
    mainImage,
  }`;

  const news = await sanityClient.fetch(query);

  return {
    props: { news },
  };
};
