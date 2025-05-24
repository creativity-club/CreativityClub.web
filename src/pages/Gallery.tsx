
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
    "https://i.postimg.cc/Jh1gSvnb/10.jpg",
    "https://i.postimg.cc/qgVDwZS6/11.jpg",
    "https://i.postimg.cc/SQBmHQpC/12.jpg",
    "https://i.postimg.cc/ZqsSH4c9/13.jpg",
    "https://i.postimg.cc/NGHc8hrM/14.jpg",
    "https://i.postimg.cc/x1YnTs8d/15.jpg",
    "https://i.postimg.cc/C1x3nXpF/2.jpg",
    "https://i.postimg.cc/T1yBCbPF/3.jpg",
    "https://i.postimg.cc/PxVBWyd1/4.jpg",
    "https://i.postimg.cc/nL05x2jN/5.jpg",
    "https://i.postimg.cc/1XL2Tznt/6.jpg",
    "https://i.postimg.cc/3r4KL4z3/7.jpg",
    "https://i.postimg.cc/B6zVLvCg/8.jpg",
    "https://i.postimg.cc/sDhtW5qZ/9.jpg",
    "https://i.postimg.cc/9XD7GB2b/16.jpg",
    "https://i.postimg.cc/Z5Svztds/17.jpg",
    "https://i.postimg.cc/3RddF3sN/18.jpg",
    "https://i.postimg.cc/hGCXmX3N/19.jpg",
    "https://i.postimg.cc/YqchQKb2/20.jpg",
    "https://i.postimg.cc/zfDL3Cpn/21.jpg",
    "https://i.postimg.cc/gkvrDSTV/22.jpg",
    "https://i.postimg.cc/6pcqs7wT/23.jpg",
    "https://i.postimg.cc/yNNd7VYj/24.jpg",
    "https://i.postimg.cc/90yXL0Jm/25.jpg",
    "https://i.postimg.cc/wvCT5L54/26.jpg",
    "https://i.postimg.cc/wjqxk6Jz/27.jpg",
    "https://i.postimg.cc/J4WzG3zG/28.jpg",
    "https://i.postimg.cc/t4zMbbYB/29.jpg",
    "https://i.postimg.cc/VLnh7n1Q/30.jpg",
    "https://i.postimg.cc/c4hWL4MP/31.jpg",
    "https://i.postimg.cc/3JRS28Qs/32.jpg",
    "https://i.postimg.cc/VsBQKLT5/33.jpg",
    "https://i.postimg.cc/1XWvbTw7/34.jpg",
    "https://i.postimg.cc/4dQLQndg/35.jpg",




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
