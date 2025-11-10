import { InView } from '@/components/motion/InView';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-foreground/5 scroll-mt-28">
      <div className="container mx-auto px-4">
        <InView>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Get in touch</h2>
        </InView>
        <InView delay={75}>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10">We would love to hear from you. Fill out the form and we’ll get back as soon as possible.</p>
        </InView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          <InView as="div">
            <div className="bg-background rounded-2xl border border-border/20 shadow-sm p-6">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input id="name" type="text" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input id="email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input id="phone" type="tel" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" placeholder="(+977) 98xxxxxxx" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input id="subject" type="text" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" placeholder="How can we help you?" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition" placeholder="Your message here..." />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M3.94 6.44a6.5 6.5 0 1112.12 0l-.007.173c-.05 1.297-.195 2.65-.683 3.83-.516 1.25-1.4 2.3-2.512 3.097l-.026.018-2.166 1.516a1.75 1.75 0 01-2.293-.214l-1.4-1.4a1.75 1.75 0 01-.214-2.293l1.516-2.166.018-.026c.797-1.113 1.847-1.996 3.097-2.512 1.18-.488 2.533-.633 3.83-.683L16.5 4.5a5 5 0 10-10 0v.061a20.7 20.7 0 00-.683 3.83l-.006.173z" clipRule="evenodd" /></svg>
                      <span>Mon–Fri: 9:00–18:00</span>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary px-8">Send Message</button>
                </div>
              </form>
            </div>
          </InView>
          <InView as="div" delay={100}>
            <div className="bg-background rounded-2xl border border-border/20 shadow-sm p-1 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113068.22150022577!2d85.22254214335938!3d27.6745884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b007edc1b69%3A0x68c24b9e7280695d!2sBhaktapur%20Wellness!5e0!3m2!1sen!2snp!4v1762794676817!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhaktapur Wellness location on Google Maps"
                className="w-full h-[320px] md:h-[520px]"
              />
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
