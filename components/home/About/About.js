import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoPlayer = useRef();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoPlayer.current.play();
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-y-auto"
      onClick={handlePlayPause}
    >
      <video width={1000} height={1000} ref={videoPlayer}>
        <source src="assets/video/soccer.mp4" type="video/mp4" />
      </video>
      <div className={`cursor-pointer ${isPlaying ? "hidden" : "block"}`}>
        <Image
          src="/assets/img/others/stadium.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className="absolute md:top-[29%] xl:top-1/3 md:left-[36%] xl:left-[38%]">
          <div className="absolute bg-gold rounded-full md:w-[200px] md:h-[200px] animate-ping -z-0"></div>
        </div>
        <div className="absolute top-[45%] left-[45%] md:left-[45%] bg-transparent rounded-full w-[200px] h-[200px] z-50">
          <FaPlay className="text-4xl md:text-7xl text-white" />
        </div>
      </div>
    </div>
  );
}
