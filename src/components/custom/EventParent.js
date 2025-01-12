import React from "react";
import EventCard from "./EventCard";

const EventParent = ({ events }) => {
  return (
    <div className="flex flex-col">
      {events.map((eventMonth) => (
        <div key={eventMonth.event_id} className="flex flex-col">
          <h1 className="font-bold text-5xl mt-2 font-lora capitalize">
            {eventMonth.month}
          </h1>
          {eventMonth.eventsOnDate.map((eventOnDate) => (
            <div key={eventOnDate.day}>
              <h3 className="font-bold text-6xl">{eventOnDate.day}</h3>
              {eventOnDate.events.map((event) => (
                <EventCard
                  key={event.event_date_id}
                  title={event.title}
                  description={event.description}
                  organizer={event.organizer}
                  link={`/event/${eventMonth.month.toLowerCase()}-${
                    eventOnDate.day
                  }-${event.event_date_id}`}
                  thumbnail={event.thumbnail}
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
