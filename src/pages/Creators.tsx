

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Instagram, Dribbble } from "lucide-react";

// Interface for Creator Profile properties
interface CreatorProps {
  name: string;
  role: string;
  image?: string; // Optional image URL
  bio: string;
  linkedin?: string; // Optional LinkedIn URL
  instagram?: string; // Optional Instagram URL
  dribbble?: string; // Optional Dribbble URL (for Rohit)
}

// Component to display a single Creator Profile card
const CreatorProfile = ({ name, role, image, bio, linkedin, instagram, dribbble }: CreatorProps) => {
  // Generate initials for the avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="group hover:scale-[1.02] transition-all duration-300 rounded-lg shadow-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Top portion with image and overlay */}
        <div className="relative aspect-square overflow-hidden">
          {/* Background gradient for the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
          
          {/* Creator image */}
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-magic-purple to-magic-teal flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{initials}</span>
            </div>
          )}
          
          {/* Info overlay that appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-serif mb-1 text-white">{name}</h3>
            <p className="text-accent/90 font-medium">{role}</p>
          </div>
        </div>
        
        {/* Bottom portion with bio and links */}
        <div className="p-5">
          {/* Bio text - fixed text visibility by changing the text color */}
          <p className="text-sm text-foreground mb-4 h-[60px] line-clamp-3">{bio}</p>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-3 mt-auto">
            {/* LinkedIn Link */}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all text-muted-foreground hover:text-white"
                aria-label={`${name} on LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {/* Instagram Link */}
            {instagram && (
               <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all text-muted-foreground hover:text-white"
                aria-label={`${name} on Instagram`}
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}

            {/* Dribbble Link (for Rohit) */}
            {dribbble && (
               <a
                href={dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all text-muted-foreground hover:text-white"
                aria-label={`${name} on Dribbble`}
              >
                <Dribbble className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Creators component
const Creators = () => {
  // Array of creator data, ordered and updated as requested with sample images
  const creators: CreatorProps[] = [
    {
      name: "Rohit Krishna",
      role: "Project Lead and Ex-Design Head",
      bio: "Led the project development and previously served as the Design Head. Specializes in digital art, UI/UX design.",
      image: "https://i.postimg.cc/zfKtrjtP/test.jpg",
      linkedin: "https://www.linkedin.com/in/r0hitkrishna/",
      instagram: "https://www.instagram.com/r0hitkrishna/",
      dribbble: "https://dribbble.com/r0hitkrishna"
    },
    {
      name: "Shriya Garg",
      role: "Vice President & Project Manager",
      bio: "Oversaw the project management aspects of the website development. Coordinated with team members and ensured project milestones were met.",
      image: "https://i.postimg.cc/ncnsZD86/Whats-App-Image-2025-05-14-at-9-15-23-PM.jpg",
      linkedin: "https://www.linkedin.com/in/shriya-garg-a64b39335/",
      instagram: "https://www.instagram.com/_shriyagarg_26/"
    },
    {
      name: "Parth Khandelwal",
      role: "Finance Head & Developer",
      bio: "Combines financial expertise with web development skills. Led the financial planning and contributed to the development of the Creativity Club website.",
      image: "https://i.postimg.cc/rwbptWCk/PARTH.jpg",
      linkedin: "https://www.linkedin.com/in/parth-khandelwal-24b33127b",
      instagram: "https://www.instagram.com/parthkhandelwal78/"
    },
    {
      name: "Anushka Chandergi",
      role: "Design Head & UI Developer",
      bio: "Contributed to the design implementation and front-end development. Created visual assets and helped structure the user interface elements.",
      image: "https://i.postimg.cc/D07jvtBD/anushka-pic.jpg",
      linkedin: "https://www.linkedin.com/in/anushka-chandergi-17337128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/anushkavc0302/"
    },
    {
      name: "Veda Chandergi",
      role: "General Secretary & Content Manager",
      bio: "Managed content creation and organization for the website. Ensured all information was accurate and effectively communicated.",
      image: "https://i.postimg.cc/jqWm5bqV/veda-pic.jpg",
      linkedin: "https://www.linkedin.com/in/veda-chandergi-7b355528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/vedach05/"
    },
    {
      name: "Haritha Nivrithi",
      role: "Content Writer & Editor",
      bio: "Crafted engaging content and ensured editorial quality for the website.",
      image: "https://i.postimg.cc/NFWK7wSC/haritha-pic.jpg",
      linkedin: "#",
      instagram: "https://www.instagram.com/haritha_nivrithi/"
    },
    {
      name: "Suhani Balchandani",
      role: "Tester & Editor",
      bio: "Ensured the website was bug-free and contributed to content editing.",
      image: "https://i.postimg.cc/6QCq7Mjs/fc8623e2-6942-49ae-a9fc-07cbc433b718.jpg",
      linkedin: "https://www.linkedin.com/in/suhani-balchandani-ab0657235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/suhaniibalchandani?igsh=MWdydWdnZWs2ZTllYw=="
    },
    {
      name: "Aayush Raj",
      role: "Developer & Tester",
      bio: "Contributed to the website's development and testing processes.",
      image: "https://i.postimg.cc/sXqM21ny/aayush.jpg",
      linkedin: "https://www.linkedin.com/in/aayushvz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/aayush.visuals?igsh=ZTFtZ2drd3ppMXM5"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with page title and navigation */}
        <div className="flex flex-col gap-6 items-center text-center mb-16">
          <Link
            to="/"
            className="self-center inline-flex items-center px-4 py-2 text-sm rounded-full bg-white/5 hover:bg-white/10 transition-all text-muted-foreground hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif">
            <span className="text-gradient-primary">Meet Our Creators</span>
          </h1>

          {/* Introductory paragraph */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals who brought the Creativity Club website to life through their collaborative efforts, 
            innovative thinking, and technical expertise.
          </p>
        </div>

        {/* Grid layout for creator profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {/* Map through the creators array and render a CreatorProfile for each */}
          {creators.map((creator) => (
            <CreatorProfile key={creator.name} {...creator} />
          ))}
        </div>
        
        {/* Acknowledgements section */}
        <div className="text-center mt-24 mb-8">
          <h2 className="text-2xl font-serif mb-4">Acknowledgements</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            We extend our gratitude to all contributors, advisors, and supporters who played a role in making this website possible. 
            Your encouragement and feedback have been invaluable to our creative process.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="sparkling absolute top-1/3 left-1/4 opacity-40"></div>
      <div className="sparkling absolute bottom-1/4 right-1/3 opacity-40"></div>
    </div>
  );
};

export default Creators;
