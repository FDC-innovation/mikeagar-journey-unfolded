import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Users, TrendingUp, Award, ExternalLink } from "lucide-react";
import techOfficeImage from "@/assets/tech-office.jpg";

const BusinessSection = () => {
  const achievements = [
    { metric: "25+", label: "Years in IT" },
    { metric: "100+", label: "Successful Projects" },
    { metric: "50+", label: "Enterprise Clients" },
    { metric: "5", label: "Industry Verticals" },
  ];

  const companies = [
    "Verizon",
    "JP Morgan",
    "Salesforce",
    "Google Cloud",
    "Microsoft",
    "Oracle",
  ];

  const services = [
    "Salesforce Implementation & Consulting",
    "Google Cloud Platform Solutions",
    "Enterprise Data Analytics",
    "Digital Transformation",
    "Cloud Migration Services",
    "Custom Software Development",
  ];

  return (
    <section id="business" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Building the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast Data Connect represents the culmination of decades of
            experience, innovation, and a vision to transform how businesses
            leverage technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Business Story */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-medium">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${techOfficeImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="font-serif text-2xl font-bold">
                    Fast Data Connect
                  </h3>
                  <p className="text-primary-foreground/90">
                    Transforming Business Through Technology
                  </p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded with a vision to bridge the gap between complex
                  technology and business needs, Fast Data Connect has become a
                  trusted partner for enterprises seeking digital
                  transformation.
                </p>
                <a href="https://fastdataconnect.com" target="_blank">
                  <Button variant="gold" className="w-full">
                    <ExternalLink className="w-4 h-4" />
                    Visit Fast Data Connect
                  </Button>
                </a>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold text-primary group-hover:text-[#56bcbd] transition-colors">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Services & Expertise */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-[#56bcbd]" />
                Core Services
              </h3>
              <div className="grid gap-3">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-soft transition-all duration-300 hover:border-gold/30 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        {service}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#56bcbd]" />
                Trusted Partners
              </h3>
              <div className="flex flex-wrap gap-2">
                {companies.map((company, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3 py-1 hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300 cursor-pointer"
                  >
                    {company}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-gold/5 border-gold/20">
              <h4 className="font-serif text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#56bcbd]" />
                Vision Statement
              </h4>
              <p className="text-muted-foreground leading-relaxed italic">
                "Technology should empower, not complicate. Our mission is to
                make enterprise-grade solutions accessible and practical for
                businesses of all sizes."
              </p>
              <p className="text-sm text-[#56bcbd] mt-2 font-medium">
                - Mike Agar, CEO
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 shadow-medium hover:shadow-gold transition-all duration-500">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-[#56bcbd]" />
              <div className="text-left">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  Ready to Transform?
                </h3>
                <p className="text-muted-foreground">
                  Let's discuss your business needs
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero">Schedule Consultation</Button>
              <Button variant="outline">View Case Studies</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
