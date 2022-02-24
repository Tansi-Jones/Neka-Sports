import Banner from "../components/HeroSection/Banner";
import MetaTitle from "../components/Meta/MetaTitle";
import Footer from "../components/Footer/Footer";
import { HomeIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = input;
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/contact", {
        name,
        email,
        subject,
        message,
      });
      toast(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <>
      <MetaTitle subTitle="Contact" />

      {/* Toster */}
      <Toaster />

      <header className="overflow-hidden">
        <Banner
          imgTitle="stadium.jpg"
          breadCrumb_1="contact us"
          breadCrumb_3="contact"
        />
      </header>

      <main className="w-[90%] mx-auto">
        <section className="my-52">
          <div className=" w-full h-[400px] md:h-[600px] my-36 rounded-xl overflow-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3478921115184!2d28.016746615634165!3d-26.185359069568257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c0a6ffc9379%3A0x3d365796c1f181b!2s44%20STANLEY!5e0!3m2!1sen!2s!4v1637002101355!5m2!1sen!2s"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 my-52">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 mb-10 gap-y-10 xl:gap-y-0">
                <div>
                  <p className="text-white font-light text-lg md:text-2xl mb-5">
                    Name
                  </p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    className="outline-none text-white bg-transparent border border-white rounded-md p-4 w-full"
                  />
                </div>
                <div>
                  <p className="text-white font-light text-lg md:text-2xl mb-5">
                    Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="outline-none text-white bg-transparent border border-white rounded-md p-4 w-full"
                  />
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <p className="text-white font-light text-lg md:text-2xl mb-5">
                    Subject
                  </p>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={handleChange}
                    className="outline-none text-white bg-transparent border border-white rounded-md p-4 w-full"
                  />
                </div>
                <div>
                  <p className="text-white font-light text-lg md:text-2xl mb-5">
                    Message
                  </p>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    className="outline-none text-white bg-transparent border border-white rounded-md p-4 w-full"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center space-x-3 bg-gold text-white rounded-lg capitalize  w-full text-xl md:text-2xl py-3 mt-5"
              >
                <span>send</span>
                {isLoading && (
                  <BiLoaderAlt className="text-white text-lg animate-spin" />
                )}
              </button>
            </form>
          </div>

          <div className="justify-self-start xl:justify-self-center mt-20 xl:mt-10">
            <div className="space-y-14">
              <div className="text-white font-extralight flex space-x-5 items-center">
                <HomeIcon className="h-10 md:h-14 border border-gold text-gold rounded-full p-2" />
                <p className="text-xl md:text-2xl">
                  23 Avenue Silicon Mountaine
                </p>
              </div>
              <div className="text-white font-extralight flex space-x-5 items-center">
                <PhoneIcon className="h-10 md:h-14 border border-gold text-gold rounded-full p-2" />
                <p className="text-xl md:text-2xl">+90 (533) 892 7123</p>
              </div>
              <div className="text-white font-extralight flex space-x-5 items-center">
                <MailIcon className="h-10 md:h-14 border border-gold text-gold rounded-full p-2" />
                <p className="text-xl md:text-2xl">info@nekasports.com</p>
              </div>
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
