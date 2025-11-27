import Image from "next/image";
import Link from "next/link";

import google_play from '../../public/google_play.png';
import app_store from "../../public/app_store.png";

export default function BannerContent() {
  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-5">
      <div className="text-center text-7xl font-bold">
        <h1>
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
      </div>

      <p className="sm:w-190 text-center text-gray-400 text-md">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex gap-5">
        <Link
          href="https://play.google.com/store/apps?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-gray-300 rounded-sm p-2 justify-center gap-2 items-center"
        >
          <Image src={google_play} alt="Google Play" width={20} height={20} />
          <span>Google Play</span>
        </Link>

        <Link
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-gray-300 rounded-sm p-2 justify-center gap-2 items-center"
        >
          <Image src={app_store} alt="App Store" width={20} height={20} />
          <span>App Store</span>
        </Link>
      </div>
    </div>
  );
}
