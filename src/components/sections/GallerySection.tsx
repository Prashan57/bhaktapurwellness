import { InView } from '@/components/motion/InView';

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 scroll-mt-28">
      <div className="container mx-auto px-4">
        <InView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
        </InView>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <InView key={item} delay={i * 75}>
              <div className="group aspect-square bg-foreground/5 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-colors" />
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
