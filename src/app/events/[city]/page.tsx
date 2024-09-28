import H1 from "@/components/h1";
import React from "react";
import { EventoEvent } from "@/lib/types";

type cityEventsProps = {
  params: {
    city: string;
  };
};

const CityEvents = async ({ params }: cityEventsProps) => {
  const { city } = params;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );

  const events: EventoEvent[] = await response.json();
  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1>
        {city === "all"
          ? "All events"
          : `Event in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
};

export default CityEvents;
