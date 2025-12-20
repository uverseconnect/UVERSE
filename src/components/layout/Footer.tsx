import { Link } from 'react-router-dom';
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Internet Plans', href: '/internet' },
      { name: 'Cable TV Packages', href: '/cable-tv' },
      { name: 'Bundle Deals', href: '/bundles' },
      { name: 'Coverage Map', href: '/coverage' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Careers', href: '/about' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
    policies: [
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Fair Usage Policy', href: '/fair-usage' },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Wifi className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-secondary-foreground">
                Stream<span className="text-primary">Net</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              Powering homes with ultra-fast internet and premium cable entertainment. Speed, reliability, and seamless connectivity.
            </p>
            <div className="space-y-3">
              <a
                href="tel:8888110313"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(888) 811-0313</span>
              </a>
              <a
                href="mailto:support@streamnet.com"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>support@streamnet.com</span>
              </a>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.policies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-secondary-foreground/50 text-sm">
              © {currentYear} StreamNet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
