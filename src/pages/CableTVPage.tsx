import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tv, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroTvNew from '@/assets/hero-tv-new.jpg';

const tvTypes = [
  {
    name: 'Traditional Cable TV',
    description: 'Channels delivered through cable infrastructure. Offers a large selection of live and on-demand content.',
    characteristics: ['Hundreds of channels available', 'Live sports and events', 'DVR recording capabilities', 'May include premium add-ons']
  },
  {
    name: 'Streaming Services',
    description: 'On-demand content delivered over internet connection. More flexible and portable viewing.',
    characteristics: ['Watch on multiple devices', 'Pause and resume anywhere', 'Commercial-free options', 'Wide variety of content types']
  },
  {
    name: 'Satellite TV',
    description: 'Television delivered via satellite signal. Good option in areas without cable availability.',
    characteristics: ['Widely available nationwide', 'Weather can affect service', 'Variety of programming', 'DVR options available']
  }
];

const CableTVPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroTvNew}
            alt="Cable TV entertainment options"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-background/50" />
        </div>
        <div className="absolute top-20 left-0 w-[600px] h-[600px] blob opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Tv className="w-4 h-4" />
              <span>Cable TV Service Guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Understand Cable TV Service{' '}
              <span className="text-primary">Options</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get independent guidance on cable TV packages and how they differ from streaming and satellite options.
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
      
      {/* Cable TV Types */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Television Service Types
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn about different ways to access television content
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tvTypes.map((type, index) => (
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
      
      {/* What We Help With */}
      <section className="py-20 lg:py-32">
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
                  <p className="text-muted-foreground">We explain the differences between cable, streaming, and satellite TV options so you can make an informed decision.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Navigate Package Features</h3>
                  <p className="text-muted-foreground">We help clarify what different packages include, like channels, DVR capabilities, and streaming integration.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">General Informational Guidance</h3>
                  <p className="text-muted-foreground">We provide general information to help you understand what's available from various providers in your area.</p>
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
              Our team provides informational support to help you understand your cable TV service options.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Contact an Advisor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> We do not provide cable TV service directly. To activate cable service, you will need to contact your chosen service provider directly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CableTVPage;
