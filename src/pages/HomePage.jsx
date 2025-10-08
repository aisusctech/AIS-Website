import React, { useMemo, useRef } from "react";
import Hero from "../components/Hero";
import VisionMission from "../components/VisionMission";
import EventsCarousel from "../components/EventsCarousel";
import SponsorsGrid from "../components/SponsorsGrid";
import ContactStrip from "../components/ContactStrip";
import { events as defaultEvents } from "../data/events";
import { scrollToRef } from "../utils/scrollToRef";

export default function HomePage() {
  const eventsRef = useRef(null);
  const missionRef = useRef(null);

  // keep memoized for parity with your original code
  const events = useMemo(() => defaultEvents, []);

  return (
    <main className="bg-white">
      <Hero
        onExploreEvents={() => scrollToRef(eventsRef)}
        onJoinCommunity={() => scrollToRef(missionRef)}
      />

      {/* <VisionMission ref={missionRef} /> */}

      <EventsCarousel ref={eventsRef} events={events} />

    </main>
  );
}
