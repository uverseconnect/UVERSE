import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';

const cities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
  'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
  'Seattle', 'Denver', 'Boston', 'Portland', 'Atlanta'
];

const CoveragePage = () => {
  const [address, setAddress] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<null | 'available' | 'unavailable'>(null);

  const handleCheck = () => {
    if (!address.trim()) return;
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setResult('available');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 left-0 w-[600px] h-[600px] blob opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Check Coverage</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Find Service in{' '}
              <span className="text-primary">Your Area</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Enter your address to check if high-speed internet and cable TV services are available in your area.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Address Checker */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="floating-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Check Your Address
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your street address..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-12 h-14 text-base rounded-xl"
                  />
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleCheck}
                  disabled={isChecking || !address.trim()}
                  className="h-14"
                >
                  {isChecking ? 'Checking...' : 'Check Availability'}
                </Button>
              </div>
              
              {result === 'available' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-accent/10 border border-accent/20"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Great news! Service is available.</p>
                      <p className="text-sm text-muted-foreground">Contact us to get started with your installation.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Cities */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Available in Major Cities
            </h2>
            <p className="text-lg text-muted-foreground">
              And expanding to more areas every day.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-2 rounded-xl bg-muted text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Can't Find Your Area?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us and we'll help you find the best solution.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CoveragePage;
