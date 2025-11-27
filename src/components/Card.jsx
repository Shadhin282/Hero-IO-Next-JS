"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ratingImg from "../../public/icon-ratings.png";
import { Download } from "lucide-react";

export default function Card({ data }) {
  const router = useRouter();

  const { title, companyName, image, ratingAvg, size, _id } = data;

  return (
    <div
      onClick={() => router.push(`/apps/${_id}`)}
      className="card bg-base-100 shadow-lg space-y-2 border p-4 hover:scale-105 transition ease-in-out cursor-pointer"
    >
      <figure>
        {/* Since image comes dynamically, use regular img */}
        <Image
                  className="w-full h-50 rounded-lg"
                 width={500}
  height={500}
          src={image}
          alt={title}
        />
      </figure>

      <div className="card-body space-y-2">
        <h2 className="card-title text-center">
          {companyName}: {title}
        </h2>

        <div className="card-actions justify-between">
          {/* Download Badge */}
          <div className="badge bg-gray-300 text-green-600 flex items-center gap-1">
            <Download className="w-4" />
            {size}M
          </div>

          {/* Rating Badge */}
          <div className="badge bg-red-200 text-red-400 flex items-center gap-1">
            <Image src={ratingImg} alt="rating" width={500}
  height={500} className="w-4 h-4" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
