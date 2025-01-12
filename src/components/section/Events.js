import React from "react";
import CustomContainer from "../custom/CustomContainer";
import EventParent from "../custom/EventParent";
import { events } from "@/app/data";

const Events = () => {
  const currentDate = new Date();
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <div className="pb-[15vh]">
      <CustomContainer>
        <h1 className="title">Event Bulan ini</h1>
        <h2 className="text-primaryShadow font-lora text-4xl my-8 font-medium">
          Event pada bulan {month} {year}
        </h2>
        <EventParent events={events} />
      </CustomContainer>
    </div>
  );
};

export default Events;
