import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is Uverse Connect a telecommunications company or internet service provider?',
      answer: 'No. Uverse Connect is an independent third-party service assistance platform that launched in 2025. We help consumers understand and navigate their options when looking for internet, cable TV, and related services. We are not a telecommunications company, ISP, or cable provider ourselves.'
    },
    {
      question: 'Can I purchase internet or cable plans directly from Uverse Connect?',
      answer: 'No. Uverse Connect does not sell internet plans, cable subscriptions, or telecommunications services directly. We provide guidance, education, and assistance to help you understand available options from various providers™. You will complete any purchase or sign-up process directly with the provider you choose.'
    },
    {
      question: 'What does Uverse Connect charge for its service?',
      answer: 'Uverse Connect charges a service assistance fee for our consultation, guidance, and support services. This fee covers our time helping you understand options, comparing providers, and facilitating connections. Our typical assistance fee is $54, though this may vary based on the scope of assistance needed. This fee is separate from any charges you will pay directly to your chosen service provider.'
    },
    {
      question: 'Will I be billed by Uverse Connect for my monthly internet or cable service?',
      answer: 'No. Uverse Connect only charges for our one-time assistance services. Your monthly internet, cable, or phone bills will come directly from the provider you choose to work with. We have no ongoing billing relationship with you after our assistance is complete.'
    },
    {
      question: 'Does Uverse Connect have access to my account passwords or personal service information?',
      answer: 'No. Uverse Connect does not have access to your account credentials, passwords, or personal service information with any provider. You create and manage all accounts directly with your chosen provider. We simply provide guidance during your decision-making process.'
    },
    {
      question: 'If I have technical issues with my internet or cable service, do I contact Uverse Connect?',
      answer: 'For technical support, service outages, billing questions, or account changes related to your internet, cable, or phone service, you should contact your provider directly. Uverse Connect provides assistance choosing and understanding services, but ongoing technical support and account management are handled by your service provider.'
    },
    {
      question: 'What is Uverse Connect\'s refund policy?',
      answer: 'Uverse Connect offers refunds for our service assistance fee within 7-15 business days under certain conditions. Refund eligibility depends on the type and stage of assistance provided. Please see our Refund Policy page for complete details on eligibility requirements, timeframes, and the refund request process.'
    },
    {
      question: 'Is Uverse Connect affiliated with or endorsed by any internet or cable providers?',
      answer: 'No. Uverse Connect is completely independent and is not affiliated with, sponsored by, or endorsed by any internet service providers, cable companies, or telecommunications carriers. We provide unbiased guidance across options from multiple providers™. All company names and trademarks are the property of their respective owners.'
    },
    {
      question: 'How does Uverse Connect help me choose a service?',
      answer: 'Our team of advisors helps you understand different types of internet connections (fiber, DSL, cable, 5G), cable TV packages, streaming options, and bundle deals. We educate you on technical terms, help you compare what different providers offer in your area, and guide you through the decision-making process based on your specific needs and budget.'
    },
    {
      question: 'What happens after I receive assistance from Uverse Connect?',
      answer: 'After we help you understand your options and you choose a provider, you\'ll work directly with that provider to complete sign-up, installation scheduling, payment, and service activation. Uverse Connect\'s role is complete once we\'ve provided guidance. The provider you select will handle all aspects of service delivery, billing, and ongoing support.'
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
