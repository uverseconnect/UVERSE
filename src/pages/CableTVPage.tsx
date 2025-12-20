import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tv, ArrowRight, Check, Film, Trophy, Newspaper, Music, Heart, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const packages = [
  {
    name: 'Family',
    channels: '125+',
    price: '59',
    features: [
      '125+ HD channels',
      'Family entertainment',
      'Kids programming',
      'Local channels',
      'DVR included'
    ],
    popular: false
  },
  {
    name: 'Sports',
    channels: '200+',
    price: '89',
    features: [
      '200+ HD channels',
      'All major sports networks',
      'Regional sports',
      'Premium sports add-ons',
      'Multi-room DVR',
      '4K sports available'
    ],
    popular: true
  },
  {
    name: 'Premium',
    channels: '500+',
    price: '129',
    features: [
      '500+ HD channels',
      'All premium movie channels',
      'Complete sports package',
      'International channels',
      'Whole-home DVR',
      'Streaming apps included',
      '4K content library'
    ],
    popular: false
  }
];

const categories = [
  { icon: Film, name: 'Movies', count: '50+' },
  { icon: Trophy, name: 'Sports', count: '40+' },
  { icon: Newspaper, name: 'News', count: '30+' },
  { icon: Music, name: 'Music', count: '25+' },
  { icon: Heart, name: 'Lifestyle', count: '35+' },
  { icon: Gamepad2, name: 'Kids', count: '20+' }
];

const CableTVPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 left-0 w-[600px] h-[600px] blob opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Tv className="w-4 h-4" />
              <span>Premium Cable TV Packages</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Crystal Clear{' '}
              <span className="text-primary">Entertainment</span> for Everyone
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              500+ HD channels, sports, movies, and more. The ultimate TV experience for your family.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Channel Categories */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <cat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{cat.name}</p>
                <p className="text-sm text-muted-foreground">{cat.count} channels</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Packages */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible packages designed for every type of viewer.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`floating-card p-8 relative ${
                  pkg.popular ? 'ring-2 ring-accent shadow-glow-accent' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    Best Value
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Tv className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{pkg.channels} Channels</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">${pkg.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button
                    variant={pkg.popular ? 'hero' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Watching Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Professional installation and setup included with all packages.
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

export default CableTVPage;
