import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const TermsPage = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
              
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 my-6">
                <p className="font-semibold text-foreground mb-2">Important Disclosure:</p>
                <p className="text-sm">
                  Uverse Connect is an independent third-party service assistance platform, not an internet service provider,
                  cable company, or telecommunications carrier. These Terms govern your use of Uverse Connect's assistance services only.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Uverse Connect's assistance services, you agree to be bound by these Terms and Conditions 
                and our Privacy Policy. If you do not agree, please do not use our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">2. Nature of Our Services</h2>
              <p>
                Uverse Connect provides educational guidance, consultation, and assistance to help consumers understand and navigate 
                internet, cable TV, and telecommunications service options. We do NOT:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell or provide internet, cable TV, or phone services directly</li>
                <li>Act as an agent or representative of any service provider</li>
                <li>Have authorization to make binding commitments on behalf of providers</li>
                <li>Handle technical support, installation, or billing for provider services</li>
              </ul>
              <p>
                All services you purchase or activate are provided by independent third-party providers, not by Uverse Connect.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not attempt to interfere with the operation of our services</li>
                <li>Maintain the confidentiality of your account information</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, 
                is the property of Uverse Connect and is protected by intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">5. Limitation of Liability</h2>
              <p>
                Uverse Connect provides information assistance only and is not directly responsible for 
                services provided by third-party providers. We make no guarantees about service availability 
                or performance.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services 
                after changes constitutes acceptance of the modified terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">7. Contact</h2>
              <p>
                For questions about these Terms, contact us at support@universeconnect.com or (888) 811-0313.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
