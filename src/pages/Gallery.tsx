
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

/*const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images (placeholders for now)
  const galleryImages = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: `https://source.unsplash.com/random/800x600?creativity&sig=${i}`,
    alt: `Gallery image ${i + 1}`
  }));
*/

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    "https://i.postimg.cc/7ZYq98mv/1.jpg",
    "https://source.unsplash.com/random/800x600?sig=1",
    "https://source.unsplash.com/random/800x600?sig=2",
    "https://source.unsplash.com/random/800x600?sig=3",
    // ... up to 50 images
  ];

  const galleryImages = imageSources.map((src, index) => ({
    id: index + 1,
    src,
    alt: `Gallery image ${index + 1}`
  }));
  return (
    <>
      <HeroSection
        title="Secret Gallery"
        subtitle="A hidden collection of our creative moments"
      />
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden">
                    <AspectRatio ratio={1} className="bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-md"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
