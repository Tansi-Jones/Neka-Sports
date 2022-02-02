import Image from "next/image";

export default function Service({ img, title, desc }) {
  return (
    <div className="text-white max-w-xs text-center rounded-xl border-gold border space-y-5 px-5 py-14">
      <div className="relative w-20 h-20 mx-auto">
        <Image src={img} layout="fill" alt="" objectFit="cover" />
      </div>
      <h1 className="capitalize font-semibold text-2xl">{title}</h1>
      <p className="font-light text-base">{desc}</p>
    </div>
  );
}
