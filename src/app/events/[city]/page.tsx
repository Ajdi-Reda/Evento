import H1 from "@/components/h1";
import React from "react";

type cityEventsProps = {
  params: {
    city: string;
  };
};

const CityEvents = ({ params }: cityEventsProps) => {
  const { city } = params;
  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1>
        {city === "all"
          ? "All events"
          : `Event in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
};

export default CityEvents;
