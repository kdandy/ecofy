import React from "react";
import CustomContainer from "../custom/CustomContainer";
import EventParent from "../custom/EventParent";
import { events } from "@/app/data";

const Events = () => {
  return (
    <div className="pb-[15vh]">
      <CustomContainer>
        <h1 className="title">Upcoming Events</h1>
        <h2 className="text-green1 text-4xl my-8 font-bold">
          Events this month
        </h2>
        <EventParent events={events}/>
      </CustomContainer>
    </div>
  );
};

export default Events;
