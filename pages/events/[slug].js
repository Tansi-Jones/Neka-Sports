import Banner from "../../components/banner/Banner";
import MetaTitle from "../../components/meta/MetaTitle";
import Footer from "../../components/footer/Footer";
import Registration from "../../components/registration/Registration";
import Image from "next/image";
import {
  CalendarIcon,
  LocationMarkerIcon,
  ClockIcon,
  ArrowLeftIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";

export default function Handler({ event }) {
  const {
    _id,
    _createdAt,
    title,
    slug,
    body,
    location,
    startDate,
    endDate,
    mainImage,
    registration,
  } = event;

  return (
    <>
      <MetaTitle subTitle={`Event | ${slug.current}`} />

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
            <Image
              src={urlFor(mainImage).url()}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <h1 className="text-white text-3xl lg:text-5xl capitalize text-center my-16">
            {title}
          </h1>
          <p className="text-white text-base md:text-2xl font-light  xl:w-2/3 mx-auto tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            temporibus maxime voluptate laborum, deleniti ullam quos praesentium
            mollitia vel architecto suscipit eius, ea asperiores soluta illum.
            Architecto ea tempora voluptatum.
          </p>

          <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:mx-auto xl:w-2/3 my-16 space-y-5">
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
                  From {new Date(startDate).toDateString()} <br />
                  To {new Date(endDate).toDateString()}
                </p>
              </div>
            </div>
            <div className="justify-self-center md:justify-self-end grid space-y-5">
              {registration && (
                <Registration open={() => true} close={() => false} />
              )}
              <Link href="/events">
                <a className="text-white text-center px-16 py-3 text-light md:text-xl flex items-center space-x-2">
                  <ArrowLeftIcon className="h-5 text-white" />
                  <span>Go Back</span>
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

export const getStaticPaths = async () => {
  const query = `*[_type == "event"]{
      _id,
      slug {
          current
      }
  }`;

  const events = await sanityClient.fetch(query);

  const paths = events.map(({ slug }) => ({
    params: {
      slug: slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "event" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    slug,
    body,
    location,
    startDate,
    endDate,
    mainImage,
    tags,
    registration
  }`;

  const event = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!event) return { notFound: true };

  return { props: { event } };
  revalidate: 60;
};
