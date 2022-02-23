import Footer from "../components/Footer/Footer";
import MetaTitle from "../components/Meta/MetaTitle";
import Navbar from "../components/Navigation/Navbar";
import Link from "next/link";

export default function Custom500() {
  return (
    <>
      <MetaTitle subTitle="505" />

      <nav>
        <Navbar />
      </nav>

      <main className=" w-[90%] mx-auto text-white space-y-10 py-32 flex flex-col items-center">
        <h1 className="font-noto text-7xl font-bold capitalize text-secondary text-center">
          oops
        </h1>
        <p className="text-white font-open text-xl text-center">
          {" Looks like the server is down. Please refresh the page"}
        </p>
        <Link href="/">
          <a>
            <button className="button-primary py-3 px-6 w-full lg:w-auto ">
              back home
            </button>
          </a>
        </Link>
      </main>

      <footer className="w-[90%] mx-auto">
        <Footer />
      </footer>
    </>
  );
}
