import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string, page = 1) {
  console.log("hellllllooooooooo " + page);
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
}

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
