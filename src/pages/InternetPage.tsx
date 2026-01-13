import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wifi, Zap, ArrowRight, Check, Shield, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroInternetNew from '@/assets/hero-internet-new.jpg';

const internetTypes = [
  {
    name: 'Fiber Optics',
    description: 'High-speed internet delivered through fiber optic cables. Generally offers the fastest speeds and most reliable connections.',
    characteristics: ['Speeds typically 100+ Mbps', 'Most reliable technology', 'Limited availability in some areas']
  },
  {
    name: 'DSL (Digital Subscriber Line)',
    description: 'Internet delivered through existing telephone lines. Widely available but typically slower than fiber.',
    characteristics: ['Speeds typically 5-100 Mbps', 'Widely available', 'Speed decreases with distance from provider']
  },
  {
    name: 'Cable Internet',
    description: 'Delivered through cable TV infrastructure. Good speeds with widespread availability.',
    characteristics: ['Speeds typically 50-500 Mbps', 'Widely available', 'Speeds can vary by network congestion']
  },
  {
    name: '5G/Fixed Wireless',
    description: 'Newer wireless technology offering high speeds without requiring cables to your home.',
    characteristics: ['Speeds typically 50+ Mbps', 'Emerging technology', 'Availability expanding']
  }
];

const factors = [
  { icon: Zap, title: 'Speed Requirements', description: 'Consider how many users and devices will need internet connection' },
  { icon: Shield, title: 'Reliability Needs', description: 'Understand uptime guarantees and service quality expectations' },
  { icon: Check, title: 'Availability', description: 'Not all technologies available in all areas - verify what\'s available at your location' },
  { icon: AlertCircle, title: 'Data Needs', description: 'Understand if plans have data limits and what your household usage typically is' }
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
            alt="Internet service options guidance"
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
              Understand Internet Service{' '}
              <span className="text-primary">Options</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get independent guidance understanding different internet technologies, speeds, and options available from various providers.
            </p>
            
            {/* Mandatory Disclaimer */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-sm max-w-2xl mx-auto">
              <p className="text-foreground mb-3">
                <strong>⚠️ Important Disclaimer</strong>
              </p>
              <p className="text-muted-foreground">
                Uverse Connect is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Internet Technologies */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Internet Technology Types
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn about different internet technologies available
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {internetTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="floating-card p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{type.name}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.characteristics.map((char, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {char}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Factors to Consider */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Factors to Consider
            </h2>
            <p className="text-lg text-muted-foreground">
              When evaluating internet service options for your home
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="floating-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{factor.title}</h3>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What We Help With */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              How We Help
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Understand Your Options</h3>
                  <p className="text-muted-foreground">We explain different internet technologies and how they differ in speed, reliability, and availability.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Navigate Common Questions</h3>
                  <p className="text-muted-foreground">We help clarify terms, explain speed requirements, and address common concerns about connectivity.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information About Availability</h3>
                  <p className="text-muted-foreground">We provide general guidance on how to check what internet technologies are available in your area.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Important Note */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get Independent Guidance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team provides informational support to help you understand your internet service options.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Contact an Advisor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> We do not provide internet service directly. To activate internet service, you will need to contact your chosen service provider directly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InternetPage;
