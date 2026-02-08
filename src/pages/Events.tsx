import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Interface for a general event (used for upcoming events)
interface EventCardProps {
  id: string; // Unique identifier for the event
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  link: string;
  category: string; // Category of the upcoming event (e.g., Workshop, Masterclass)
}

// Interface for previous events (based on the provided data structure)
interface PreviousEventProps {
  id: string;
  name: string;
  date: string;
  venue: string;
  eventType: string; // Type of the previous event (e.g., Workshop, Competition, Stall)
  description: string;
  image: string;
  type: string;
}

// Component to display a card for an upcoming event
const EventCard = ({ id, title, date, time, description, image, link, category }: EventCardProps) => {
  return (
    // Card styling for upcoming events with rounded corners and subtle background
    <Card className="overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-white/10 h-full flex flex-col shadow-lg">
      {/* Event image with aspect ratio for consistent sizing */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Event category badge */}
        <div className="absolute top-2 right-2 bg-primary/80 text-white px-3 py-1 text-sm rounded-md">
          {category}
        </div>
      </div>
      {/* Card content area with padding */}
      <CardContent className="p-6 flex-grow">
        {/* Date and Time information with icons */}
        <div className="flex items-center gap-4 text-sm mb-3 text-muted-foreground">
          <div className="flex items-center">
            {/* Calendar icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            {/* Clock icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{time}</span>
          </div>
        </div>
        {/* Event title */}
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        {/* Event description */}
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      {/* Card footer with a link/button */}
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
          <Link to={link}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Component to display a card for a previous event
const PreviousEventCard = ({ name, date, venue, eventType, description, image }: PreviousEventProps) => {
  return (
    // Card styling for previous events with rounded corners and subtle background
    <Card className="overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm border border-white/10 h-full flex flex-col shadow-lg">
      {/* Event image */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
         {/* Event type badge */}
         <div className="absolute top-2 right-2 bg-primary/80 text-white px-3 py-1 text-sm rounded-md">
          {eventType}
        </div>
      </div>
      {/* Card content area with padding */}
      <CardContent className="p-6">
        {/* Event name */}
        <h3 className="text-xl font-serif mb-2">{name}</h3>
        {/* Date and Venue information with icons */}
        <div className="flex flex-wrap items-center gap-4 text-sm mb-3 text-muted-foreground">
          <div className="flex items-center">
            {/* Calendar icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            {/* Location icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{venue}</span>
          </div>
        </div>
        {/* Event description */}
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      {/* Note: Previous events don't have a 'View Details' button in this design */}
    </Card>
  );
};

// Vertical Slider component for featured upcoming events
const VerticalEventSlider = ({ events }: { events: EventCardProps[] }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      {events.map((event) => (
        <div key={event.id} className="w-full">
          <EventCard {...event} />
        </div>
      ))}
    </div>
  );
};

// Main Events component
const Events = () => {
  // Combined array of all events (upcoming and past)
  // Use a 'type' property to distinguish between upcoming and past
  const allEvents = [
     // Updated the first upcoming event to Ice-Breaking Session
     {
      id: "upcoming-1",
      title: "Ice-Breaking Session",
      date: "May 18, 2025", 
      time: "6:00 PM",
      description: "A fun, low-pressure session designed to help members get comfortable, connect with each other, and instantly spark imaginative thinking through engaging activities and prompts. The goal is to break the ice, build rapport, and set a playful, collaborative tone for future creative exploration.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1070&q=80",
      category: "Session",
      type: "upcoming",
      link: "/events/ice-breaking-session"
    },
    {
      id: "upcoming-2",
      title: "Digital Art Masterclass",
      date: "June 22, 2025", // Updated year
      time: "4:30 PM",
      description: "Learn digital art techniques from professional artists. This masterclass is designed for artists of all levels who want to explore the world of digital painting and illustration. Our experienced instructors will guide you through the process, from setting up your digital canvas to mastering various brushes and tools. Get ready to create stunning digital artworks and take your art to the next level!",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Masterclass",
      type: "upcoming",
      link: "#" // Placeholder link
    },
     {
      id: "upcoming-4",
      title: "Poetry Slam Night",
      date: "July 18, 2025",
      time: "7:00 PM",
      description: "Express yourself through spoken word at our open mic poetry slam night. Share your original poems or simply enjoy listening to the powerful voices of our community. All styles and themes are welcome. Come and be a part of this evening of raw emotion and creative expression!",
      image: "https://images.unsplash.com/photo-1470091688026-38b51162c8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "Performance",
      type: "upcoming",
      link: "#" // Placeholder link
    },
    {
      id: "upcoming-5",
      title: "Sculpture Workshop",
      date: "August 10, 2025",
      time: "1:00 PM",
      description: "Explore the art of three-dimensional creation in our hands-on sculpture workshop. Learn basic sculpting techniques and create your own masterpiece. Materials will be provided. Unleash your inner sculptor and bring your ideas to life!",
      // Added a sample image URL for Sculpture Workshop
      image: "https://placehold.co/600x400/FFA07A/000000?text=Sculpture+Workshop",
      category: "Workshop",
      type: "upcoming",
      link: "#" // Placeholder link
    },
     // Added two more sample upcoming events
     {
      id: "upcoming-6",
      title: "Creative Coding Session",
      date: "August 25, 2025",
      time: "11:00 AM",
      description: "Dive into the world of creative coding and explore how to generate art and visuals using code. This session is beginner-friendly.",
      image: "https://placehold.co/600x400/FF5733/FFFFFF?text=Creative+Coding", // Sample image 1
      category: "Session",
      type: "upcoming",
      link: "#" // Placeholder link
    },
    {
      id: "upcoming-7",
      title: "Comics & Illustration Meetup",
      date: "September 7, 2025",
      time: "2:00 PM",
      description: "Connect with fellow comics enthusiasts and illustrators. Share your work, get feedback, and collaborate on new projects.",
      image: "https://placehold.co/600x400/33FF57/000000?text=Comics+Meetup", // Sample image 2
      category: "Meetup",
      type: "upcoming",
      link: "#" // Placeholder link
    },


    // Previous Events (using the data you provided)
    {
      id: "past-twist-a-tale",
      name: "TWIST A TALE",
      date: "March 7",
      venue: "Ambedkar Auditorium",
      eventType: "Workshop", // Added event type
      description: "Dive into the world of imagination with us at our \"Twist a Tale\" event! Let's paint stories with words and create memories that last a lifetime. Join us for an evening of magic and wonder!",
      image: "https://i.postimg.cc/Z58cYrXh/Whats-App-Image-2025-05-14-at-5-05-35-PM-2.jpg",
      type: "past"
    },
    {
      id: "past-ice-breaking",
      name: "ICE BREAKING SESSION",
      date: "April 21",
      venue: "GOOGLE MEET",
      eventType: "Session", // Added event type
      description: "Get ready to break the ice and shake off any awkwardness with the club's very official ice-breaking session extravaganza! We're bringing the fun with a lineup of hilarious games, wacky challenges, and interactive activities while introducing you to the nuance of the Creativity Club, that'll have you laughing, bonding, and making memories in no time.",
      image: "https://placehold.co/600x400/000000/FFFFFF?text=Placeholder+Image", // Using a placeholder as no image link was provided
      type: "past"
    },
    {
      id: "past-friendship-day",
      name: "FRIENDSHIP DAY",
      date: "4th August, 2024",
      venue: "Opp SMV",
      eventType: "Event", // Added event type
      description: "Get ready to celebrate the best thing in life—friendship!💖 Join us for a day filled with laughter, unforgettable memories, and great fun! We've got refreshing activities lined up like twister and heads up, face painting😶‍🌫 and a Photo Booth📸 to capture your memories and a whole lot of joy. 🥳💫",
      image: "https://i.postimg.cc/1zMrwy9C/Whats-App-Image-2025-05-14-at-5-05-35-PM-1.jpg",
      type: "past"
    },
    {
      id: "past-cid",
      name: "CID",
      date: "Aug 11",
      venue: "Kamraj",
      eventType: "Competition", // Added event type
      description: "🕵‍♀🌌 A chilling data breach has unleashed a wave of darkness. The deeper you probe, the more unsettling truths you'll uncover. Are you prepared to confront the darkness and reveal what lies hidden? 🕵‍♀💼 The digital realm is cloaked in darkness, and the secrets are buried deep🤐🌃. Prepare for an immersive journey through a web of intrigue and deception where every moment is crucial. Follow the trail of cryptic hints and uncover the truth lurking in the shadows. 🧐🕵‍♀",
      image: "https://i.postimg.cc/QMjqFFrK/Whats-App-Image-2025-05-14-at-5-05-35-PM.jpg",
      type: "past"
    },
    {
      id: "past-casa",
      name: "CASA",
      date: "Aug 13",
      venue: "MB210",
      eventType: "Workshop", // Added event type
      description: "From the shadows of substance abuse to the light of new possibilities. 🌅 Join us at Hopeful Horizons, where resilience meets hope, as we stand together, overcoming addiction and forging paths to brighter futures.✨",
      image: "https://i.postimg.cc/yYSjtqPx/Whats-App-Image-2025-05-14-at-5-05-34-PM-1.jpg",
      type: "past"
    },
    {
      id: "past-design-alchemy",
      name: "DESIGN ALCHEMY",
      date: "Oct 4",
      venue: "Kamraj Auditorium",
      eventType: "Workshop", // Added event type
      description: "From concept to clickable! 🎯 Step into our hands-on workshop, 'Design Alchemy: Figma Fundamentals', where your ideas come to life. Ready to unleash your creativity and craft stunning designs?",
      image: "https://i.postimg.cc/13hBZWCH/Whats-App-Image-2025-05-14-at-5-05-34-PM.jpg",
      type: "past"
    },
    {
      id: "past-sdg",
      name: "SDG FUTURE FORWARD",
      date: "Oct 8",
      venue: "SMV 209",
      eventType: "Workshop", // Added event type
      description: "Step into a world where bold ideas meet green innovation! Join us for 'Future Forward: Towards a Greener Tomorrow', as we embark on an exploration of the Sustainable Development Goals under visionary guidance.",
      image: "https://i.postimg.cc/Y9n8KMZG/Whats-App-Image-2025-05-14-at-5-05-33-PM-2.jpg",
      type: "past"
    },
    {
      id: "past-light-the-way",
      name: "LIGHT THE WAY",
      date: "Oct 9",
      venue: "Greenos",
      eventType: "Event", // Added event type
      description: "Get ready to illuminate your mind!🌟 Join us in celebrating mental health with creativity and connection!🙌✨ Explore our fun stalls filled with surprises and artistic delights.🎪❤ Let's shine a light on mental well-being together. 💫",
      image: "https://i.postimg.cc/268TKVcN/Whats-App-Image-2025-05-14-at-5-05-33-PM-1.jpg",
      type: "past"
    },
    {
      id: "past-mission-milkyway",
      name: "MISSION MILKYWAY",
      date: "Oct 10",
      venue: "MB 210",
      eventType: "Competition", // Added event type
      description: "Join us for an out-of-this-world☄event this space week and blow some steam off at Mission Milkyway 🚀 Gather up your crew and prepare for some fun yet competitive games and challenges, but don't float out too far, make sure to make it back to Earth in time for CATs 😉 #SpaceWeek #VITV",
      image: "https://i.postimg.cc/G3fzX3v6/Whats-App-Image-2025-05-14-at-5-05-33-PM.jpg",
      type: "past"
    },
    {
      id: "past-pillow-fight",
      name: "PILLOW FIGHT",
      date: "21-22 FEB",
      venue: "Woodys",
      eventType: "Competition", // Added event type
      description: "luff flies, cheers ignite—who will stand tall in this feathery fight? Not all battles need armor and swords—some just need the perfect swing. 🛡⚔ Brace yourself for a showdown where quick reflexes and fearless strikes will decide the last one standing. 🫣🪶",
      image: "https://i.postimg.cc/5yXgfDWP/Whats-App-Image-2025-05-14-at-5-05-29-PM.jpg",
      type: "past"
    },
    {
      id: "past-shenanigans",
      name: "SHENANIGANS",
      date: "8 MARCH",
      venue: "Opp SMV",
      eventType: "Event", // Added event type
      description: "Glitz, glam, and a little spree, SHE-NANIGANS is the place to be! 💃🏻✨ A day to celebrate strength, resilience, and the unstoppable spirit of women! From laughter-filled moments to inspiring conversations, let's come together to uplift, empower, and embrace the magic we bring to the world. 🩷🎀 Whether you're here to express, explore, or simply enjoy the vibes, this is your time to shine!🌸✨",
      image: "https://i.postimg.cc/hGn2VCVj/Whats-App-Image-2025-05-14-at-5-05-26-PM.jpg",
      type: "past"
    }
  ];

  // Filter events into upcoming and past based on the 'type' property
  const upcomingEvents = allEvents.filter(event => event.type === "upcoming") as EventCardProps[];
  const previousEvents = allEvents.filter(event => event.type === "past") as PreviousEventProps[];

  // Select the first 3 upcoming events to feature in the vertical slider
  const featuredUpcomingEvents = upcomingEvents.slice(0, 3);
  // Select the LAST 3 upcoming events for the Proposed Events grid
  const proposedEvents = upcomingEvents.slice(-3);


  return (
    <>
      {/* Hero Section (assuming this component exists and is correctly implemented) */}
      <HeroSection
        title="Club Events"
        subtitle="Discover our magical workshops, exhibitions, and creative gatherings."
      />

      {/* Main events content section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tabs for switching between Upcoming and Past Events */}
          <Tabs defaultValue="upcoming" className="w-full">
            {/* Tab list (Upcoming/Past) */}
            <div className="flex justify-center mb-8">
              <TabsList className="bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>

            {/* Content for Upcoming Events tab */}
            <TabsContent value="upcoming">
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-8 text-center">
                  Featured Upcoming Events
                </h2>
                {/* Fixed vertical display for featured upcoming events */}
                <div className="w-full max-w-2xl mx-auto">
                  <VerticalEventSlider events={featuredUpcomingEvents} />
                </div>
              </div>

              {/* Grid for Proposed events */}
              {/* Only show this section if there are proposed events (at least 3 upcoming events exist) */}
              {proposedEvents.length > 0 && (
                <div className="mt-16">
                  {/* Changed heading to Proposed Events */}
                  <h3 className="text-2xl font-serif font-medium mb-8 text-center">
                    Proposed Events
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map through the proposed events (last 3 upcoming) and display them as cards */}
                    {proposedEvents.map(event => (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        description={event.description}
                        image={event.image}
                        link={event.link}
                        category={event.category}
                      />
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Content for Past Events tab */}
            <TabsContent value="past">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-8 text-center">
                Previous Events
              </h2>

              {/* Grid layout for previous events */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through previous events and display them as cards */}
                {previousEvents.map((event) => (
                  <PreviousEventCard
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    date={event.date}
                    venue={event.venue}
                    eventType={event.eventType}
                    description={event.description}
                    image={event.image}
                    type={event.type}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section for hosting own event */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Host Your Own Event</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Are you a member with a creative idea for an event? We encourage our community to propose and lead their own magical gatherings.
          </p>
          <Button asChild className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-6 py-2">
            <Link to="/contact">Submit Your Idea</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Events;
