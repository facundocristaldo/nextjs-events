import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { Router, useRouter } from "next/router";

function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();
  const handleSearch = (year, month) => {
    router.push(`/events/${year}/${month}`)
  };
  return (
    <div>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={allEvents} />
    </div>
  );
}

export default EventsPage;
