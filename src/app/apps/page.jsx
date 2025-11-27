"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Apps() {
  const [apps, setApps] = useState([]); // all apps
  const [search, setSearch] = useState(""); // search text
  const [results, setResults] = useState([]); // search results
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch all apps on first render
  useEffect(() => {
    const loadApps = async () => {
      const res = await fetch("https://heroio.vercel.app/app", {
        cache: "no-store",
      });
      const data = await res.json();
      setApps(data);
      setResults(data); // initially show all
    };
    loadApps();
  }, []);

  // 🔍 Handle search
  const handleSearch = async (e) => {
    const text = e.target.value;
    setSearch(text);
    setLoading(true);

    if (!text.trim()) {
      setResults(apps); // reset
      setLoading(false);
      return;
    }

    const res = await fetch(`https://heroio.vercel.app/search?search=${text}`, {
      cache: "no-store",
    });
    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <div className="max-w-350 mx-auto my-10">
      {/* Title */}
      <div className="text-center my-10 space-y-4">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-sm text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Search + Result Count */}
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold">({results.length}) Apps found</h2>

        <label className="input">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search apps..."
            className="w-full"
          />
        </label>
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading ? (
          <div className="text-center col-span-full">
            <h1 className="text-4xl font-bold text-gray-900">Loading...</h1>
          </div>
        ) : (
          results.map((app) => <Card key={app.id} data={app} />)
        )}
      </div>

      {/* Not Found */}
      {results.length === 0 && !loading && (
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold text-gray-900">App not Found 😢</h1>
        </div>
      )}
    </div>
  );
}
