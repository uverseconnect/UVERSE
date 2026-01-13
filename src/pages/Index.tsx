import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wifi, Tv, Phone, Zap, Shield, Users, 
  ArrowRight, CheckCircle, Activity,
  Router, Cloud, MonitorPlay, Signal, AlertCircle, XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LiveChatWidget from '@/components/LiveChatWidget';
import Testimonials from '@/components/Testimonials';
import heroBack from '@/assets/heroback.jpg';
import networkConnection from '@/assets/network-connection.jpg';
import productsPlans from '@/assets/products-plans.jpg';
import techProfessional from '@/assets/tech-professional.jpg';
import contactPerson from '@/assets/support-person.jpg';

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img
            src={heroBack}
            alt="High-speed internet connectivity"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-4">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Service Tags */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 mb-8"
              >
                <span className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Wifi className="w-4 h-4" />
                  Internet
                </span>
                <span className="px-5 py-2.5 rounded-full bg-card/40 backdrop-blur-md text-primary-foreground text-sm font-semibold flex items-center gap-2 border border-primary-foreground/20">
                  <MonitorPlay className="w-4 h-4" />
                  Streaming
                </span>
                <span className="px-5 py-2.5 rounded-full bg-card/40 backdrop-blur-md text-primary-foreground text-sm font-semibold flex items-center gap-2 border border-primary-foreground/20">
                  <Tv className="w-4 h-4" />
                  TV Service
                </span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
              >
                Independent Internet & Cable
                <br />
                <span className="text-primary">Service Assistance</span>
              </motion.h1>
              
              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-xl"
              >
                Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-4"
              >
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-shadow">
                    Talk to a Third-Party Internet Advisor
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:8888110313">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                    Call for Independent Service Guidance
                  </Button>
                </a>
              </motion.div>
              
              {/* Micro-text */}
              <motion.p
                variants={fadeInUp}
                className="text-sm text-primary-foreground/60 text-center mb-10"
              >
                Not an ISP. No brand affiliation.
              </motion.p>
              
              {/* Trust Indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6 text-primary-foreground/70"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Independent Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Transparent</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Informational Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card rounded-2xl p-5 backdrop-blur-xl bg-card/20 border border-primary-foreground/10"
                  >
                    <Signal className="w-6 h-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-primary-foreground mb-1">Guidance</p>
                    <p className="text-xs text-primary-foreground/60">Service Options</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="glass-card rounded-2xl p-5 backdrop-blur-xl bg-card/20 border border-primary-foreground/10"
                  >
                    <Shield className="w-6 h-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-primary-foreground mb-1">Independent</p>
                    <p className="text-xs text-primary-foreground/60">Third-Party</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="glass-card rounded-2xl p-5 backdrop-blur-xl bg-card/20 border border-primary-foreground/10"
                  >
                    <Users className="w-6 h-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-primary-foreground mb-1">Support</p>
                    <p className="text-xs text-primary-foreground/60">Informational</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass-card rounded-2xl p-5 backdrop-blur-xl bg-card/20 border border-primary-foreground/10"
                  >
                    <Activity className="w-6 h-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-primary-foreground mb-1">Education</p>
                    <p className="text-xs text-primary-foreground/60">Provider Options</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Independent Disclosure - Above the Fold */}
      <section className="py-8 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-start gap-3 justify-center">
              <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm lg:text-base text-foreground">
                <strong>Important Notice:</strong> Uverse Connect is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider. Brand names, if mentioned, are used strictly for informational purposes only.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Independent Service Assistance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Uverse Connect, we help users:
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
          >
            <motion.div
              variants={fadeInUp}
              className="floating-card p-8 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Signal className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Understand Internet & Broadband Service Options</h3>
              <p className="text-muted-foreground">Get practical guidance on navigating internet and broadband service options from various providers</p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-8 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Router className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Common Connectivity Guidance</h3>
              <p className="text-muted-foreground">Learn how to navigate service provider processes and understand common connectivity-related concerns</p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-8 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">General Cable TV Information</h3>
              <p className="text-muted-foreground">Receive general informational support related to cable TV and streaming services</p>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-foreground max-w-3xl mx-auto font-semibold"
          >
            Our role is limited to independent guidance and assistance only.
          </motion.p>
        </div>
      </section>
      
      {/* What We Do NOT Do Section */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 text-amber-700 text-sm font-medium mb-4">
              Important Clarification
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Do NOT Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To avoid confusion, please note:
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="floating-card p-6 flex items-start gap-4"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">We are not an Internet Service Provider (ISP)</h4>
                <p className="text-sm text-muted-foreground">We do not provide internet or cable services directly</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-6 flex items-start gap-4"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">We do not provide official customer support</h4>
                <p className="text-sm text-muted-foreground">We are not authorized support for any specific brand</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-6 flex items-start gap-4"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Not affiliated, authorized, or endorsed</h4>
                <p className="text-sm text-muted-foreground">We have no partnership with any telecom or cable company</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-6 flex items-start gap-4"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">We do not sell internet or cable subscriptions</h4>
                <p className="text-sm text-muted-foreground">Our service is limited to guidance and education</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-6 flex items-start gap-4"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">We do not provide guaranteed technical fixes</h4>
                <p className="text-sm text-muted-foreground">Actual service and technical support comes from providers</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="floating-card p-6 flex items-start gap-4"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Provider mentions are informational only</h4>
                <p className="text-sm text-muted-foreground">All brand references are for educational purposes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Service Navigation Section */}
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
                Service Options Guidance
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                We Help You Navigate{' '}
                <span className="text-primary">Service Choices</span>
              </h2>
              
              <div className="flex gap-4 mb-6">
                <span className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Multiple Providers
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Unbiased Advice
                </span>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Our assistance helps you understand internet, cable, and streaming options from various providers. We guide you through features, speeds, and packages—you make the final decision directly with your chosen provider.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2">
                    Get Guidance
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:8888110313">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Speak With an Advisor
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
                  src={productsPlans}
                  alt="Service options guidance"
                  className="w-full h-auto object-cover"
                />
              </div>
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
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-8">
                Find answers to common questions about our assistance services.
              </p>
              <Link to="/faq">
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
                { q: "What kind of assistance do you provide?", a: "We provide general guidance and informational support to help you understand and navigate internet, cable, and streaming service options from various providers." },
                { q: "Do you provide internet or cable service?", a: "No. We are an independent third-party assistance provider. We do not sell or provide internet, cable, or telecom services directly." },
                { q: "Are you affiliated with any service providers?", a: "No. We are completely independent and not affiliated with, authorized by, or endorsed by any ISP, cable company, or telecommunications provider." },
                { q: "How do I contact actual service providers?", a: "We can provide guidance on understanding your options, but you will need to contact service providers directly to purchase or activate services." }
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
                Get Independent Assistance
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
              Ready to Get{' '}
              <span className="text-primary">Independent Guidance</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to provide informational support and help you understand your service options.
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
            
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Disclaimer:</strong> Uverse Connect is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
              </p>
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