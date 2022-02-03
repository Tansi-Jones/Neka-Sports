import eventsDetails from "./data";
import Event from "./Event";

export default function Events() {
  return (
    <div className="">
      <div className=" flex space-x-3 font-semibold text-4xl capitalize items-center justify-center tracking-wide">
        <p className="text-white">upcoming</p>
        <p className="text-gold">events</p>
      </div>
      <p className="text-white text-lg w-5/5 md:w-3/5 mx-auto mt-10 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        assumenda dolor quia numquam ducimus molestiae delectus quisquam cum
        dignissimos dolorem!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:justify-items-center gap-x-16 gap-y-10 mt-20 xl:w-2/3 xl:mx-auto">
        {eventsDetails.map((eventsDetail) => (
          <Event key={eventsDetail.id} {...eventsDetail} />
        ))}
      </div>
    </div>
  );
}
