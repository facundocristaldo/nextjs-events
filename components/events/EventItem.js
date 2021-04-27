import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/Button";
import classes from "./EventItem.module.css";

const EventItem = ({ item }) => {
  const readableDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = item.location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <img src={`/${item.image}`} alt={item.title} />
      <div className={classes.content}>
      <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${item.id}`}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon/>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
