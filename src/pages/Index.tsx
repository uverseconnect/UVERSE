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
import heroBack from '@/assets/heroback.jpg';
import networkConnection from '@/assets/network-connection.jpg';
import productsPlans from '@/assets/products-plans.jpg';
import techProfessional from '@/assets/tech-professional.jpg';
import customerHappy from '@/assets/customer-happy.jpg';
import moviesBanner from '@/assets/movies-banner.jpg';
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

const floatingStats = [
  { icon: Zap, value: '1 Gbps', label: 'Max Speed' },
  { icon: Tv, value: '500+', label: 'HD Channels' },
  { icon: Shield, value: '99.9%', label: 'Network Uptime' },
  { icon: Users, value: '2M+', label: 'Happy Customers' },
];

const features = [
  {
    icon: Signal,
    title: 'Connection Guidance',
    description: 'We help you understand fiber, DSL, and cable options from various providers to find what works for your home.'
  },
  {
    icon: Shield,
    title: 'Service Education',
    description: 'Learn about 5G, broadband technologies, and streaming services through our expert assistance.'
  },
  {
    icon: Tv,
    title: 'Plan Navigation',
    description: 'Get support understanding prepaid, postpaid, and flexible payment options across multiple providers.'
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
                Get Expert Assistance
                <br />
                <span className="text-primary">Finding Your</span>
                <br />
                Connection.
              </motion.h1>
              
              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-xl"
              >
                We are an independent service assistance platform that helps guide you through internet, cable, and streaming options. We do not sell services directly.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-shadow">
                    Get Assistance
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/internet">
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                    <Play className="w-5 h-5" />
                    Learn More
                  </Button>
                </Link>
              </motion.div>
              
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
                  <span className="text-sm">No Hidden Fees</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Large Price Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card rounded-3xl p-8 backdrop-blur-xl bg-card/30 border border-primary-foreground/20 shadow-2xl mb-6"
                >
                  <p className="text-sm text-primary-foreground/60 mb-2">Service Assistance Fee</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-bold text-primary">$54</span>
                    <span className="text-2xl text-primary-foreground/80">/setup</span>
                  </div>
                  <div className="h-px bg-primary-foreground/20 mb-4" />
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">Expert Guidance</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">Setup Assistance</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm">Support Access</span>
                    </div>
                  </div>
                  <p className="text-xs text-primary-foreground/50 mt-4">
                    *Provider charges apply separately
                  </p>
                </motion.div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {floatingStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -3 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="glass-card rounded-2xl p-5 backdrop-blur-xl bg-card/20 border border-primary-foreground/10"
                    >
                      <stat.icon className="w-6 h-6 text-primary mb-2" />
                      <p className="text-2xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                      <p className="text-xs text-primary-foreground/60">{stat.label}</p>
                    </motion.div>
                  ))}
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
                <strong>Important Notice:</strong> We are an independent third-party service assistance startup, launched in 2025, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We charge a separate service fee for guidance and support. Provider charges apply separately.
              </p>
            </div>
          </motion.div>
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
              How We Help
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Assistance That Makes a Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team guides you through internet, cable, and streaming options to help you make informed decisions. We provide support and education—not direct sales.
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
                Our assistance helps you understand internet, cable, and streaming options from various providers™. We guide you through features, speeds, and packages—you make the final decision directly with your chosen provider.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/internet">
                  <Button variant="hero" size="lg" className="gap-2">
                    Get Guidance
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:8888110313">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Speak With Support
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
                  alt="High-speed internet network setup"
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
      
      {/* Sports Streaming Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Live Sports
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Never Miss a Game
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stream live sports, exclusive matches, and replays from all major leagues. Watch your favorite teams in stunning HD quality.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">NFL, NBA, MLB, NHL & More</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">4K Ultra HD Streaming</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">Multi-View & DVR Features</span>
                </div>
              </div>
              <Link to="/cable-tv">
                <Button variant="hero" size="lg" className="gap-2">
                  Explore Sports Packages
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-floating bg-gradient-to-br from-accent/20 to-primary/20 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Sports Channels', value: '40+' },
                    { label: 'Live Events', value: '1000+' },
                    { label: 'HD Quality', value: '100%' },
                    { label: 'DVR Hours', value: '200' }
                  ].map((stat, index) => (
                    <div key={index} className="floating-card p-6 text-center">
                      <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Kids & Family Streaming */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-floating bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="space-y-6">
                  {[
                    { icon: Tv, title: 'Kids Channels', desc: '20+ dedicated channels' },
                    { icon: Shield, title: 'Parental Controls', desc: 'Safe viewing for all ages' },
                    { icon: MonitorPlay, title: 'Educational Content', desc: 'Learning & entertainment' },
                    { icon: Users, title: 'Family Profiles', desc: 'Personalized for everyone' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 floating-card p-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Family Entertainment
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Safe & Fun Content for Everyone
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Keep the whole family entertained with age-appropriate content, parental controls, and unlimited streaming across all devices.
              </p>
              <p className="text-muted-foreground mb-8">
                From cartoons and educational shows to family movies and documentaries, we've got something for every member of your household.
              </p>
              <Link to="/bundles">
                <Button variant="outline" size="lg" className="gap-2">
                  View Family Bundles
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
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
                src={customerHappy}
                alt="Professional internet installation service"
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