import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is Uverse Connect a telecommunications company or internet service provider?',
      answer: 'No. Uverse Connect is an independent third-party service assistance provider. We provide general guidance and informational support related to internet, cable TV, and telecommunications services. We are not a telecommunications company, ISP, or cable provider ourselves.'
    },
    {
      question: 'Can I purchase internet or cable services directly from Uverse Connect?',
      answer: 'No. Uverse Connect does not sell internet plans, cable subscriptions, or telecommunications services. We provide guidance and informational support to help you understand available options from various providers. You will complete any service purchase or sign-up directly with the provider you choose.'
    },
    {
      question: 'Is Uverse Connect affiliated with or endorsed by any internet or cable providers?',
      answer: 'No. Uverse Connect is completely independent and not affiliated with, authorized by, or endorsed by any internet service providers, cable companies, or telecommunications carriers. We provide unbiased, independent guidance. All company names and trademarks are the property of their respective owners.'
    },
    {
      question: 'What kind of assistance do you provide?',
      answer: 'We help you understand different types of internet connections (fiber, DSL, cable, 5G), cable TV options, streaming services, and bundle packages. We educate you on technical terms, explain what different providers offer in your area, and guide you through understanding your options based on your specific needs.'
    },
    {
      question: 'If I have technical issues with my service, do I contact Uverse Connect?',
      answer: 'No. For technical support, service outages, billing questions, or account issues with your internet or cable service, you should contact your service provider directly. Uverse Connect provides guidance on choosing services, but ongoing technical support and account management are handled by your provider.'
    },
    {
      question: 'Does Uverse Connect have access to my account information?',
      answer: 'No. Uverse Connect does not have access to your account credentials, passwords, or personal service information with any provider. You create and manage all accounts directly with your chosen provider. We only provide informational guidance.'
    },
    {
      question: 'What happens after I choose a provider?',
      answer: 'After we help you understand your options and you decide on a provider, you will work directly with that provider to complete sign-up, installation scheduling, payments, and service activation. Our role is limited to providing informational guidance about your options.'
    },
    {
      question: 'Do you guarantee specific service speeds or quality from providers?',
      answer: 'No. We provide informational guidance about what different providers offer, but we cannot guarantee service quality, speeds, reliability, or availability. Those depend entirely on your chosen provider. We recommend verifying all details directly with the provider before signing up.'
    },
    {
      question: 'Will I be billed by Uverse Connect for monthly services?',
      answer: 'No. Any monthly charges for internet, cable, or phone services will come directly from your chosen provider. Uverse Connect provides informational guidance and assistance only.'
    },
    {
      question: 'How is Uverse Connect different from official customer support?',
      answer: 'Uverse Connect is an independent third-party provider offering general informational guidance. We are not official support for any provider. For official support, account management, billing questions, or technical issues, you need to contact your service provider directly.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Uverse Connect's service assistance platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                  >
                    <span className="font-semibold text-lg pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Still Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 text-center bg-primary/5 rounded-xl p-8 border border-primary/10"
            >
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you understand our assistance services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Contact Support
                </a>
                <a
                  href="tel:8888110313"
                  className="px-6 py-3 bg-card text-foreground rounded-lg hover:bg-accent transition-colors font-medium border border-border"
                >
                  Call (888) 811-0313
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
