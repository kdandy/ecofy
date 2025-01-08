import React from "react";
import LoadingPage from "@/components/custom/LoadingPage";
import EventsPage from "@/components/section/EventsPage";

const Events = () => {
  return (
    <>
      <LoadingPage />
      <div className="mt-40"></div>
      <EventsPage />
    </>
  );
};

export default Events;
