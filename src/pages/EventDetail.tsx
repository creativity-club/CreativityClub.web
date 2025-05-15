import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  
  // Mock data - in a real app, this would come from an API or database
  const events = {
    "creative-writing": {
      title: "Creative Writing Workshop",
      date: "May 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Club Meeting Room, 123 Creativity Street",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      description: "Join us for a magical journey into the world of creative writing. This workshop is designed for writers of all levels, from beginners to experienced wordsmiths. Our facilitator, Jane Smith, will guide you through exercises designed to spark your imagination and help you craft compelling stories.",
      facilitator: "Jane Smith",
      materials: "Notebook, pen, and your imagination",
      signup: true
    },
    "art-exhibition": {
      title: "Magical Art Exhibition",
      date: "June 5, 2023",
      time: "7:00 PM - 10:00 PM",
      location: "Gallery Space, 456 Artistic Avenue",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      description: "Explore a collection of enchanting artworks created by our talented club members. The exhibition will feature paintings, drawings, sculptures, and mixed media pieces that capture the magic of creativity. Refreshments will be served, and many of the artists will be present to discuss their work.",
      facilitator: "Art Committee",
      materials: "None required",
      signup: false
    },
    "photography-workshop": {
      title: "Capturing Magic: Photography Workshop",
      date: "June 20, 2023",
      time: "3:00 PM - 5:30 PM",
      location: "Club Meeting Room, 123 Creativity Street",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Learn how to capture magical moments through the lens of your camera. This workshop will cover the basics of composition, lighting, and editing, with a focus on creating images that evoke a sense of wonder and enchantment. Suitable for all skill levels and equipment types, from smartphones to DSLRs.",
      facilitator: "Michael Johnson",
      materials: "Camera (any type, including smartphones)",
      signup: true
    },
    "poetry-night": {
      title: "Enchanted Poetry Night",
      date: "April 10, 2023",
      time: "7:00 PM - 9:00 PM",
      location: "The Cozy Corner Café, 789 Literary Lane",
      image: "https://images.unsplash.com/photo-1470091688026-38b51162c8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      description: "An evening of mystical poetry readings and performances by club members. This event featured original works as well as beloved classics that explore themes of magic, wonder, and creativity. The night included open mic sessions for spontaneous contributions.",
      facilitator: "Poetry Circle",
      materials: "Your favorite poems to share (optional)",
      signup: false
    },
    "drawing-class": {
      title: "Magical Creatures Drawing Class",
      date: "March 25, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Club Meeting Room, 123 Creativity Street",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description: "This class guided participants in drawing fantastical creatures from their imagination. Starting with basic shapes and progressing to detailed renderings, the workshop covered anatomy, texture, and narrative elements in creature design.",
      facilitator: "Alex Rivera",
      materials: "Sketchbook, pencils, erasers (provided)",
      signup: false
    },
    "collaborative-project": {
      title: "Collaborative Storytelling Project",
      date: "February 18, 2023",
      time: "6:30 PM - 8:30 PM",
      location: "Club Meeting Room, 123 Creativity Street",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      description: "Participants joined forces to craft an enchanting collective story. Using a structured approach to collaborative fiction, the group created characters, settings, and plot points that intertwined into a coherent and magical narrative.",
      facilitator: "Storytelling Team",
      materials: "Notebook and pen",
      signup: false
    }
  };
  
  const event = eventId && events[eventId as keyof typeof events];
  
  if (!event) {
    return (
      <div className="min-h-screen pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Event Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            The event you're looking for does not exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/events">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-28 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/events" className="flex items-center text-primary mb-6 hover:text-primary/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Events
        </Link>
        
        <div className="rounded-xl overflow-hidden mb-8">
          <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-serif font-medium mb-4">{event.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <h3 className="text-lg font-medium">Date</h3>
              </div>
              <p className="text-muted-foreground">{event.date}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 className="text-lg font-medium">Time</h3>
              </div>
              <p className="text-muted-foreground">{event.time}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 className="text-lg font-medium">Location</h3>
              </div>
              <p className="text-muted-foreground">{event.location}</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none mb-8">
          <h2 className="text-2xl font-serif mb-4">About This Event</h2>
          <p className="text-muted-foreground">{event.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif mb-3">Facilitator</h3>
              <p className="text-muted-foreground">{event.facilitator}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif mb-3">Materials Needed</h3>
              <p className="text-muted-foreground">{event.materials}</p>
            </CardContent>
          </Card>
        </div>
        
        {event.signup ? (
          <div className="rounded-xl p-1 magic-border">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-2xl font-serif mb-4">Ready to Join Us?</h3>
              <p className="text-muted-foreground mb-6">
                Spaces for this event are limited. Reserve your spot now!
              </p>
              <Button className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-8 py-2">
                Sign Up Now
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-serif mb-4">Event Completed</h3>
            <p className="text-muted-foreground mb-6">
              This event has already taken place. Check our events page for upcoming activities.
            </p>
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary">
              <Link to="/events">View More Events</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
