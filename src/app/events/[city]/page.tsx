import H1 from "@/components/h1";
import React, { Suspense } from "react";
import EventsList from "@/components/events-list";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;
  return {
    title: city === "all" ? "All events" : `Event in ${capitalize(city)}`,
  };
}

const CityEvents = ({ params }: Props) => {
  const { city } = params;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-24">
        {city === "all" ? "All events" : `Event in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default CityEvents;
