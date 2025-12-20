import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Wifi, Tv, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PlanCategory = 'internet' | 'tv' | 'bundles';

interface Plan {
  id: string;
  name: string;
  price: number;
  category: PlanCategory;
  features: {
    name: string;
    included: boolean;
    value?: string;
  }[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'basic-internet',
    name: 'Basic Internet',
    price: 54,
    category: 'internet',
    features: [
      { name: 'Download Speed', included: true, value: '100 Mbps' },
      { name: 'Upload Speed', included: true, value: '20 Mbps' },
      { name: 'Data Cap', included: true, value: '500 GB' },
      { name: 'Wi-Fi Router', included: true },
      { name: 'Mesh Extenders', included: false },
      { name: 'Priority Support', included: false },
    ]
  },
  {
    id: 'plus-internet',
    name: 'Plus Internet',
    price: 79,
    category: 'internet',
    popular: true,
    features: [
      { name: 'Download Speed', included: true, value: '500 Mbps' },
      { name: 'Upload Speed', included: true, value: '100 Mbps' },
      { name: 'Data Cap', included: true, value: 'Unlimited' },
      { name: 'Wi-Fi Router', included: true },
      { name: 'Mesh Extenders', included: true, value: '1 included' },
      { name: 'Priority Support', included: false },
    ]
  },
  {
    id: 'ultra-internet',
    name: 'Ultra Internet',
    price: 99,
    category: 'internet',
    features: [
      { name: 'Download Speed', included: true, value: '1 Gbps' },
      { name: 'Upload Speed', included: true, value: '500 Mbps' },
      { name: 'Data Cap', included: true, value: 'Unlimited' },
      { name: 'Wi-Fi Router', included: true },
      { name: 'Mesh Extenders', included: true, value: '2 included' },
      { name: 'Priority Support', included: true },
    ]
  },
  {
    id: 'basic-tv',
    name: 'Essential TV',
    price: 45,
    category: 'tv',
    features: [
      { name: 'HD Channels', included: true, value: '125+' },
      { name: 'Sports Channels', included: true, value: 'Basic' },
      { name: 'Premium Movies', included: false },
      { name: 'DVR Storage', included: true, value: '50 hours' },
      { name: 'Multi-Room', included: false },
      { name: 'On-Demand Library', included: true },
    ]
  },
  {
    id: 'premium-tv',
    name: 'Premium TV',
    price: 85,
    category: 'tv',
    popular: true,
    features: [
      { name: 'HD Channels', included: true, value: '250+' },
      { name: 'Sports Channels', included: true, value: 'Full Package' },
      { name: 'Premium Movies', included: true },
      { name: 'DVR Storage', included: true, value: '200 hours' },
      { name: 'Multi-Room', included: true, value: '3 TVs' },
      { name: 'On-Demand Library', included: true },
    ]
  },
  {
    id: 'ultimate-tv',
    name: 'Ultimate TV',
    price: 120,
    category: 'tv',
    features: [
      { name: 'HD Channels', included: true, value: '500+' },
      { name: 'Sports Channels', included: true, value: 'Full + Premium' },
      { name: 'Premium Movies', included: true, value: 'All Networks' },
      { name: 'DVR Storage', included: true, value: 'Unlimited' },
      { name: 'Multi-Room', included: true, value: 'Unlimited' },
      { name: 'On-Demand Library', included: true },
    ]
  },
  {
    id: 'starter-bundle',
    name: 'Starter Bundle',
    price: 89,
    category: 'bundles',
    features: [
      { name: 'Internet Speed', included: true, value: '300 Mbps' },
      { name: 'TV Channels', included: true, value: '150+' },
      { name: 'DVR Storage', included: true, value: '100 hours' },
      { name: 'Streaming Apps', included: true },
      { name: 'Phone Service', included: false },
      { name: 'Premium Add-ons', included: false },
    ]
  },
  {
    id: 'family-bundle',
    name: 'Family Bundle',
    price: 139,
    category: 'bundles',
    popular: true,
    features: [
      { name: 'Internet Speed', included: true, value: '500 Mbps' },
      { name: 'TV Channels', included: true, value: '300+' },
      { name: 'DVR Storage', included: true, value: '300 hours' },
      { name: 'Streaming Apps', included: true },
      { name: 'Phone Service', included: true },
      { name: 'Premium Add-ons', included: false },
    ]
  },
  {
    id: 'ultimate-bundle',
    name: 'Ultimate Bundle',
    price: 199,
    category: 'bundles',
    features: [
      { name: 'Internet Speed', included: true, value: '1 Gbps' },
      { name: 'TV Channels', included: true, value: '500+' },
      { name: 'DVR Storage', included: true, value: 'Unlimited' },
      { name: 'Streaming Apps', included: true },
      { name: 'Phone Service', included: true },
      { name: 'Premium Add-ons', included: true },
    ]
  }
];

const categories = [
  { id: 'internet' as PlanCategory, name: 'Internet', icon: Wifi },
  { id: 'tv' as PlanCategory, name: 'Cable TV', icon: Tv },
  { id: 'bundles' as PlanCategory, name: 'Bundles', icon: Package },
];

const PlanComparison = () => {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('internet');

  const filteredPlans = plans.filter(plan => plan.category === activeCategory);

  return (
    <div className="py-16">
      {/* Category Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon className="w-5 h-5" />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`floating-card p-6 relative ${
              plan.popular ? 'border-2 border-primary' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
            )}

            <div className="text-center mb-6 pt-2">
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">${plan.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-2 border-b border-border/50 last:border-0 ${
                    !feature.included ? 'opacity-50' : ''
                  }`}
                >
                  <span className="text-sm text-foreground">{feature.name}</span>
                  <span className="flex items-center gap-2">
                    {feature.value && feature.included && (
                      <span className="text-sm font-medium text-foreground">{feature.value}</span>
                    )}
                    {feature.included ? (
                      <Check className="w-5 h-5 text-accent" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground" />
                    )}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant={plan.popular ? 'hero' : 'outline'}
              className="w-full"
            >
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlanComparison;