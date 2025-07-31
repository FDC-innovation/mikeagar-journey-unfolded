import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, ExternalLink } from "lucide-react";
import { useState } from "react";
import musicStageImage from "@/assets/music-stage.jpg";

const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-primary/5 via-background to-gold/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            The Musical Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Bollywood stages to soulful ghazals, music remains the eternal thread that weaves through Mike's life story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Music Player Card */}
          <Card className="overflow-hidden shadow-medium hover:shadow-gold transition-all duration-500 group">
            <div 
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${musicStageImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="glass"
                  size="lg"
                  className="w-20 h-20 rounded-full group-hover:scale-110 transition-all duration-300"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary-foreground" />
                  ) : (
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  )}
                </Button>
              </div>
            </div>
            
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                Kabhi Bhoola Kabhi Yaad Kiya
              </h3>
              <p className="text-muted-foreground mb-4">
                The song that touched millions of hearts and established Mike as a memorable voice in Bollywood.
              </p>
              
              {/* Audio Progress Bar (Mock) */}
              <div className="mb-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <span>0:00</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-gold transition-all duration-1000 ${isPlaying ? 'w-1/3' : 'w-0'}`}
                    ></div>
                  </div>
                  <span>4:32</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <div className="w-20 h-1 bg-secondary rounded-full">
                    <div className="w-3/4 h-full bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full group">
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Listen on YouTube
              </Button>
            </CardContent>
          </Card>

          {/* Music Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-gold bg-gold/5">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">The Bollywood Era</h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Music was my first language of expression. When I sang 'Kabhi Bhoola Kabhi Yaad Kiya,' 
                  I never imagined it would resonate with so many hearts across the world."
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary bg-primary/5">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">Return to Roots</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Now, after decades in the tech world, Mike is returning to his musical roots with new ghazals 
                  and bhajans, blending traditional melodies with contemporary arrangements.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-gold bg-gold/5">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">Musical Philosophy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Music and technology may seem different, but both require passion, precision, and the ability 
                  to connect with people. Both create harmony from complexity."
                </p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" className="flex-1">
                New Releases
              </Button>
              <Button variant="outline" className="flex-1">
                Musical Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;