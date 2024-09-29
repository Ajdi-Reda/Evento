import H1 from "@/components/h1";
import React, { Suspense } from "react";
import { EventoEvent } from "@/lib/types";
import EventsList from "@/components/events-list";
import Loading from "./loading";

type cityEventsProps = {
  params: {
    city: string;
  };
};

const CityEvents = ({ params }: cityEventsProps) => {
  const { city } = params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-24">
        {city === "all"
          ? "All events"
          : `Event in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default CityEvents;
