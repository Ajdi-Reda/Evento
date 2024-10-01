import H1 from "@/components/h1";
import React, { Suspense } from "react";
import EventsList from "@/components/events-list";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: {
    page: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;
  return {
    title: city === "all" ? "All events" : `Event in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

const CityEvents = ({ params, searchParams }: EventsPageProps) => {
  const { city } = params;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) throw new Error("Invalid page number");

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-24">
        {city === "all" ? "All events" : `Event in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default CityEvents;
