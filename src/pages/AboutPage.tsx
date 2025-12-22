import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Target, Heart, Zap, Shield, Award, TrendingUp, Rocket, Globe, HeartHandshake, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import heroAboutNew from '@/assets/hero-about-new.jpg';

const values = [
  { icon: Target, title: 'Consumer First', description: 'Every recommendation we make prioritizes your needs and circumstances.' },
  { icon: Heart, title: 'Transparency', description: 'Clear explanations about what we do, what we charge, and who provides services.' },
  { icon: Zap, title: 'Education', description: 'Helping you understand technology, pricing, and options so you can decide confidently.' },
  { icon: Shield, title: 'Independence', description: 'Unbiased guidance without favoritism toward any particular provider.' }
];

const team = [
  { icon: Rocket, title: 'Expert Advisors', description: 'Knowledgeable team trained in internet technologies, cable TV options, and telecommunications.' },
  { icon: Globe, title: 'Wide Knowledge', description: 'Understanding options from multiple providers™ across different regions and service types.' },
  { icon: HeartHandshake, title: 'Honest Guidance', description: 'Building trust through transparent explanations and realistic expectations.' },
  { icon: Lightbulb, title: 'Clear Communication', description: 'Breaking down complex technical terms into language anyone can understand.' }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAboutNew}
            alt="About our company"
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
              <Users className="w-4 h-4" />
              <span>About Uverse Connect</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Independent Guide to{' '}
              <span className="text-primary">Connectivity Services</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2025, Uverse Connect provides unbiased assistance helping consumers understand and navigate their internet, cable TV, and telecommunications options.
            </p>
            
            {/* Disclosure */}
            <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl p-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              <p>
                <strong className="text-foreground">Who We Are:</strong> Uverse Connect is an independent third-party service assistance startup. 
                We are not affiliated with any internet service providers, cable companies, or telecommunications carriers.
              </p>
            </div>
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
                At Uverse Connect, we believe navigating internet and cable TV options shouldn't be confusing. Our mission is to provide 
                clear, unbiased guidance that helps consumers make informed decisions about their connectivity and entertainment services.
              </p>
              <p className="text-lg text-muted-foreground">
                As an independent assistance platform launched in 2025, we're committed to educating consumers about available options 
                from multiple providers™, with guidance that helps you make the right choice for your needs and budget.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, value: 'Est. 2025', label: 'Independent Since' },
                { icon: Users, value: 'Unbiased', label: 'Service Guidance' },
                { icon: TrendingUp, value: 'Multiple', label: 'Providers™ Compared' },
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
      
      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Uverse Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized service to deliver an exceptional experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="floating-card p-8 hover:shadow-glow transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
            Experience the Uverse Connect difference today.
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
