import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wifi, Zap, ArrowRight, Check, Shield, Clock, Download, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroInternetNew from '@/assets/hero-internet-new.jpg';

const plans = [
  {
    name: 'Basic',
    speed: '100 Mbps',
    price: '49',
    features: [
      'Up to 100 Mbps download',
      'Up to 10 Mbps upload',
      'Unlimited data',
      'Free modem rental',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Plus',
    speed: '500 Mbps',
    price: '79',
    features: [
      'Up to 500 Mbps download',
      'Up to 50 Mbps upload',
      'Unlimited data',
      'Free modem + router',
      '24/7 phone support',
      'Free installation'
    ],
    popular: true
  },
  {
    name: 'Ultra',
    speed: '1 Gbps',
    price: '99',
    features: [
      'Up to 1 Gbps download',
      'Up to 100 Mbps upload',
      'Unlimited data',
      'Premium mesh Wi-Fi',
      'Priority 24/7 support',
      'Free professional setup',
      'Network security suite'
    ],
    popular: false
  }
];

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Fiber-powered speeds up to 1 Gbps' },
  { icon: Shield, title: 'Secure Network', description: 'Built-in security protection' },
  { icon: Clock, title: '99.9% Uptime', description: 'Reliable connection guaranteed' },
  { icon: Download, title: 'Unlimited Data', description: 'No caps or throttling' }
];

const InternetPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroInternetNew}
            alt="High-speed internet connectivity"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-background/50" />
        </div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Wifi className="w-4 h-4" />
              <span>Internet Service Guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Find the Right Internet Service for Your{' '}
              <span className="text-primary">Connected Home</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get expert assistance understanding internet options from various providers™ in your area. We help you navigate speeds, technology types, and pricing.
            </p>
            
            {/* Disclosure */}
            <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl p-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              <p>
                <strong className="text-foreground">Important:</strong> Uverse Connect is an independent service assistance platform. 
                We provide guidance about internet options but do not sell or provide internet services directly. Service fees apply separately from provider charges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Plans */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`floating-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-accent shadow-glow-accent' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{plan.speed}</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button
                    variant={plan.popular ? 'hero' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    Get Assistance
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Internet?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Call us today and get connected within 48 hours.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="gap-2">
              Check Availability
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InternetPage;
