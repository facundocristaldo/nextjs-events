import { useRouter } from "next/router";
import ErrorAlert from "../../components/error-alert/error-alert";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";

function FilterEventsPage() {
  const router = useRouter();
  console.log(router.query.slug);

  if (!router.query.slug) return <p className="center">Loading...</p>;

  if (isNaN(router.query.slug[0]) || isNaN(router.query.slug[1]))
    return (
      <>
        <ErrorAlert>
          <p className="center">Error in url</p>
          <Button link="/events">Show all Events</Button>
        </ErrorAlert>
      </>
    );

  const year = parseInt(router.query.slug[0]);
  const month = parseInt(router.query.slug[1]);
  const events = getFilteredEvents({ year: year, month: month });
  return (
    <div>
      <ResultsTitle date={year + "/" + month} />
      <EventList items={events} />
    </div>
  );
}

export default FilterEventsPage;
