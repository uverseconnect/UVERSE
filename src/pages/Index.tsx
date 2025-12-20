import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wifi, Tv, Phone, Zap, Shield, Users, 
  ArrowRight, Play, CheckCircle, Activity,
  Router, Cloud, MonitorPlay, Signal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroFamily from '@/assets/hero-family.jpg';
import personTablet from '@/assets/person-tablet.jpg';

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
    icon: Zap,
    title: 'Faster Internet Performance',
    description: 'Experience lightning-fast downloads and seamless browsing with our fiber-powered network.'
  },
  {
    icon: MonitorPlay,
    title: 'Seamless Streaming & Live TV',
    description: 'Enjoy buffer-free 4K streaming and crystal-clear live television on all your devices.'
  },
  {
    icon: Signal,
    title: 'Reliable Home Wi-Fi Coverage',
    description: 'Whole-home mesh coverage ensures strong signal in every room, every time.'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob opacity-50" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] blob-green opacity-40" />
        
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: (888) 811-0313</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              >
                Powering Homes with{' '}
                <span className="text-primary">Ultra-Fast Internet</span>{' '}
                & Premium Cable
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Speed, reliability, and seamless entertainment designed for modern households. 
                Experience the future of home connectivity.
              </motion.p>
              
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
                  <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2">
                    <Play className="w-5 h-5" />
                    View Plans
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                    >
                      {i}M
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by millions of households
                </p>
              </motion.div>
            </motion.div>
            
            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-floating">
                <img
                  src={heroFamily}
                  alt="Family enjoying entertainment together"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 lg:-right-8 glass-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
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
                className="absolute bottom-10 -left-4 lg:-left-8 glass-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Tv className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Channels</p>
                    <p className="text-lg font-bold text-foreground">500+ HD</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-4 lg:-right-12 glass-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-500" />
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
      
      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {floatingStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="floating-card p-6 lg:p-8 text-center hover:shadow-glow transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] blob opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Better Connectivity.{' '}
              <span className="text-primary">Better Entertainment.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless connected home experience.
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
                className="floating-card p-8 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Split Content Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Your Home Deserves{' '}
                <span className="text-primary">Better Internet</span> & Cable
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that your home is your sanctuary. That's why we've built a network 
                designed to deliver uninterrupted entertainment and blazing-fast connectivity. 
                Our dedicated support team is always ready to help you get the most out of your service.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['24/7 Customer Support', 'Professional Installation', 'No Hidden Fees', 'Flexible Plans'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/internet">
                <Button variant="hero" size="lg" className="gap-2">
                  Explore Plans
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-floating">
                <img
                  src={personTablet}
                  alt="Person using tablet for streaming"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating UI Cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Data Usage</p>
                    <div className="w-24 h-2 bg-muted rounded-full mt-1">
                      <div className="w-3/4 h-full bg-accent rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 shadow-elevated"
              >
                <p className="text-xs text-muted-foreground mb-2">Channel Lineup</p>
                <div className="flex gap-1">
                  {['Sports', 'Movies', 'News'].map((ch, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary">
                      {ch}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Network Flow Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] blob-green opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Smarter Networks.{' '}
              <span className="text-primary">Zero Hassle.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our intelligent network seamlessly connects all your devices for the ultimate entertainment experience.
            </p>
          </motion.div>
          
          {/* Network Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 items-center">
              {[
                { icon: Wifi, label: 'Devices' },
                { icon: Router, label: 'Router' },
                { icon: Cloud, label: 'Network' },
                { icon: MonitorPlay, label: 'Streaming' },
                { icon: Tv, label: 'Live TV' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-3 shadow-soft">
                    <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 -z-10 hidden lg:block" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/coverage">
              <Button variant="default" size="lg" className="gap-2">
                Check Coverage
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
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
    </div>
  );
};

export default Index;
