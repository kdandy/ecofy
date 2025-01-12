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
  const currentMonth = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // Filter events for current month
  const getCurrentMonthEvents = () => {
    const currentMonthData = events.find(
      (monthEvents) =>
        monthEvents.month.toLowerCase() === currentMonth.toLowerCase()
    );

    return currentMonthData ? [currentMonthData] : [];
  };

  const currentMonthEvents = getCurrentMonthEvents();

  return (
    <div className="pb-[15vh]">
      <CustomContainer>
        <h1 className="title">Event Bulan ini</h1>
        <h2 className="text-primaryShadow font-lora text-4xl my-8 font-medium">
          Event pada bulan {currentMonth} {year}
        </h2>
        <EventParent events={currentMonthEvents} />
      </CustomContainer>
    </div>
  );
};

export default Events;
