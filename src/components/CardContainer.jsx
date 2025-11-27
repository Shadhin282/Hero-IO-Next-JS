// components/CardContainer.jsx

import Card from "./Card";

export default async function CardContainer() {
  const res = await fetch("https://heroio.vercel.app/app", {
    cache: "no-store", // always fetch fresh data
  });
  const appData = await res.json();

  const appDataSlice = appData.slice(0, 8);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:max-w-350 mx-auto">
      {appDataSlice.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}
