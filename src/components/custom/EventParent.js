import React from "react";
import EventCard from "./EventCard";

const EventParent = ({ events }) => {
  return (
    <div className="flex flex-col">
      {events.map(({ event_id, month, eventsOnDate }) => (
        <div key={event_id} className="flex flex-col">
          <h1 className="font-bold text-5xl mt-2 font-lora capitalize">{month}</h1>
          {eventsOnDate.map(({ day, events }) => (
            <div key={day} className="mt-4">
              <h3 className="font-bold text-6xl">{day}</h3>
              {events.map(({ event_date_id, title, description, organizer, thumbnail }) => (
                <EventCard
                  key={event_date_id}
                  title={title}
                  description={description}
                  organizer={organizer}
                  link={`/event/${month.toLowerCase()}-${day}-${event_date_id}`}
                  thumbnail={thumbnail}
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