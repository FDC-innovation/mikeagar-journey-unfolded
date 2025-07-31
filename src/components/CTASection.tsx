import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Music, 
  Download, 
  Mail, 
  Phone, 
  MessageSquare,
  Linkedin,
  Youtube
} from "lucide-react";

const CTASection = () => {
  return (
    <section id="connect" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something
            <span className="text-gold block">Extraordinary Together</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Whether you're looking for business solutions, speaking engagements, 
            or simply want to connect over music and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Speaking Engagements */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Speaking Engagements</h3>
              <p className="text-primary-foreground/80 mb-6">
                Book Mike for keynotes on entrepreneurship, digital transformation, 
                and the intersection of creativity and business.
              </p>
              <Button variant="gold" className="w-full">
                Book Speaking Event
              </Button>
            </CardContent>
          </Card>

          {/* Business Inquiries */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Business Consultation</h3>
              <p className="text-primary-foreground/80 mb-6">
                Explore how Fast Data Connect can accelerate your digital transformation 
                with Salesforce and Google Cloud solutions.
              </p>
              <Button variant="hero" className="w-full">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Music & Media */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Music Journey</h3>
              <p className="text-primary-foreground/80 mb-6">
                Discover Mike's musical legacy and stay updated with his latest 
                ghazals and spiritual compositions.
              </p>
              <Button variant="glass" className="w-full text-primary-foreground">
                <Youtube className="w-4 h-4" />
                Visit Music Channel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto bg-background/10 backdrop-blur-md border-primary-foreground/20">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                    <Input 
                      placeholder="Your Email" 
                      type="email"
                      className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                    <Input 
                      placeholder="Subject" 
                      className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                    <Button variant="gold" className="w-full">
                      <Mail className="w-4 h-4" />
                      Send Message
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-4">
                      Direct Contact
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gold" />
                        <span className="text-primary-foreground/90">mike@fastdataconnect.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gold" />
                        <span className="text-primary-foreground/90">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-gold" />
                        <span className="text-primary-foreground/90">linkedin.com/in/mike-agar</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-semibold text-primary-foreground mb-4">
                      Download Resources
                    </h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                        <Download className="w-4 h-4" />
                        Executive Biography (PDF)
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                        <Download className="w-4 h-4" />
                        Business Profile (PDF)
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                        <Download className="w-4 h-4" />
                        Media Kit (ZIP)
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;