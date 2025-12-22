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
              <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
              
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 my-6">
                <p className="font-semibold text-foreground mb-2">Important Notice:</p>
                <p className="text-sm">
                  This refund policy applies to Uverse Connect's service assistance fees only.
                  For refunds related to actual internet, cable, or phone services, you must
                  contact your service provider directly. Uverse Connect does not handle refunds
                  for services provided by telecommunications companies or ISPs.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Refund Eligibility Window</h2>
              <p>
                Uverse Connect offers refunds for our service assistance fee within <strong>7-15 business days</strong> 
                from the date you paid for our assistance services. Refund eligibility depends on the 
                type and stage of assistance provided as detailed below.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Eligible for Full Refund</h2>
              <p>
                You may receive a full refund of the Uverse Connect assistance fee if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You have not yet received any consultation or guidance services from our team</li>
                <li>No provider connections or referrals have been facilitated on your behalf</li>
                <li>Your refund request is submitted within 7 business days of payment</li>
                <li>You have not signed up for or activated services with any provider through our assistance</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Eligible for Partial Refund</h2>
              <p>
                A partial refund (typically 50% of the assistance fee) may be provided if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You received initial consultation but did not proceed with a provider</li>
                <li>Your refund request is submitted between 8-15 business days of payment</li>
                <li>Services were facilitated but not yet activated with a provider</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Not Eligible for Refund</h2>
              <p>
                Uverse Connect assistance fees are non-refundable if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>More than 15 business days have passed since payment</li>
                <li>You have completed sign-up with a provider through our assistance</li>
                <li>Service activation has occurred with your chosen provider</li>
                <li>You received complete consultation services and provider facilitation</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">How to Request a Refund</h2>
              <p>
                To request a refund, please contact our support team within the eligible timeframe:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: support@universeconnect.com with "Refund Request" in the subject line</li>
                <li>Phone: (888) 811-0313 during business hours (9 AM - 6 PM EST)</li>
                <li>Include your payment confirmation number and reason for refund request</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Refund Processing Timeline</h2>
              <p>
                Once a refund request is approved:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refunds are processed within 5-7 business days of approval</li>
                <li>Funds are credited to the original payment method used</li>
                <li>You will receive confirmation via email once the refund is processed</li>
                <li>Bank processing may take an additional 3-5 business days</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Provider Service Refunds</h2>
              <p>
                Uverse Connect cannot process refunds for services purchased from internet providers, 
                cable companies, or telecommunications carriers. For refunds related to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly internet or cable bills</li>
                <li>Provider installation fees</li>
                <li>Equipment charges</li>
                <li>Service activation costs</li>
              </ul>
              <p>
                You must contact your service provider directly. Each provider has their own 
                refund policies and procedures.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Questions About This Policy</h2>
              <p>
                If you have questions about refund eligibility or need clarification on this policy, 
                please contact our support team at support@universeconnect.com or call (888) 811-0313.
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
