import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, Phone, Mail, ArrowRight, AlertCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: 'About Our Service',
    icon: HelpCircle,
    questions: [
      { q: 'Is Uverse Connect an internet or cable provider?', a: 'No. Uverse Connect is an independent third-party service assistance provider. We provide general informational guidance and support to help you understand your service options.' },
      { q: 'What kind of support do you offer?', a: 'We provide informational guidance about internet technologies, cable TV packages, bundle options, and help you understand what different providers offer in your area.' },
      { q: 'Do you provide technical support for my internet or cable service?', a: 'No. For technical support, outages, or account issues, contact your service provider directly. Uverse Connect offers guidance on choosing services, not technical support for active services.' },
    ]
  },
  {
    category: 'Using Our Service',
    icon: Shield,
    questions: [
      { q: 'How does Uverse Connect help me choose a service?', a: 'We explain internet technologies (fiber, DSL, cable, 5G), cable TV options, and how to compare packages. We help you understand your needs and what providers offer in your area.' },
      { q: 'Does Uverse Connect charge for assistance?', a: 'Uverse Connect provides informational guidance and support. All details about our service are available on our website and when you contact us.' },
      { q: 'What happens after I choose a provider?', a: 'You will work directly with your chosen provider for service activation, payment, installation, and ongoing account management. Uverse Connect\'s role is limited to providing guidance.' },
    ]
  },
  {
    category: 'Provider Services',
    icon: AlertCircle,
    questions: [
      { q: 'What internet speeds are typically available?', a: 'Internet speeds vary by location and technology type. Fiber typically offers 100+ Mbps, cable offers 50-500 Mbps, DSL offers 5-100 Mbps, and fixed wireless (5G) offers 50+ Mbps. Availability depends on your address.' },
      { q: 'What should I look for in a cable TV package?', a: 'Consider the number of channels included, DVR capabilities, streaming integration, premium channel options, and whether it bundles with internet or phone services. Requirements vary by household.' },
      { q: 'What\'s a typical setup fee or installation cost?', a: 'Installation costs vary by provider and service type. Some providers include free or low-cost installation with bundles, while others may charge more. Always verify with the provider directly.' },
    ]
  },
  {
    category: 'General Questions',
    icon: HelpCircle,
    questions: [
      { q: 'How do I check what services are available at my address?', a: 'Service availability varies by location. Contact individual providers or use their availability checkers on their websites to see what services are available at your specific address.' },
      { q: 'Is Uverse Connect affiliated with any service providers?',a: 'No. We are completely independent and not affiliated with, authorized by, or endorsed by any internet service providers, cable companies, or telecom carriers.' },
      { q: 'Can I purchase internet or cable from Uverse Connect?', a: 'No. Uverse Connect does not sell internet, cable, or phone services. We provide guidance only. You purchase services directly from your chosen provider.' },
    ]
  }
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Support & Guidance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Questions About Our{' '}
              <span className="text-primary">Service</span>?
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Get answers to common questions about Uverse Connect's informational guidance services.
            </p>
            
            {/* Mandatory Disclaimer */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-sm max-w-2xl mx-auto">
              <p className="text-foreground mb-3">
                <strong>⚠️ Important Disclaimer</strong>
              </p>
              <p className="text-muted-foreground">
                Uverse Connect is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
              </p>
            </div>
            
            {/* Quick Contact */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8888110313"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                (888) 811-0313
              </a>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Form
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="floating-card px-6 border-none"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our support team is available 24/7.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Phone, title: 'Phone Support', description: '(888) 811-0313', sub: 'Available 24/7' },
              { icon: Mail, title: 'Email Support', description: 'support@universeconnect.com', sub: 'Response within 24 hours' },
              { icon: MessageCircle, title: 'Live Chat', description: 'Chat with us now', sub: 'Available 8am-10pm ET' }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="floating-card p-8 text-center hover:shadow-glow transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                <p className="font-medium text-primary mb-1">{option.description}</p>
                <p className="text-sm text-muted-foreground">{option.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SupportPage;
