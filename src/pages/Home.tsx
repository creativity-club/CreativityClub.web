import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Coins, Pencil, Tent, Package, Users } from "lucide-react"; 

// Component for the Feature Cards (used in "Ignite Your Imagination" section)
const FeatureCard = ({
  title,
  description,
  icon: Icon,
  linkText,
  linkTo
}: {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  linkText: string;
  linkTo: string;
}) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden rounded-lg shadow-lg">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          to={linkTo}
          className="text-accent inline-flex items-center group"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 transition-transform group-hover:translate-x-1"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
};

// Component for the Upcoming Event card
const UpcomingEvent = () => {
  // Updated event data per user request
  const event = {
    title: "Ice-Breaking Session",
    date: "May 18, 2025", 
    time: "6:00 PM",
    description: "A fun, low-pressure session designed to help members get comfortable, connect with each other, and instantly spark imaginative thinking through engaging activities and prompts. The goal is to break the ice, build rapport, and set a playful, collaborative tone for future creative exploration.",
    link: "/events/ice-breaking-session" 
  };

  return (
    <div className="rounded-xl p-1 magic-border"> 
      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6">
        <div className="mb-4">
          <span className="text-accent text-sm font-medium">UPCOMING EVENT</span>
        </div>
        <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
        <p className="text-muted-foreground mb-4">
          {event.description}
        </p>
        <div className="flex items-center gap-4 text-sm mb-6">
          <div className="flex items-center">
            {/* Calendar icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            {/* Clock icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{event.time}</span>
          </div>
        </div>
        <div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
            <Link to={event.link}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Component to display a single Domain Card (based on your Domains.tsx structure)
interface DomainCardProps {
  icon: React.ReactNode; // Icon for the domain
  title: string; // Title of the domain (e.g., DESIGN DOMAIN)
  description: string; // Description of the domain
  emoji: string; // Emoji for the domain
}

const DomainCard = ({ icon, title, description, emoji }: DomainCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden h-full rounded-lg shadow-lg">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            {icon}
          </div>
          <span className="text-2xl">{emoji}</span>
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};


const Home = () => {
  // Image URLs for the hero section slider
  const sliderImages = [
    "https://i.postimg.cc/jSkvgnRF/pic10.jpg",
    "https://i.postimg.cc/N0MSLwjW/pic9.jpg",
    "https://i.postimg.cc/0yt7kT3M/pic8.jpg",
    "https://i.postimg.cc/gkgWNsQq/pic7.jpg",
    "https://i.postimg.cc/6TJ9wpVV/pic6.jpg",
    "https://i.postimg.cc/zDpSBH4P/pic5.jpg",
    "https://i.postimg.cc/jjvBvSLg/pic4.jpg",
    "https://i.postimg.cc/dt139h3X/pic3.jpg",
    "https://i.postimg.cc/dVsB6mrF/pic2.jpg",
    "https://i.postimg.cc/90DR801c/pic1.jpg"
  ];

  // Data for the Domain Cards (only showing a subset for the homepage)
  const domainData = [
    {
      title: "DESIGN DOMAIN",
      description: "The visual brain of the club! From posters to merch, this team turns ideas into eye-catching designs that speak for the club.",
      emoji: "🎨",
      icon: <Palette className="h-6 w-6 text-primary" />
    },
    {
      title: "FINANCE DOMAIN",
      description: "The money minds! They handle budgets, sponsorships, and make sure every rupee is smartly spent and tracked.",
      emoji: "💵",
      icon: <Coins className="h-6 w-6 text-primary" />
    },
    {
      title: "EDITORIAL DOMAIN",
      description: "Where word magic happens! From quirky captions to event write-ups, this team adds the sparkle to all things written.",
      emoji: "🖊",
      icon: <Pencil className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Sparkling effects (assuming these are styled elsewhere) */}
          <div className="sparkling absolute top-5 left-1/4"></div>
          <div className="sparkling absolute bottom-10 right-1/3"></div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-semibold mb-6 bg-clip-text text-transparent bg-magic-gradient relative">
            Explore Your Magic
          </h1>

          {/* Image Slider */}
          <div className="my-8 max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true, // Loop the carousel
              }}
              className="w-full"
            >
              <CarouselContent>
                {/* Map through slider images */}
                {sliderImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1"> {/* Padding around the image */}
                      <div className="overflow-hidden rounded-xl"> {/* Rounded corners for the image container */}
                        <img
                          src={image}
                          alt={`Creativity Club ${index + 1}`}
                          className="aspect-[16/9] object-cover w-full h-full" // Image styling for aspect ratio and cover
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Carousel Navigation Arrows */}
              <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
                <CarouselPrevious className="relative" />
                <CarouselNext className="relative" />
              </div>
            </Carousel>
          </div>

          {/* Descriptive Text */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-white/80">
            Unlock your creative potential through art, writing, and collaborative magic. Join our community of imaginative souls.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium"
            >
              <Link to="/about">Join Us</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-transparent border border-magic-gold/50 hover:bg-magic-gold/10 text-magic-gold px-8 py-6 rounded-full text-lg font-medium"
            >
              <Link to="/events">Explore Events</Link>
            </Button>
          </div>
        </div>

        {/* Gradient at the bottom of the hero section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Section: Discover Your Creative Tribe & Upcoming Event */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/30"> {/* Added background gradient for visual separation */}
        <div className="max-w-7xl mx-auto">
          {/* Grid for the text content and the upcoming event card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left side: Text content */}
            <div>
              {/* Updated heading text */}
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">
                Discover Your Creative Tribe
              </h2>
              {/* Updated paragraph text */}
              <p className="text-lg text-muted-foreground mb-6">
                The Creativity Club is a vibrant haven for artists, writers, and
                imaginative minds to connect, share ideas, grow their skills, and
                collaborate on inspiring projects.
              </p>
              {/* Updated paragraph text */}
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a seasoned creator or just starting out, you'll find a
                welcoming space in our magical community.
              </p>
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary rounded-md">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            {/* Right side: Upcoming Event card */}
            <div>
              <UpcomingEvent />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Ignite Your Imagination (Feature Cards) */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">Ignite Your Imagination</h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              The Creativity Club is a sanctuary for those who seek to express themselves through various artistic mediums and magical creative pursuits.
            </p>
          </div>

          {/* Grid for Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Creative Workshops"
              description="Attend our regular workshops led by experienced artists and writers."
              icon={(props) => (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h5"></path><path d="M17 12h5"></path><path d="M8 4v16l8-8-8-8z"></path>
                </svg>
              )}
              linkText="View Workshops"
              linkTo="/events"
            />
            <FeatureCard
              title="Collaborative Projects"
              description="Work with fellow members on exciting creative projects and exhibitions."
              icon={(props) => (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 0-6-6"></path><path d="M6 8a6 6 0 0 1 6-6"></path><path d="M6 20.33a6 6 0 0 0 6-6"></path><path d="M18 20.33a6 6 0 0 1-6-6"></path><circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
              linkText="Our Projects"
              linkTo="/about"
            />
            <FeatureCard
              title="Community Events"
              description="Connect with like-minded individuals through our social and networking events."
              icon={(props) => (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 1 0 7.75"></path>
                </svg>
              )}
              linkText="Join Events"
              linkTo="/events"
            />
          </div>
        </div>
      </section>


      {/* Section: Domains */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">Domains</h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-8">
              Discover the different areas where our creativity thrives and projects come to life.
            </p>
          </div>

          {/* Grid for Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Map through domain data and render a DomainCard for each */}
            {domainData.map((domain, index) => (
              <DomainCard
                key={index} // Using index as key, consider a unique ID if available
                icon={domain.icon}
                title={domain.title}
                description={domain.description}
                emoji={domain.emoji} // Assuming emoji is still used in this version of DomainCard
              />
            ))}
          </div>

          {/* Button to explore all domains */}
          <div className="text-center">
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary rounded-md">
              <Link to="/domains">Explore All Domains</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Section: Join Our Magical Journey */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">
            Join Our Magical Journey
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-10">
            Ready to unlock your creative potential? Become a member of the Creativity Club today and start your magical journey with like-minded creators.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
