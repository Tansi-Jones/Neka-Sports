import { useState } from "react";

export default function Subcriber() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white backdrop-blur-xl bg-opacity-10 rounded-lg text-white p-12 max-w-4xl mx-auto space-y-10">
      <div className=" flex flex-wrap space-x-3 font-semibold text-3xl md:text-4xl capitalize items-center justify-center tracking-wide">
        <p className="text-white">subscribe to our</p>
        <p className="text-gold">newsletter</p>
      </div>
      <p className="text-white text-lg w-5/5 md:w-3/5 mx-auto mt-10 text-center">
        Get updated on every events & and news from neka sports
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:flex-nowrap md:border md:border-white p-1 rounded-full">
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            className="border border-white md:border-0 rounded-full px-4 py-3 md:pl-0 md:ml-5 outline-none flex-grow bg-transparent text-white text-base md:text-lg placeholder:text-white font-light"
          />
          <button
            type="submit"
            className="bg-gold text-white rounded-full py-3 md:py-5 px-5 md:px-10 capitalize md:w-fit w-full mt-3 md:mt-0"
          >
            subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
