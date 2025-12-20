import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Target, Heart, Zap, Shield, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const values = [
  { icon: Target, title: 'Customer First', description: 'Every decision we make starts with our customers in mind.' },
  { icon: Heart, title: 'Reliability', description: 'We deliver consistent, dependable service you can count on.' },
  { icon: Zap, title: 'Innovation', description: 'Continuously improving our network with the latest technology.' },
  { icon: Shield, title: 'Integrity', description: 'Transparent pricing and honest communication, always.' }
];

const timeline = [
  { year: '2010', title: 'Founded', description: 'Started with a vision to bring better connectivity to homes.' },
  { year: '2015', title: 'Fiber Network', description: 'Launched our first fiber-optic network infrastructure.' },
  { year: '2018', title: '1M Customers', description: 'Reached one million happy households nationwide.' },
  { year: '2022', title: 'Gigabit Speeds', description: 'Rolled out 1 Gbps speeds across all major markets.' },
  { year: '2024', title: '2M+ Customers', description: 'Continuing to grow and serve more families.' }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>About StreamNet</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Connecting Homes with{' '}
              <span className="text-primary">Purpose</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to deliver fast, reliable internet and premium entertainment to every household.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At StreamNet, we believe that everyone deserves access to fast, reliable internet and quality entertainment. 
                Our mission is to power homes with the connectivity they need to work, play, and stay connected with the world.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to building infrastructure that keeps communities connected, 
                with customer service that actually cares about solving problems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, value: '10+', label: 'Years of Service' },
                { icon: Users, value: '2M+', label: 'Happy Customers' },
                { icon: TrendingUp, value: '99.9%', label: 'Network Uptime' },
                { icon: Shield, value: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="floating-card p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-lg font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/20 pb-8 last:pb-0">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the StreamNet difference today.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
