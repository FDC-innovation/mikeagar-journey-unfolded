import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Music } from "lucide-react";
import heroImage from "@/assets/hero-mike-agar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                From Dehradun to the
                <span className="text-gold block animate-shimmer bg-gradient-to-r from-gold via-gold-light to-gold bg-[length:200%_100%] bg-clip-text text-transparent">
                  World
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl font-serif italic">
                The Journey of Mike Agar
              </p>
            </div>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              A voice that once echoed through Bollywood, now drives innovation across the global tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore His Story
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="gold" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Music className="group-hover:animate-pulse" />
                Listen to the Song
              </Button>
              
              <Button 
                variant="glass" 
                size="lg" 
                className="group text-primary-foreground"
                onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="group-hover:scale-110 transition-transform" />
                See What He's Building
              </Button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="hidden lg:block relative">
            <div className="absolute top-10 right-10 w-32 h-32 bg-gold/20 rounded-full animate-float blur-xl"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-light/30 rounded-full animate-float blur-lg" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gold/30 rounded-full animate-float blur-md" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;