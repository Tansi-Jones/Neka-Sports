import Image from "next/image";

export default function NewsMover({ img, title, date, time }) {
  return (
    <div className="flex items-center space-x-3 text-white bg-black backdrop-blur-3xl bg-opacity-80 rounded-lg p-[3px] w-96">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          layout="fill"
          alt="newsimage"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-sm font-regular text-center">{title}</h1>
        <p className="text-sm font-light text-center">
          {date} - {time}
        </p>
      </div>
    </div>
  );
}
