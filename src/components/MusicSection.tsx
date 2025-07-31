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
    <section
      id="music"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-gold/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            The Musical Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Bollywood stages to soulful ghazals, music remains the eternal
            thread that weaves through Mike's life story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Music Player Card */}
          <Card className="overflow-hidden shadow-medium hover:shadow-gold transition-all duration-500 group">
            {/* <div
              className="min-h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${musicStageImage})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center"></div>
            </div> */}

            <a
              href="https://www.youtube.com/watch?v=CVwg8z-Tg6M&list=RDCVwg8z-Tg6M&start_radio=1"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-96 bg-cover bg-center relative block"
              style={{ backgroundImage: `url(${musicStageImage})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Optional: Add overlay text or icon here */}
              </div>
            </a>

            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
                Kabhi Bhoola Kabhi Yaad Kiya
              </h3>
              <p className="text-muted-foreground mb-4">
                The song that touched millions of hearts and established Mike as
                a memorable voice in Bollywood.
              </p>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.youtube.com/watch?v=CVwg8z-Tg6M&list=RDCVwg8z-Tg6M&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Listen on YouTube
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Music Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-gold bg-gold/5">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">
                  The Bollywood Era
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Music was my first language of expression. When I sang 'Kabhi
                  Bhoola Kabhi Yaad Kiya,' I never imagined it would resonate
                  with so many hearts across the world."
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary bg-primary/5">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">
                  Return to Roots
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Now, after decades in the tech world, Mike is returning to his
                  musical roots with new ghazals and bhajans, blending
                  traditional melodies with contemporary arrangements.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-gold bg-gold/5">
                <h4 className="font-serif text-xl font-semibold text-primary mb-2">
                  Musical Philosophy
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Music and technology may seem different, but both require
                  passion, precision, and the ability to connect with people.
                  Both create harmony from complexity."
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
