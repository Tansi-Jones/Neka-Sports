import Image from "next/image";
import Link from "next/link";
import { HomeIcon, PhoneIcon, MailIcon } from "@heroicons/react/solid";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";

export default function Footer() {
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-start space-y-10 lg:justify-items-center py-5">
        <div className="">
          <div className="flex items-center space-x-2 text-3xl font-bold mb-5 lg:w-2/3">
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
          <p className="text-white font-normal text-lg w-2/3">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>

          <div className="space-x-5 flex pt-5">
            <div className="text-white font-extralight flex space-x-5 items-center">
              <Link href="/linkedin">
                <a>
                  <TiSocialLinkedin className="h-8 w-8 bg-gold rounded-full p-1" />
                </a>
              </Link>
            </div>
            <div className="text-white font-extralight flex space-x-5 items-center">
              <Link href="/twitter">
                <a>
                  <TiSocialTwitter className="h-8 w-8 bg-gold rounded-full p-1" />
                </a>
              </Link>
            </div>
            <div className="text-white font-extralight flex space-x-5 items-center">
              <Link href="/facebook">
                <a>
                  <TiSocialFacebook className="h-8 w-8 bg-gold rounded-full p-1" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-white font-semibold capitalize text-xl tracking-wider pb-3">
            useful links
          </h1>
          <div>
            <Link href="/about">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                About Us
              </a>
            </Link>
          </div>
          <div>
            <Link href="/events">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                Our Events
              </a>
            </Link>
          </div>
          <div>
            <Link href="/news">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                Our News
              </a>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                Contact
              </a>
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-white font-semibold capitalize text-xl tracking-wider pb-3">
            quick links
          </h1>
          <div>
            <Link href="/coming-soon">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                Terms & Conditions
              </a>
            </Link>
          </div>
          <div>
            <Link href="/coming-soon">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                Privacy & Policy
              </a>
            </Link>
          </div>
          <div>
            <Link href="/coming-soon">
              <a className="text-lg text-white font-normal hover:text-gold transition duration-200">
                FAQ
              </a>
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-white font-semibold text-xl tracking-wider pb-3">
            Have a Question?
          </h1>
          <div className="text-white font-extralight flex space-x-5 items-center">
            <HomeIcon className="h-8 bg-gold rounded-full p-2" />
            <p className="text-lg font-normal">23 Avenue Silicon Mountaine</p>
          </div>
          <div className="text-white font-extralight flex space-x-5 items-center">
            <PhoneIcon className="h-8 bg-gold rounded-full p-2" />
            <p className="text-lg font-normal">+90 (533) 892 7123</p>
          </div>
          <div className="text-white font-extralight flex space-x-5 items-center">
            <MailIcon className="h-8 bg-gold rounded-full p-2" />
            <p className="text-lg font-normal">info@nekasports.com</p>
          </div>
        </div>
      </div>
      <hr className="border border-zinc-800" />
      <h1 className="text-gold font-light text-base text-center py-4">
        Powered by Remeek &trade;
      </h1>
    </div>
  );
}
