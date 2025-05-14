
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Coins, Pencil, Tent, Package, Users } from "lucide-react"; // Assuming these icons are still desired

// Interface for Domain Card properties
interface DomainCardProps {
  icon: React.ReactNode; // Icon for the domain
  title: string; // Title of the domain (e.g., DESIGN DOMAIN)
  domainHead: string; // Title for the domain head (random name)
  description: string; // Description of the domain
  imageUrl: string; // URL for the sample image
}

// Component to display a single Domain Card
const DomainCard = ({ icon, title, domainHead, description, imageUrl }: DomainCardProps) => {
  return (
    // Card styling with rounded corners and subtle background
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden h-full rounded-lg shadow-lg">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          {/* Domain Icon */}
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            {icon}
          </div>
          {/* Domain Title */}
          <h3 className="text-xl font-serif">{title}</h3>
        </div>

        {/* Sample Image */}
        {/* Added a sample image from Unsplash above the description */}
        <div className="mb-4">
           <img
            src={imageUrl} // Use the image URL from the data
            alt={`Sample image for ${title}`}
            className="w-full h-auto rounded-md object-cover" // Added object-cover for better image fitting
            style={{ maxHeight: '200px' }} // Optional: Limit image height for consistency
          />
        </div>

        {/* Domain Head Title */}
        {/* Added the domainHead title above the description */}
        <h4 className="text-lg font-semibold mb-2 text-primary">{domainHead}</h4>

        {/* Domain Description */}
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

// Main Domains component
const Domains = () => {
  // Data for each domain
  const domainData = [
    {
      title: "DESIGN DOMAIN",
      domainHead: "Anushka Chandergi", // Sample random name
      description: "The visual brain of the club! From posters to merch, this team turns ideas into eye-catching designs that speak for the club.",
      icon: <Palette className="h-6 w-6 text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1496262966056-33c82413524c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample Design image
    },
    {
      title: "FINANCE DOMAIN",
      domainHead: "Parth Khandelwal", // Sample random name
      description: "The money minds! They handle budgets, sponsorships, and make sure every rupee is smartly spent and tracked.",
      icon: <Coins className="h-6 w-6 text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4ce2cd182f02?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample Finance image
    },
    {
      title: "EDITORIAL DOMAIN",
      domainHead: "Haritha Nivrithi", // Sample random name
      description: "Where word magic happens! From quirky captions to event write-ups, this team adds the sparkle to all things written.",
      icon: <Pencil className="h-6 w-6 text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample Editorial image
    },
    {
      title: "EVENTS & OPERATIONS",
      domainHead: "Surbhi Raj & Pawan Kumar", // Sample random name
      description: "The action squad! They plan and execute everything from fests to casual meetups—bringing every event idea to life.",
      icon: <Tent className="h-6 w-6 text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1505237531087-d66f3a2f147a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample Events image
    },
    {
      title: "LOGISTICS DOMAIN",
      domainHead: "Shubh Kumar", // Sample random name
      description: "The behind-the-scenes heroes! They handle everything from resources to on-ground execution, ensuring smooth and stress-free events.",
      icon: <Package className="h-6 w-6 text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1587495984134-77202e289f0d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample Logistics image
    },
    {
      title: "PR DOMAIN",
      domainHead: "Kashish Agarwal", // Sample random name
      description: "The voice of the club! They build our public presence, manage social media, and connect with sponsors and partners.",
      icon: <Users className="h-6 w-6 text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1544006659-f0b21880ce51?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample PR image
    }
  ];

  return (
    <>
      {/* Hero Section for the Domains page */}
      <HeroSection
        title="Our Domains"
        subtitle="Explore the different areas where our creativity comes to life."
      />

      {/* Section displaying the domain cards in a grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Grid layout for domain cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through domain data and render a DomainCard for each */}
            {domainData.map((domain, index) => (
              <DomainCard
                key={index} // Using index as key, consider a unique ID if available
                icon={domain.icon}
                title={domain.title}
                domainHead={domain.domainHead} // Pass the domainHead
                description={domain.description}
                imageUrl={domain.imageUrl} // Pass the image URL
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Domains;
