import Image from "next/image";
import Link from "next/link";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Navbar() {
  const [isSideBar, setIsSideBar] = useState(false);

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
                <a className="hover:text-gold">{title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="cursor-pointer block lg:hidden "
          onClick={() => {
            setIsSideBar(!isSideBar);
          }}
        >
          {!isSideBar ? (
            <MenuAlt4Icon className="text-white h-8 md:h-10" />
          ) : (
            <XIcon className="text-white h-8 md:h-10" />
          )}
        </div>
      </div>

      <div
        className={`w-[90%] mx-auto pt-5 pb-10 px-2
         ${isSideBar ? "showMenu" : "hideMenu"}`}
      >
        <div className=" text-white text-xl capitalize tracking-wide space-y-5">
          {menuLinks.map(({ id, title, url }) => (
            <div key={id}>
              <Link href={url}>
                <a className="hover:text-gold ">{title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const menuLinks = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "about us",
    url: "/about",
  },
  {
    id: 3,
    title: "events",
    url: "/events",
  },
  {
    id: 4,
    title: "news",
    url: "/news",
  },
  {
    id: 5,
    title: "contact",
    url: "/contact",
  },
];
