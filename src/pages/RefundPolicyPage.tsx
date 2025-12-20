import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const RefundPolicyPage = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Service Cancellation</h2>
              <p>
                Customers may cancel their service at any time by contacting our support team. 
                Cancellation requests must be made at least 5 business days before the next billing cycle.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Prorated Refunds</h2>
              <p>
                If you cancel your service mid-cycle, you may be eligible for a prorated refund 
                for unused services. This applies to monthly subscription fees only.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Installation Fees</h2>
              <p>
                Installation and setup fees are generally non-refundable once services have been 
                installed and activated. Exceptions may be made on a case-by-case basis.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Equipment Returns</h2>
              <p>
                Leased equipment must be returned within 14 days of service cancellation. 
                Failure to return equipment may result in additional charges.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Refund Processing</h2>
              <p>
                Approved refunds are typically processed within 5-10 business days. 
                Refunds will be credited to the original payment method.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
              <p>
                For refund inquiries, contact us at support@streamnet.com or (888) 811-0313.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
