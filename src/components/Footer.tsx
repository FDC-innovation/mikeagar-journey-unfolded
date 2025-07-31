import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Music, Building, Quote } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gold">Mike Agar</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              From Dehradun to the world — bridging music, technology, and human connection.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <Music className="w-4 h-4 text-gold" />
              </div>
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <Building className="w-4 h-4 text-gold" />
              </div>
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-gold" />
              </div>
            </div>
          </div>

          {/* Journey */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary-foreground">The Journey</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#journey" className="hover:text-gold transition-colors">Life Timeline</a></li>
              <li><a href="#music" className="hover:text-gold transition-colors">Musical Legacy</a></li>
              <li><a href="#business" className="hover:text-gold transition-colors">Business Success</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Business */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary-foreground">Business</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-gold transition-colors">Fast Data Connect</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Speaking</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary-foreground">Connect</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#connect" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Mike Agar. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                Made with <Heart className="w-4 h-4 inline text-gold" /> to inspire and connect.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-primary-foreground/60 text-sm hidden md:block">
                Privacy Policy • Terms of Service
              </div>
              <Button
                variant="glass"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground hover:text-gold"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-8 text-center">
          <blockquote className="font-serif text-lg italic text-primary-foreground/80 max-w-2xl mx-auto">
            "Every ending is a new beginning, every setback a setup for a comeback, 
            and every dream a blueprint for reality."
          </blockquote>
          <p className="text-gold text-sm mt-2">— Mike Agar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;