import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroBundlesNew from '@/assets/hero-bundles-new.jpg';

const bundleTypes = [
  {
    name: 'Internet + Cable TV',
    description: 'Bundling internet and cable TV can offer convenience and potential cost savings compared to buying each service separately.',
    benefits: ['Combined billing', 'Simplified service management', 'Potential bundled pricing', 'Single support contact']
  },
  {
    name: 'Internet + Phone',
    description: 'Voice over IP phone service bundled with internet connectivity. Offers flexibility and usually includes unlimited local and long-distance.',
    benefits: ['One phone number', 'Internet-based calling', 'Unified bills', 'Portable across providers']
  },
  {
    name: 'Triple Play (Internet + Cable + Phone)',
    description: 'Complete connectivity solution bundling internet, TV, and phone service. Offers maximum integration and convenience.',
    benefits: ['All-in-one service', 'Single installation', 'Unified billing', 'Integrated security features']
  }
];

const considerations = [
  {
    title: 'Contract Terms',
    description: 'Understand the length of contracts, early termination fees, and any locking periods for promotional pricing.'
  },
  {
    title: 'Equipment Fees',
    description: 'Check if modems, routers, and cable boxes are included, rented, or must be purchased.'
  },
  {
    title: 'Promotional vs Regular Pricing',
    description: 'Bundle discounts typically apply for initial periods. Understand what regular pricing will be after promotional period ends.'
  },
  {
    title: 'Service Quality',
    description: 'Different providers have different service quality and customer support ratings. Research reviews and reliability.'
  },
  {
    title: 'Availability in Your Area',
    description: 'Not all bundles are available everywhere. Verify what combinations of services are available where you live.'
  },
  {
    title: 'Technical Requirements',
    description: 'Some bundles have specific internet speed requirements. Verify your home can support all services.'
  }
];

const BundlesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBundlesNew}
            alt="Bundle service options"
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
              <Package className="w-4 h-4" />
              <span>Bundle Options Guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Understand Service{' '}
              <span className="text-primary">Bundles</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get independent guidance comparing bundle packages that combine internet, TV, and phone services from various providers.
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
      
      {/* Bundle Types */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Types of Service Bundles
            </h2>
            <p className="text-lg text-muted-foreground">
              Common bundle combinations available from service providers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bundleTypes.map((bundle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="floating-card p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{bundle.name}</h3>
                <p className="text-muted-foreground mb-4">{bundle.description}</p>
                <ul className="space-y-2">
                  {bundle.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Important Considerations */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Important Considerations
            </h2>
            <p className="text-lg text-muted-foreground">
              Things to understand when evaluating bundle options
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {considerations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="floating-card p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
                  <h3 className="font-semibold text-foreground mb-2">Explain Bundle Combinations</h3>
                  <p className="text-muted-foreground">We help you understand what different bundle combinations include and how they differ.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Clarify Costs & Contracts</h3>
                  <p className="text-muted-foreground">We provide guidance on understanding promotional pricing, contract terms, and what happens after promotional periods end.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Informational Support</h3>
                  <p className="text-muted-foreground">We provide general information to help you evaluate what bundle options might work best for your household.</p>
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
              Our team provides informational support to help you understand bundle options available from various providers.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Contact an Advisor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> We do not provide internet, cable, or phone services directly. To activate a bundle service, you will need to contact your chosen service provider directly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BundlesPage;
