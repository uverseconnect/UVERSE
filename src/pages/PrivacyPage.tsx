import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our services, contact customer support, or communicate with us.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Communicate about products, services, and events</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                Contact us at support@streamnet.com to exercise these rights.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: support@streamnet.com
                <br />
                Phone: (888) 811-0313
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
