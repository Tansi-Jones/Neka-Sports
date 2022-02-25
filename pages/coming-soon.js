import Footer from "../components/footer/Footer";
import MetaTitle from "../components/meta/MetaTitle";
import Navbar from "../components/navigation/Navbar";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <>
      <MetaTitle subTitle="Coming-Soon" />

      <nav>
        <Navbar />
      </nav>

      <main className=" w-[90%] mx-auto text-white space-y-10 py-32 flex flex-col items-center">
        <h1 className="font-noto text-7xl font-bold capitalize text-secondary text-center">
          coming soon!
        </h1>
        <p className="text-white font-open text-xl text-center">
          This page is being developed, Stay tune...
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
