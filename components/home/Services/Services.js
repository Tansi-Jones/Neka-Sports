import services from "./data";
import Service from "./Service";

export default function Services() {
  return (
    <div>
      <div className=" flex space-x-3 font-semibold text-4xl capitalize items-center justify-center tracking-wide">
        <p className="text-white">what we</p>
        <p className="text-gold">offer</p>
      </div>
      <p className="text-white text-lg w-5/5 md:w-3/5 mx-auto mt-10 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        assumenda dolor quia numquam ducimus molestiae delectus quisquam cum
        dignissimos dolorem!
      </p>
      <div className="card grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 my-20 gap-5 ">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
