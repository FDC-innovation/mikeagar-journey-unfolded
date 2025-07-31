import { Card, CardContent } from "@/components/ui/card";
import { Quote, Heart, Lightbulb, Target } from "lucide-react";

const InsightsSection = () => {
  const insights = [
    {
      icon: Quote,
      title: "On Balancing Passion & Practicality",
      quote: "Life taught me that pursuing your passion and being practical aren't mutually exclusive. Music gave me creativity, business gave me structure, and together they created harmony.",
      category: "Philosophy"
    },
    {
      icon: Heart,
      title: "On Family & Trust",
      quote: "Success means nothing if you can't share it with those who matter most. Family has been my anchor through every storm and celebration.",
      category: "Personal"
    },
    {
      icon: Lightbulb,
      title: "On Innovation & Tradition",
      quote: "The best innovations happen when you respect tradition but aren't bound by it. Whether in music or technology, progress comes from honoring the past while embracing the future.",
      category: "Innovation"
    },
    {
      icon: Target,
      title: "On Resilience & Growth",
      quote: "Every setback was actually a setup for a comeback. The music industry taught me about rejection, the tech world taught me about iteration. Both taught me about persistence.",
      category: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-background to-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Personal Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reflections from a journey that spans continents, industries, and decades of learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-medium transition-all duration-500 group hover:scale-105 border-l-4 border-l-gold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gold mb-1">{insight.category}</div>
                      <h3 className="font-serif text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
                        {insight.title}
                      </h3>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed italic text-lg border-l-2 border-l-gold/30 pl-4">
                    "{insight.quote}"
                  </blockquote>
                  
                  <div className="text-right mt-4">
                    <span className="text-sm font-medium text-primary">— Mike Agar</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Personal Touch */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 max-w-3xl shadow-medium bg-gradient-to-r from-primary/5 to-gold/5">
            <div className="space-y-4">
              <Quote className="w-12 h-12 text-gold mx-auto" />
              <blockquote className="font-serif text-2xl md:text-3xl text-primary leading-relaxed italic">
                "The melody of life isn't always harmonious, but every note — even the discordant ones — contributes to the symphony of who we become."
              </blockquote>
              <div className="text-gold font-medium">— Mike Agar's Life Philosophy</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;