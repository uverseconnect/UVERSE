import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wifi, Tv, Phone, Zap, Shield, Users, 
  ArrowRight, Play, CheckCircle, Activity,
  Router, Cloud, MonitorPlay, Signal, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Testimonials from '@/components/Testimonials';
import PlanComparison from '@/components/PlanComparison';
import heroVrPerson from '@/assets/hero-vr-person.jpg';
import moviesBanner from '@/assets/movies-banner.jpg';
import contactPerson from '@/assets/contact-person.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingStats = [
  { icon: Zap, value: '1 Gbps', label: 'Max Speed' },
  { icon: Tv, value: '500+', label: 'HD Channels' },
  { icon: Shield, value: '99.9%', label: 'Network Uptime' },
  { icon: Users, value: '2M+', label: 'Happy Customers' },
];

const features = [
  {
    icon: Signal,
    title: 'Excellent Connection',
    description: 'Our cutting-edge fiber network delivers consistent, ultra-fast speeds to every corner of your home.'
  },
  {
    icon: Shield,
    title: '5G Bandwidth',
    description: 'Experience next-gen connectivity with our 5G-ready infrastructure for lightning-fast performance.'
  },
  {
    icon: Tv,
    title: 'Prepaid & Prepaid Sim',
    description: 'Flexible payment options with prepaid plans that fit your lifestyle and budget perfectly.'
  }
];

const streamingLogos = [
  { name: 'Netflix', icon: MonitorPlay },
  { name: 'Disney+', icon: MonitorPlay },
  { name: 'HBO Max', icon: MonitorPlay },
  { name: 'Prime', icon: MonitorPlay },
  { name: 'Hulu', icon: MonitorPlay },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/95">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full">
            <img
              src={heroVrPerson}
              alt="Person enjoying VR entertainment"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
              >
                <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Internet
                </span>
                <span className="px-4 py-2 rounded-full bg-card/20 text-card text-sm font-medium border border-card/30">
                  Streaming
                </span>
                <span className="px-4 py-2 rounded-full bg-card/20 text-card text-sm font-medium border border-card/30">
                  TV Service
                </span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
              >
                Unlock Seamless{' '}
                <span className="text-primary">High-Speed</span>{' '}
                Browsing.
              </motion.h1>
              
              {/* Price Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-block mb-8"
              >
                <div className="bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">$54</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/coverage">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2">
                    Check Availability
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/internet">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Play className="w-5 h-5" />
                    View Plans
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={heroVrPerson}
                  alt="Person enjoying VR entertainment"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-8 glass-card rounded-2xl p-4 shadow-elevated bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Speed</p>
                    <p className="text-lg font-bold text-foreground">940 Mbps</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-8 glass-card rounded-2xl p-4 shadow-elevated bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                    <p className="text-lg font-bold text-foreground">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Unleash Endless Possibilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of home entertainment with our cutting-edge internet and cable solutions designed for modern households.
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="floating-card p-8 text-center hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Find Your Network Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] blob opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Products & Plans
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Find Your Ultimate{' '}
                <span className="text-primary">High-Speed Network</span>
              </h2>
              
              <div className="flex gap-4 mb-6">
                <span className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Superfast Package
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Ultra 4G Speed
                </span>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Choose from our range of high-speed internet packages tailored to meet your streaming, gaming, and work-from-home needs. All plans include professional installation and 24/7 support.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/internet">
                  <Button variant="hero" size="lg" className="gap-2">
                    Explore All
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:8888110313">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="w-5 h-5" />
                    For Product Info
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-floating">
                <img
                  src={heroVrPerson}
                  alt="Person enjoying high-speed internet"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Streaming Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">Supported by Leading Streaming Brands</p>
            <div className="flex flex-wrap justify-center gap-8">
              {streamingLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center"
                >
                  <logo.icon className="w-8 h-8 text-muted-foreground" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Plan Comparison Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Packages
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Find the Perfect Internet Plan
            </h2>
            <p className="text-muted-foreground">
              Compare our plans side-by-side to find the best fit for your needs.
            </p>
          </motion.div>
          
          <PlanComparison />
        </div>
      </section>
      
      {/* Movies Section */}
      <section className="py-20 lg:py-32 bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Enjoy Top Movies Online
            </h2>
            <p className="text-primary-foreground/70">
              Stream the latest blockbusters and classic favorites with our premium TV packages.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-floating"
          >
            <img
              src={moviesBanner}
              alt="Popular movies and shows available for streaming"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Promo Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-floating"
            >
              <img
                src={heroVrPerson}
                alt="Happy customer enjoying services"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                🎉 New Offer for Internet
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Try Our Fast Internet & TV For Only $1.
              </h2>
              
              <div className="bg-muted rounded-2xl p-6 mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">$79</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">After $1 trial period</p>
              </div>
              
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently asked questions.
              </h2>
              <p className="text-muted-foreground mb-8">
                Find answers to common questions about our services, installation, and billing.
              </p>
              <Link to="/support">
                <Button variant="outline" size="lg" className="gap-2">
                  View All FAQs
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { q: "How Many Days Does it Take For Activation to be Complete?", a: "Most installations are completed within 24-48 hours of scheduling. Our technicians will ensure everything is set up and working perfectly." },
                { q: "How can I pay my monthly bills on website?", a: "You can pay your bills through our secure online portal, set up auto-pay, or pay via phone with a customer service representative." },
                { q: "How can I know the subscription that I'm using?", a: "Log into your account dashboard to view your current subscription details, usage, and billing information." },
                { q: "How long will my unlimited streaming last?", a: "Unlimited streaming is included with all our plans and continues as long as your subscription is active." }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="floating-card p-6"
                >
                  <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                🌐 Contact Us Online
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Contact Form
              </h2>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Write Message..."
                  rows={4}
                  className="w-full p-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <Button variant="hero" size="lg" className="w-full gap-2">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <img
                src={contactPerson}
                alt="Customer service representative"
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Get Connected in{' '}
              <span className="text-primary">Minutes</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Quick setup guidance, installation coordination, and ongoing support. 
              We're here to help you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card shadow-soft">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Call us:</span>
              <a href="tel:8888110313" className="font-semibold text-foreground hover:text-primary transition-colors">
                (888) 811-0313
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <LiveChatWidget />
    </div>
  );
};

export default Index;