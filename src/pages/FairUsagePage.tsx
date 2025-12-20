import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const FairUsagePage = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Fair Usage Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Purpose</h2>
              <p>
                This Fair Usage Policy ensures that all customers can enjoy a quality internet experience. 
                We offer unlimited data on all plans, but this policy helps maintain network performance for everyone.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Acceptable Use</h2>
              <p>Our services are intended for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal and household internet use</li>
                <li>Streaming, gaming, and entertainment</li>
                <li>Remote work and video conferencing</li>
                <li>General web browsing and communication</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Network Management</h2>
              <p>
                During periods of network congestion, we may prioritize traffic to ensure fair access 
                for all users. This does not affect normal use for the vast majority of customers.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Prohibited Activities</h2>
              <p>The following activities are not permitted:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Operating commercial servers or services</li>
                <li>Activities that negatively impact network performance</li>
                <li>Illegal file sharing or distribution</li>
                <li>Reselling or redistributing service</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
              <p>
                Questions about this policy? Contact us at support@streamnet.com or (888) 811-0313.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FairUsagePage;
