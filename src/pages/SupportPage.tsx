import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, Phone, Mail, MessageCircle, ChevronDown, ArrowRight, Wrench, Wifi, Tv, CreditCard } from 'lucide-react';
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
    category: 'Internet',
    icon: Wifi,
    questions: [
      { q: 'What speeds are available in my area?', a: 'Speeds vary by location. Use our coverage checker to see available plans. Most areas have access to speeds up to 1 Gbps.' },
      { q: 'Do I need to buy my own modem?', a: 'No, we provide a free modem and router with all plans. You can also use your own compatible equipment if preferred.' },
      { q: 'Is there a data cap?', a: 'All our plans include unlimited data with no caps or throttling.' },
    ]
  },
  {
    category: 'Cable TV',
    icon: Tv,
    questions: [
      { q: 'Can I watch TV on multiple devices?', a: 'Yes! Our packages include multi-room viewing with the ability to watch on TVs, tablets, and phones.' },
      { q: 'Is DVR included?', a: 'DVR is included with most packages. Basic plans include a standard DVR, while premium plans include whole-home DVR.' },
      { q: 'Can I add premium channels later?', a: 'Absolutely! You can add or remove premium channels anytime through your account or by calling support.' },
    ]
  },
  {
    category: 'Billing',
    icon: CreditCard,
    questions: [
      { q: 'When is my bill due?', a: 'Bills are due on the same date each month, based on your installation date. You can view and change your due date in your account.' },
      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, bank transfers, and PayPal.' },
      { q: 'Are there any hidden fees?', a: 'No hidden fees. The price you see is what you pay, plus applicable taxes. Equipment and installation are included.' },
    ]
  },
  {
    category: 'Technical',
    icon: Wrench,
    questions: [
      { q: 'How do I reset my router?', a: 'Unplug the router, wait 30 seconds, then plug it back in. Wait 2-3 minutes for it to fully restart.' },
      { q: 'My internet is slow. What should I do?', a: 'Try restarting your router first. If issues persist, run a speed test and contact support with the results.' },
      { q: 'How do I change my Wi-Fi password?', a: 'Log into your router settings (usually at 192.168.1.1) or use our mobile app to change your password.' },
    ]
  }
];

const SupportPage = () => {
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
              <HelpCircle className="w-4 h-4" />
              <span>Support Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              How Can We{' '}
              <span className="text-primary">Help You?</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              { icon: Mail, title: 'Email Support', description: 'support@streamnet.com', sub: 'Response within 24 hours' },
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
