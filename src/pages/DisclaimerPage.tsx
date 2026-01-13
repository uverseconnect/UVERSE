import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

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
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Disclaimer</h1>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: January 2026</p>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 my-6">
                <p className="font-semibold text-foreground mb-3 text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Official Disclaimer
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  Uverse Connect is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Nature of Our Service</h2>
              <p>
                Uverse Connect provides educational guidance, consultation, and general informational assistance to help consumers
                understand and navigate available internet, cable TV, and telecommunications service
                options. We are not affiliated with, endorsed by, authorized by, or acting on behalf of any service
                provider, ISP, cable company, or telecommunications carrier.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">What We Are NOT</h2>
              <p>
                Uverse Connect is NOT:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>An Internet Service Provider (ISP)</li>
                <li>A cable television company</li>
                <li>A telecommunications carrier</li>
                <li>An official customer support service for any brand</li>
                <li>Affiliated, authorized, or endorsed by any telecom or cable company</li>
                <li>A seller of internet or cable subscriptions</li>
                <li>A provider of guaranteed technical fixes</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">No Direct Service Provision</h2>
              <p>
                Uverse Connect does not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sell internet plans, cable packages, or phone services</li>
                <li>Provide direct internet connectivity or cable television broadcasts</li>
                <li>Install or maintain telecommunications equipment</li>
                <li>Bill customers for monthly internet, cable, or phone services</li>
                <li>Handle technical support for internet or cable service issues</li>
                <li>Have access to provider account credentials or systems</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Our Role Is Limited</h2>
              <p className="text-foreground font-semibold">
                Our role is limited to independent guidance and assistance only.
              </p>
              <p>
                We help users:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understand internet and broadband service options</li>
                <li>Get practical guidance on common connectivity issues</li>
                <li>Learn how to navigate service provider processes</li>
                <li>Receive general informational support related to cable TV services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Trademark Disclaimer</h2>
              <p>
                All company names, service provider names, brand names, logos, and trademarks mentioned
                on this website are the property of their respective owners. References to these brands
                are for informational and educational purposes only and do not imply any affiliation,
                endorsement, authorization, or partnership. Uverse Connect is not authorized to act on behalf of any
                internet service provider, cable company, or telecommunications carrier.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Information Accuracy</h2>
              <p>
                While we make every effort to provide accurate and current information about service
                options, pricing, and availability:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service availability varies by location and is determined solely by providers</li>
                <li>Pricing and plan details are subject to change without notice by providers</li>
                <li>Promotional offers may have eligibility requirements or time restrictions</li>
                <li>We cannot guarantee the accuracy of third-party provider information</li>
              </ul>
              <p>
                Always verify current pricing, availability, and terms directly with service providers
                before making any decisions.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Third-Party Provider Responsibility</h2>
              <p>
                Any services you choose to purchase or activate are provided entirely by third-party
                providers. Uverse Connect is not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service quality, speed, reliability, or availability provided by third parties</li>
                <li>Provider billing practices, payment processing, or billing disputes</li>
                <li>Installation scheduling, delays, or quality of installation work</li>
                <li>Technical issues, outages, or service interruptions</li>
                <li>Provider customer service quality or response times</li>
                <li>Contract terms, cancellation policies, or fees imposed by providers</li>
                <li>Equipment functionality, compatibility, or return policies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">No Guarantees or Warranties</h2>
              <p>
                Uverse Connect provides assistance and information "as is" without any guarantees or warranties.
                We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>That you will qualify for or be approved for any specific service</li>
                <li>Any particular level of service quality or performance from providers</li>
                <li>The availability of specific plans, pricing, or promotions in your area</li>
                <li>That providers will honor promotional offers or pricing discussed</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Uverse Connect and its founders, employees, and
                representatives shall not be liable for any direct, indirect, incidental, consequential,
                or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of our assistance services or website</li>
                <li>Any information, advice, or guidance provided by our team</li>
                <li>Services provided by third-party providers you choose to work with</li>
                <li>Delays, errors, or interruptions in our service</li>
                <li>Decisions made based on information provided on this website</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Independent Decision Making</h2>
              <p>
                Our assistance is educational and advisory in nature. All final decisions about which
                services to purchase, which providers to work with, and what terms to accept are made
                solely by you. We strongly encourage you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Review all contract terms and conditions carefully before signing</li>
                <li>Verify pricing and service details directly with providers</li>
                <li>Ask providers about cancellation policies and fees</li>
                <li>Understand your rights and responsibilities under provider agreements</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Information</h2>
              <p>
                If you have questions about this disclaimer or need clarification about the nature of
                our services, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Legal Business Name:</strong> Uverse Connect</li>
                <li><strong>Email:</strong> support@universeconnect.com</li>
                <li><strong>Phone:</strong> (888) 811-0313</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
                <p className="text-foreground font-semibold">
                  By using our services, you acknowledge that you have read, understood, and agree to this disclaimer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisclaimerPage;
