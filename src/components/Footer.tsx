import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-secondary flex items-center justify-center">
                <span className="text-lg font-bold">SF</span>
              </div>
              <h3 className="text-xl font-bold">Sanjay Finance</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Trusted financial partner for Motor Finance and Insurance services in Rohtas district.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/emi-calculator" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Truck Finance</li>
              <li className="text-sm text-primary-foreground/80">Harvester Finance</li>
              <li className="text-sm text-primary-foreground/80">Car Finance</li>
              <li className="text-sm text-primary-foreground/80">Vehicle Insurance</li>
              <li className="text-sm text-primary-foreground/80">Health Insurance</li>
              <li className="text-sm text-primary-foreground/80">Life Insurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Takiya Bazar, Sasaram<br />
                  District Rohtas, Bihar 821113
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:9632854855" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">9632854855</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:Sanjayfinancecompany@gmail.com" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">Sanjayfinancecompany@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Sanjay Finance Company. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
