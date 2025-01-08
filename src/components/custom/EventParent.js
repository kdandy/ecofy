import React from "react";
import EventCard from "./EventCard";

const EventParent = ({ events }) => {
  return (
    <div className="flex flex-col">
      {events.map((event) => (
        <div key={event.event_id} className="flex flex-col">
          <h1 className="font-bold text-5xl mt-6 capitalize">{event.month}</h1>
          {event.eventsOnDate.map((eventOnDate) => (
            <div key={eventOnDate.day}>
              <h3 className="font-bold text-6xl">{eventOnDate.day}</h3>
              {eventOnDate.events.map((event) => (
                <EventCard
                  key={event.event_date_id}
                  title={event.title}
                  description={event.description}
                  organizer={event.organizer}
                  link={event.link}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventParent;
