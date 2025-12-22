import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Switching to Uverse Connect was the best decision for our family. The internet speed is incredible, and we never have buffering issues during movie nights anymore!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "New York, NY",
    rating: 5,
    text: "As a remote worker, reliable internet is crucial. Uverse Connect delivers consistent speeds all day long. Their customer support is also top-notch!",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Chicago, IL",
    rating: 5,
    text: "The cable TV package has everything we need - sports, movies, and kids channels. Plus the bundle pricing saved us a lot compared to our previous provider.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Houston, TX",
    rating: 4,
    text: "Great value for the price. Installation was quick and the technician was very professional. Highly recommend for anyone looking for reliable service.",
    avatar: "DT"
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    rating: 5,
    text: "We've tried several providers over the years, but Uverse Connect stands out for their reliability and excellent customer service. No more dropped connections!",
    avatar: "JM"
  },
  {
    id: 6,
    name: "Robert Wilson",
    location: "Philadelphia, PA",
    rating: 5,
    text: "The 1 Gbps plan is perfect for our household with multiple gamers. Zero lag, even during peak hours. Absolutely worth every penny!",
    avatar: "RW"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from thousands of satisfied customers across the country.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="floating-card p-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '50K+', label: 'Reviews' },
            { value: '98%', label: 'Satisfaction' },
            { value: '2M+', label: 'Happy Customers' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;