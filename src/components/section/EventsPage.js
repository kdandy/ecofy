import React from "react";
import CustomContainer from "../custom/CustomContainer";
import EventParent from "../custom/EventParent";
import { events } from "@/app/data";
import { Button } from "../ui/button";
import Link from "next/link";

const EventsPage = () => {
  return (
    <div>
      <CustomContainer>
        <div className="mb-8">
          <h1 className="title">Upcoming Events</h1>
          <h2 className="text-black text-xl mt-8 mb-4 font-medium">
            Events lingkungan terkini, pada tahun 2025, untuk request event
            silahkan klik tombol di bawah.
          </h2>
          <Link href={`/requestEvent`}>
            <Button size="lg" className="text-text">
              Request Event
            </Button>
          </Link>
        </div>
        <EventParent events={events} />
      </CustomContainer>
    </div>
  );
};

export default EventsPage;
