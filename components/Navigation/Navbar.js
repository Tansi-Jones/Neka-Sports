import Image from "next/image";
import menuLinks from "./data";
import Link from "next/link";
import { MenuAlt4Icon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center  p-2 w-[90%] m-auto z-50">
        <div className="flex items-center space-x-2 text-3xl font-bold">
          <div className="relative w-10 h-11">
            <Image
              src="/favicon.svg"
              layout="fill"
              alt="neka logo"
              objectFit="cover"
            />
          </div>
          <h1 className="text-gradient">neka sports</h1>
        </div>
        <div className="hidden text-white text-lg capitalize lg:flex items-center space-x-20 tracking-wide">
          {menuLinks.map(({ id, title, url }) => (
            <div key={id}>
              <Link href={url}>
                <a>{title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className="block lg:hidden">
          <MenuAlt4Icon className="text-white h-8 md:h-10" />
        </div>
      </div>
    </>
  );
}
