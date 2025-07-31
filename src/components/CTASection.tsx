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
  Youtube,
} from "lucide-react";

const CTASection = () => {
  return (
    <section id="connect" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Let's Create Something
            <span className="text-[#56bcbd] block">Extraordinary Together</span>
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
                <Calendar className="w-8 h-8 text-[#56bcbd]" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Speaking Engagements
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Book Mike for keynotes on entrepreneurship, digital
                transformation, and the intersection of creativity and business.
              </p>
              <Button variant="gold" className="w-full">
                <a
                  href="mailto:mike.agar@fastdataconnect.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  Book Speaking Event
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Business Inquiries */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#56bcbd]" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Business Consultation
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Explore how Fast Data Connect can accelerate your digital
                transformation with Salesforce and Google Cloud solutions.
              </p>
              <a
                href="https://www.linkedin.com/in/mike-agar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold" className="w-full">
                  Book Consultation
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Music & Media */}
          <Card className="bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-[#56bcbd]" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Music Journey
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Discover Mike's musical legacy and stay updated with his latest
                ghazals and spiritual compositions.
              </p>
              <Button
                variant="glass"
                className="w-full text-primary-foreground"
              >
                <Youtube className="w-4 h-4" />
                Visit Music Channel
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h4 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              Direct Contact
            </h4>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:mike@fastdataconnect.com"
                className="flex items-center gap-3 hover:text-[#56bcbd] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#56bcbd]" />
                <span className="text-gray-800 dark:text-gray-200">
                  mike@fastdataconnect.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 hover:text-[#56bcbd] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#56bcbd]" />
                <span className="text-gray-800 dark:text-gray-200">
                  +1 (555) 123-4567
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/agarmike/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#56bcbd] transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#56bcbd]" />
                <span className="text-gray-800 dark:text-gray-200">
                  linkedin.com/in/mike-agar
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
