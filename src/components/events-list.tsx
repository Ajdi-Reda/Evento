import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventsListProps) => {
  const { events, totalEvents } = await getEvents(city, page);

  const previousPath = page === 1 ? "" : `/events/${city}?page=${page - 1}`;
  const nextPath =
    totalEvents > page * 6 ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
