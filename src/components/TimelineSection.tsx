import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Music,
  Briefcase,
  Heart,
  Plane,
  Building,
  Globe,
  Star,
} from "lucide-react";

const timelineData = [
  {
    year: "Early Years",
    title: "Small Town Dreams in Dehradun",
    description:
      "Born and raised in the serene hills of Dehradun, where dreams took root amidst the mountains.",
    icon: MapPin,
    color: "text-primary",
  },
  {
    year: "Bollywood Era",
    title: "Breakthrough with 'Kabhi Bhoola Kabhi Yaad Kiya'",
    description:
      "A voice that touched millions, establishing his mark in the Hindi film industry with unforgettable melodies.",
    icon: Music,
    color: "text-[#56bcbd]",
  },
  {
    year: "Behind the Scenes",
    title: "Production & Artist Management",
    description:
      "Expanding beyond singing into production and managing artists, understanding the business of entertainment.",
    icon: Star,
    color: "text-primary-light",
  },
  {
    year: "Life Lessons",
    title: "Setbacks & Growth",
    description:
      "Navigating personal challenges and professional setbacks that shaped resilience and wisdom.",
    icon: Heart,
    color: "text-muted-foreground",
  },
  {
    year: "New Horizons",
    title: "Migration to the United States",
    description:
      "A bold move across continents, embracing new opportunities in the land of innovation.",
    icon: Plane,
    color: "text-primary",
  },
  {
    year: "Tech Breakthrough",
    title: "IT Industry Success",
    description:
      "25+ years building expertise across multiple industries, working with giants like Verizon and JP Morgan.",
    icon: Briefcase,
    color: "text-[#56bcbd]",
  },
  {
    year: "Entrepreneurship",
    title: "Founding Fast Data Connect",
    description:
      "Creating a company that bridges technology gaps, specializing in Salesforce and Google Cloud solutions.",
    icon: Building,
    color: "text-primary-light",
  },
  {
    year: "Global Impact",
    title: "Vision Forward",
    description:
      "Balancing business success with a return to music, inspiring others through innovation and artistry.",
    icon: Globe,
    color: "text-[#56bcbd]",
  },
];

const TimelineSection = () => {
  return (
    <section id="journey" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            The Journey Unfolds
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the mountains of Dehradun to the global tech landscape, every
            chapter tells a story of passion, resilience, and transformation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    } ml-12 md:ml-0`}
                  >
                    <Card className="hover:shadow-medium transition-all duration-300 group hover:scale-105">
                      <CardContent className="p-6">
                        <div
                          className={`flex items-start gap-4 ${
                            isEven ? "" : "md:flex-row-reverse md:text-right"
                          }`}
                        >
                          <div
                            className={`p-3 rounded-full bg-secondary group-hover:shadow-gold transition-all duration-300 ${item.color}`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-[#56bcbd] mb-1">
                              {item.year}
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-primary-light transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
