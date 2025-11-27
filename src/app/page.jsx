import BannerContent from "@/components/BannerContent";
import BannerBorad from "@/components/BannerBorad";
import CardContainer from "@/components/CardContainer";
import Link from "next/link";

// Metadata for Next.js App Router
export const metadata = {
  title: "HERO.IO – Real-time Chat App",
  description:
    "HERO.IO is a modern real-time chat app built with React, offering secure messaging, group chats, and media sharing.",
  keywords:
    "chat app, real-time messaging, HERO.IO, secure chat, online communication, group chat, tailwind css",
  author: "Shadhin Khan",
};

export default function Home() {
  return (
    <div>
      <BannerContent />
      <BannerBorad />

      <h2 className="text-center text-5xl font-bold mt-20">
        Trending Apps
      </h2>

      <p className="text-center my-5 text-gray-400 text-lg">
        Explore All Trending Apps on the Market developed by us
      </p>

      <CardContainer />

      <div className="text-center my-7">
        <Link
          href="/apps"
          className="text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold btn text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
}
