import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Instagram, Linkedin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Interface defining the structure of member data
interface MemberData {
  name: string;
  role: string;
  instagram: string;
  linkedin?: string; // LinkedIn is optional
  image: string; // URL for the member's image
}

// Component to display a single member card
const MemberCard = ({ member }: { member: MemberData }) => {
  return (
    // Card container with styling
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden h-full rounded-lg shadow-lg">
      {/* Image container with a gradient border and aspect ratio */}
      <div className="p-1 bg-gradient-to-r from-magic-purple via-magic-teal to-magic-gold rounded-t-xl">
        <AspectRatio ratio={1} className="bg-muted/20">
          {/* Member image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center rounded-t-lg"
            onError={(e) => {
              // Fallback to a generic placeholder if the image fails to load
              // Using placehold.co for a reliable fallback image URL
              (e.target as HTMLImageElement).src = "https://placehold.co/600x400/333333/FFFFFF?text=Image+Not+Found";
            }}
            // Inline styles for object fit and background blend mode
            style={{ objectFit: "cover", backgroundBlendMode: "overlay", backgroundColor: "rgba(38, 30, 58, 0.7)" }}
          />
        </AspectRatio>
      </div>
      {/* Card content area */}
      <CardContent className="p-6 text-center"> {/* Added text-center for content alignment */}
        {/* Member name and role */}
        <h3 className="text-xl font-serif mb-1">{member.name}</h3>
        <p className="text-accent mb-4">{member.role}</p>

        {/* Social media links */}
        <div className="flex justify-center gap-3"> {/* Centered the social icons */}
          {/* Instagram link */}
          <a
            href={member.instagram}
            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-muted-foreground hover:text-white" // Added text color classes
            aria-label={`${member.name}'s Instagram`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" /> {/* Instagram icon */}
          </a>
          {/* LinkedIn link (conditionally rendered) */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-muted-foreground hover:text-white" // Added text color classes
              aria-label={`${member.name}'s LinkedIn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" /> {/* LinkedIn icon */}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Component for displaying a board year in a carousel
const BoardCarousel = ({ year, members }: { year: string, members: MemberData[] }) => {
  return (
    <div className="my-12">
      {/* Board year heading */}
      <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-8 text-center">
        Board of {year}
      </h2>

      {/* Carousel for board members */}
      <Carousel
        className="max-w-6xl mx-auto" // Max width and auto margins for centering
        opts={{
          align: "start", // Align items to the start
          loop: true, // Loop the carousel
        }}
      >
        <CarouselContent>
          {/* Map through members and create a CarouselItem for each */}
          {members.map((member, index) => (
            // Carousel item with responsive basis and padding
            <CarouselItem key={member.name} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 pl-4"> {/* Using member.name as key, assuming names are unique */}
              <MemberCard member={member} /> {/* Render MemberCard */}
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel navigation buttons */}
        <div className="flex justify-center mt-8">
          {/* Previous button */}
          <CarouselPrevious className="relative static mx-2" /> {/* Positioning and spacing */}
          {/* Next button */}
          <CarouselNext className="relative static mx-2" /> {/* Positioning and spacing */}
        </div>
      </Carousel>
    </div>
  );
};

// Main Members component
const Members = () => {
  // Data for 2025 board members with corrected image URLs (placeholders)
  const boardMembers2025: MemberData[] = [
    {
      name: "Palak Goyal",
      role: "President",
      instagram: "https://www.instagram.com/palak__goyal2404/",
      linkedin: "https://www.linkedin.com/in/palak-goyal-362309222/",
      image: "https://i.postimg.cc/pTvbjcsQ/palak-pic.jpg"
    },
    {
      name: "Shriya Garg",
      role: "Vice President",
      instagram: "https://www.instagram.com/_shriyagarg_26/",
      linkedin: "https://www.linkedin.com/in/shriya-garg-sg26/",
      image: "https://i.postimg.cc/ncnsZD86/Whats-App-Image-2025-05-14-at-9-15-23-PM.jpg"
    },
    {
      name: "Veda Chandergi",
      role: "General Secretary",
      instagram: "https://www.instagram.com/vedach05/",
      linkedin: "https://www.linkedin.com/in/veda-chandergi-5b9611215/",
      image: "https://i.postimg.cc/jqWm5bqV/veda-pic.jpg"
    },
    {
      name: "Anushka Chandergi",
      role: "Design Head",
      instagram: "https://www.instagram.com/anushkavc0302/",
      linkedin: "https://www.linkedin.com/in/anushka-chandergi-535925213/",
      image: "https://i.postimg.cc/D07jvtBD/anushka-pic.jpg"
    },
    {
      name: "Haritha Nivrithi",
      role: "Editorial Head",
      instagram: "https://www.instagram.com/haritha_nivrithi/",
      linkedin: "https://www.linkedin.com/in/haritha-nivrithi-992267227/",
      image: "https://i.postimg.cc/NFWK7wSC/haritha-pic.jpg"
    },
    {
      name: "Surbhi Raj",
      role: "Events Head",
      instagram: "https://www.instagram.com/surbhiraj979/",
      linkedin: "https://www.linkedin.com/in/surbhi-raj-545018225/",
      image: "https://i.postimg.cc/XYvwjV3d/surbhi-pic.jpg"
    },
    {
      name: "Pawan Kumar Sahu",
      role: "Operations Head",
      instagram: "https://www.instagram.com/pawan_kumar_sahu_s19/",
      linkedin: "https://www.linkedin.com/in/pawan-kumar-sahu-541401225/",
      image: "https://i.postimg.cc/nLH3BjH3/PAWAN.jpg"
    },
    {
      name: "Shubh Kumar",
      role: "Logistics Head",
      instagram: "https://www.instagram.com/shubhkumar763/",
      linkedin: "https://www.linkedin.com/in/shubh-kumar-24359122a/",
      image: "https://i.postimg.cc/L43SDC58/shubh.jpg"
    },
    {
      name: "Parth Khandelwal",
      role: "Finance Head",
      instagram: "https://www.instagram.com/parthkhandelwal78/",
      linkedin: "https://www.linkedin.com/in/parth-khandelwal-pk78/",
      image: "https://i.postimg.cc/rwbptWCk/PARTH.jpg"
    },
    {
      name: "Kashish Agarwal",
      role: "PR & Outreach Head",
      instagram: "https://www.instagram.com/ag_kashish02/",
      linkedin: "https://www.linkedin.com/in/kashish-agarwal-ka02/",
      image: "https://i.postimg.cc/FKRJ4GyZ/kashish-pic.jpg"
    }
  ];

  // Data for 2024 board members (image URLs kept as is)
  const boardMembers2024: MemberData[] = [
    {
      name: "Nivid Saxena",
      role: "President",
      instagram: "http://instagram.com/beast_boyy_2310/",
      linkedin: "https://www.linkedin.com/in/nividsaxena/",
      image: "https://i.postimg.cc/BnRjMmTL/IMG-20250515-WA0004.jpg"
    },
    {
      name: "Love Soni",
      role: "Vice President",
      instagram: "https://www.instagram.com/lovesoni_12/",
      linkedin: "https://www.linkedin.com/in/love-soni-69511321a/",
      image: "https://i.postimg.cc/rmKV4wbB/Love.png"
    },
    {
      name: "Tanisha Chetani",
      role: "General Secretary",
      instagram: "https://www.instagram.com/_tanisha_2803/",
      linkedin: "https://www.linkedin.com/in/tanisha-chetani/",
      image: "https://i.postimg.cc/Y9nxXbd4/Tanisha.png"
    },
    {
      name: "Rohit Krishna",
      role: "Design Head",
      instagram: "https://www.instagram.com/r0hitkrishna/",
      linkedin: "https://www.linkedin.com/in/rohit-krishna/",
      image: "https://i.postimg.cc/rw0Nf14s/Rohit.png"
    },
    {
      name: "Sruti Samantaray",
      role: "Editorial Head",
      instagram: "https://www.instagram.com/sruti.samantaray/",
      linkedin: "https://www.linkedin.com/in/sruti-samantaray/",
      image: "https://i.postimg.cc/CKCP4CyD/Sruti.png"
    },
    {
      name: "Anshika Babel",
      role: "Creative Head",
      instagram: "https://www.instagram.com/anshikababel/",
      linkedin: "https://www.linkedin.com/in/anshika-babel/",
      image: "https://i.postimg.cc/RVqFtXr3/Anshika.png"
    },
    {
      name: "Shravya Jain",
      role: "Events Head",
      instagram: "https://www.instagram.com/shravya.j_/",
      linkedin: "https://www.linkedin.com/in/shravya-jain/",
      image: "https://i.postimg.cc/vHSp1vMZ/Shravya.png",
    },
    {
      name: "Shubhi Nair",
      role: "Operations Head",
      instagram: "https://www.instagram.com/shubhi_nair/",
      linkedin: "https://www.linkedin.com/in/shubhi-nair/",
      image: "https://i.postimg.cc/W40KHLZd/Shubhi.png"
    },
    {
      name: "Tanishka Kothavale",
      role: "Logistics Head",
      instagram: "https://www.instagram.com/tanishkaa_2601/",
      linkedin: "https://www.linkedin.com/in/tanishka-kothavale/",
      image: "https://i.postimg.cc/13QYV72P/tanishka.png"
    },
    {
      name: "Abhinandan Agarwal",
      role: "Finance Head",
      instagram: "https://www.instagram.com/abhhinandann/",
      linkedin: "https://www.linkedin.com/in/abhinandan-agarwal/",
      image: "https://i.postimg.cc/yd5hHWcn/Abhinandan.png"
    },
    {
      name: "Adarsh Anand",
      role: "PR & Outreach Head",
      instagram: "https://www.instagram.com/adarsh__185/",
      linkedin: "https://www.linkedin.com/in/adarsh-anand/",
      image: "https://i.postimg.cc/7h3NnwJV/Adarsh.png"
    }
  ];

  return (
    <>
      {/* Hero section for the Members page */}
      <HeroSection
        title="Board Members"
        subtitle="Meet the magical minds behind the Creativity Club."
      />

      {/* Section displaying board members for different years */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Board members carousel for 2025 */}
          <BoardCarousel year="2025" members={boardMembers2025} />
          {/* Divider between sections */}
          <div className="magical-divider my-16"></div> {/* Assuming magical-divider is a custom class */}
          {/* Board members carousel for 2024 */}
          <BoardCarousel year="2024" members={boardMembers2024} />
        </div>
      </section>

      {/* Section encouraging users to join the team */}
      <section className="py-12 px-4 bg-gradient-to-b from-background to-card/30"> {/* Background gradient */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Join Our Team</h2>
          {/* Description text */}
          <p className="text-xl text-muted-foreground mb-8">
            Interested in becoming a board member? Elections are held annually in September, and all club members are eligible to run for positions.
          </p>
          {/* Additional description text */}
          <p className="text-muted-foreground mb-6">
            Board members serve one-year terms and are responsible for planning club events, managing resources, and ensuring that the club continues to be a magical space for creative expression.
          </p>
          {/* Sparkling effect (assuming custom styling) */}
          <div className="sparkling absolute bottom-1/4 right-1/4"></div>
        </div>
      </section>
    </>
  );
};

export default Members;
