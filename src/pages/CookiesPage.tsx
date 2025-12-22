import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const CookiesPage = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide you with a better experience.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our services and user experience</li>
                <li>Provide relevant content and information</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Types of Cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Managing Cookies</h2>
              <p>
                You can control cookies through your browser settings. Note that disabling certain cookies 
                may affect your experience on our website.
              </p>
              
              <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
              <p>
                Questions about our Cookie Policy? Contact us at support@universeconnect.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
