// app/event/[slug]/page.jsx
import { events } from "@/app/data.js";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CustomContainer from "@/components/custom/CustomContainer";
import { Button } from "@/components/ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";

export async function generateStaticParams() {
  // Generate all possible slugs
  const paths = events.flatMap((monthEvent) =>
    monthEvent.eventsOnDate.flatMap((dateEvent) =>
      dateEvent.events.map((event) => ({
        slug: `${monthEvent.month.toLowerCase()}-${dateEvent.day}-${
          event.event_date_id
        }`,
      }))
    )
  );

  return paths;
}

export default function EventPage({ params }) {
  // Parse the slug to get month, day, and eventId
  const [monthSlug, day, eventId] = params.slug.split("-");

  // Find the specific event
  const month = events.find(
    (m) => m.month.toLowerCase() === monthSlug.toLowerCase()
  );

  if (!month) notFound();

  const dateEvent = month.eventsOnDate.find((d) => d.day === day);

  if (!dateEvent) notFound();

  const event = dateEvent.events.find(
    (e) => e.event_date_id.toString() === eventId
  );

  if (!event) notFound();

  return (
    // <main className="container mx-auto px-4 py-8">
    //   <div className="mb-6">
    //     <Link href="/event" className="text-blue-600 hover:underline">
    //       ← Back to Events
    //     </Link>
    //   </div>

    //   <article className="max-w-4xl mx-auto">
    //     <div className="mb-4">
    //       <span className="text-gray-600">
    //         {month.month} {dateEvent.day}
    //       </span>
    //     </div>

    //     <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

    //     <div className="mb-6">
    //       <p className="text-gray-600 mb-2">
    //         <strong>Location:</strong> {event.location}
    //       </p>
    //       <p className="text-gray-600 mb-2">
    //         <strong>Organizer:</strong>{" "}
    //         <Link
    //           href={event.organizer.link}
    //           className="text-blue-600 hover:underline"
    //         >
    //           {event.organizer.name}
    //         </Link>
    //       </p>
    //     </div>

    //     <p className="mb-8">{event.description}</p>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       {event.images.map((image, index) => (
    //         <div key={index} className="relative h-64">
    //           <Image
    //             src={image}
    //             alt={`Event image ${index + 1}`}
    //             fill
    //             className="object-cover rounded-lg"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </article>
    // </main>
    <div className="mt-[120px]">
      <CustomContainer customWidth="max-w-[1160px]">
        <div className="flex">
          <Link
            href="/event"
            className="text-secondary group relative flex items-center gap-1 text-xl"
          >
            <FaArrowLeftLong /> Back to Events
            <span className="absolute right-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <h3 className="text-4xl font-medium text-text mt-5 font-secondary font-lora">
          {month.month}{" "}
          <span className="font-poppins font-bold">{dateEvent.day}</span>
        </h3>
        <h1 className="title">{event.title}</h1>
        <h2 className="text-2xl mt-5 font-secondary font-lora">
          {event.description}
        </h2>
        <h2 className="text-2xl mt-1 font-secondary font-lora">
          Organizer:{" "}
          <Link
            className="inline-block text-secondary relative group transition-all ease-in-out"
            href={`${event.organizer.link}`}
            target="_"
          >
            <p className="relative group-hover:text-primary">
              {event.organizer.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
          .
        </h2>
        <h2 className="text-2xl mt-1 font-secondary font-lora">
          Location: <span className="text-secondary">{event.location}</span>
        </h2>
        <Link href={`/requestEvent`} target="_">
          <Button size="lg" className="text-text mt-5 text-lg">
            Sign Up Untuk Event
          </Button>
        </Link>
        <Image
          src={`${event.thumbnail}`}
          alt="features image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto max-w-[50%] h-auto rounded-lg mt-4"
        />
        <p className="text-lg mt-4 text-text">{event.text}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {event.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Event image ${index + 1}`}
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto rounded-lg mt-4 mb-9"
            />
          ))}
        </div>
      </CustomContainer>
    </div>
  );
}
