import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Check, Wifi, Tv, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const bundles = [
  {
    name: 'Starter Bundle',
    internet: '100 Mbps',
    tv: '125+ Channels',
    price: '89',
    savings: '19',
    features: [
      '100 Mbps Internet',
      '125+ HD TV Channels',
      'Free modem & router',
      'Basic DVR included',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Family Bundle',
    internet: '500 Mbps',
    tv: '200+ Channels',
    price: '139',
    savings: '29',
    features: [
      '500 Mbps Internet',
      '200+ HD TV Channels',
      'Premium mesh Wi-Fi',
      'Multi-room DVR',
      '24/7 phone support',
      'Free installation',
      'Streaming apps included'
    ],
    popular: true
  },
  {
    name: 'Ultimate Bundle',
    internet: '1 Gbps',
    tv: '500+ Channels',
    price: '199',
    savings: '49',
    features: [
      '1 Gbps Internet',
      '500+ HD TV Channels',
      'Premium mesh Wi-Fi',
      'Whole-home DVR',
      'Priority 24/7 support',
      'Free professional setup',
      'All premium channels',
      '4K content library'
    ],
    popular: false
  }
];

const BundlesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob opacity-50" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] blob-green opacity-40" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Save More with Bundles</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Internet + Cable{' '}
              <span className="text-primary">Bundle & Save</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get the best of both worlds. Combine high-speed internet with premium cable TV and save up to $49/month.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bundles */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bundles.map((bundle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`floating-card p-8 relative ${
                  bundle.popular ? 'ring-2 ring-accent shadow-glow-accent' : ''
                }`}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{bundle.name}</h3>
                  
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Wifi className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{bundle.internet}</span>
                    </div>
                    <div className="w-px h-4 bg-border" />
                    <div className="flex items-center gap-1 text-sm">
                      <Tv className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{bundle.tv}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">${bundle.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <Zap className="w-3 h-3" />
                    Save ${bundle.savings}/mo
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button
                    variant={bundle.popular ? 'hero' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    Get This Bundle
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Bundle */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Bundle?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Save Money', description: 'Up to $49/month savings compared to separate services' },
              { title: 'One Bill', description: 'Simple billing with everything on one statement' },
              { title: 'Better Support', description: 'Single point of contact for all your services' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Bundle & Save?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started today and enjoy seamless entertainment.
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

export default BundlesPage;
