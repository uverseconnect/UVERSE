import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">General Information</h2>
              <p>
                The information provided on this website is for general informational purposes only. 
                StreamNet provides assistance and information about internet and cable TV services 
                but is not a direct service provider.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">No Guarantees</h2>
              <p>
                While we strive to provide accurate and up-to-date information, we make no representations 
                or warranties about the completeness, accuracy, reliability, or availability of any 
                information, products, or services mentioned.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Third-Party Services</h2>
              <p>
                Service availability, pricing, and features are subject to change by service providers 
                and may vary by location. We are not responsible for the actions or services of 
                third-party providers.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Professional Advice</h2>
              <p>
                The content on this website is not intended to be a substitute for professional advice. 
                Always consult with qualified professionals for specific guidance.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Limitation of Liability</h2>
              <p>
                StreamNet shall not be liable for any losses or damages arising from your use of 
                this website or reliance on any information provided herein.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
              <p>
                For questions or concerns, please contact us at support@streamnet.com or (888) 811-0313.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
