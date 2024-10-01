import "server-only";

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalEvents;
  if (city === "all") {
    totalEvents = await prisma.eventoEvent.count();
  } else
    totalEvents = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  return { events, totalEvents };
});

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
}
