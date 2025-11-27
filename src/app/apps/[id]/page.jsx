"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import downloadImg from "../../../../public/icon-downloads.png";
import ratingImg from "../../../../public/icon-ratings.png";
import reviewImg from "../../../../public/icon-review.png";

export default function AppDetails() {
  const { id } = useParams(); // Next.js version
  const [appDetailsData, setAppDetailsData] = useState(null);
  const [toggle, setToggle] = useState(false);

  // Fetch data from Node.js backend
  useEffect(() => {
    async function loadData() {
      const res = await fetch(`https://heroio.vercel.app/app/${id}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setAppDetailsData(data);
    }
    loadData();
  }, [id]);

  if (!appDetailsData) {
    return <h1 className="text-center text-3xl font-bold mt-20">Loading...</h1>;
  }

  const {
    title,
    companyName,
    image,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = appDetailsData;

  const handleInstalled = () => {
    toast("Installed Successfully");
    setToggle(true);
  };

  return (
    <div className="xl:max-w-350 mx-auto my-10">
      <title>{title}</title>

      {/* Top Section */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 items-center justify-start">
        <div>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="px-10">
          <div className="space-y-2.5 my-2.5">
            <h2 className="text-3xl font-bold">
              {companyName}: {title}
            </h2>
            <p className="text-gray-400 mb-7">
              Developed by{" "}
              <span className="bg-linear-to-r font-bold text-transparent from-[#632EE3] to-[#9F62F2] bg-clip-text">
                productive.io
              </span>
            </p>
          </div>

          <hr className="text-gray-200 mb-4" />

          {/* Stats */}
          <div className="flex flex-col gap-5">
            <div className="stats border-0 w-120 lg:stats-horizontal">
              <div className="stat">
                <div className="stat-desc mb-2">
                  <Image
                    src={downloadImg}
                    alt="Downloads"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="stat">
                <div className="stat-desc mb-2">
                  <Image src={ratingImg} alt="Ratings" width={25} height={25} />
                </div>
                <div className="stat-title">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat">
                <div className="stat-desc mb-2">
                  <Image src={reviewImg} alt="Reviews" width={25} height={25} />
                </div>
                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">{reviews}</div>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstalled}
              className="btn bg-green-500 text-white w-50">
              Install Now {size} MB
            </button>
          </div>
        </div>
      </div>

      <hr className="text-gray-200 mx-20 my-4" />

      {/* Ratings Chart */}

      {/* Description */}
      <div>
        <h3 className="text-xl font-bold mx-10 my-4">Description</h3>
        <p className="mx-10">{description}</p>
      </div>
    </div>
  );
}
