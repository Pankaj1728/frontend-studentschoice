'use client';

import { motion } from 'framer-motion';

const topRowDestinations = [
  { name: 'United States',  image: '/assets/images/countryplace/USA.png' },
  { name: 'United Kingdom', image: '/assets/images/countryplace/United Kingdom.png' },
  { name: 'Canada',         image: '/assets/images/countryplace/canadaa.png' },
  { name: 'Germany',        image: '/assets/images/countryplace/Germany.png' },
  { name: 'Ireland',        image: '/assets/images/countryplace/Ireland.png' },
  { name: 'France',         image: '/assets/images/countryplace/France.png' },
  { name: 'Australia',      image: '/assets/images/countryplace/Australia.png' },
  { name: 'India',          image: '/assets/images/countryplace/india.png' },
];

const bottomRowDestinations = [
  { name: 'Spain',        image: '/assets/images/countryplace/Spain.png' },
  { name: 'Singapore',    image: '/assets/images/countryplace/Singapore.png' },
  { name: 'Switzerland',  image: '/assets/images/countryplace/Switzerland.png' },
  { name: 'New Zealand',  image: '/assets/images/countryplace/New Zealand.png' },
  { name: 'UAE',          image: '/assets/images/countryplace/UAE.png' },
  { name: 'Netherlands',  image: '/assets/images/countryplace/Netherlands.png' },
  { name: 'Sweden',       image: '/assets/images/countryplace/Swedish.png' },
  { name: 'Japan',        image: '/assets/images/countryplace/Japan.png' },
  { name: 'South Korea',  image: '/assets/images/countryplace/South Korea.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function DestinationsSection() {
  return (
    <section className="w-full bg-white pt-10 pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#6E00E0] mb-3 tracking-tight">
            Explore popular study destinations
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 font-medium">
            Find a country to learn and excel in all aspects of life
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Top Row - Scrolling Left */}
          <div className="overflow-hidden">
            <div className="flex items-center animate-marquee-left-fast" style={{ width: 'max-content' }}>
              {[...topRowDestinations, ...topRowDestinations, ...topRowDestinations, ...topRowDestinations].map((dest, idx) => (
                <div key={idx} className="w-40 md:w-56 flex-shrink-0 px-3">
                  <div className="w-full h-24 md:h-32 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="mt-3 text-[14px] md:text-[16px] font-bold text-gray-700 hover:text-[#6E00E0] transition-colors text-center">
                    {dest.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="overflow-hidden">
            <div className="flex items-center animate-marquee-right-fast" style={{ width: 'max-content' }}>
              {[...bottomRowDestinations, ...bottomRowDestinations, ...bottomRowDestinations, ...bottomRowDestinations].map((dest, idx) => (
                <div key={idx} className="w-40 md:w-56 flex-shrink-0 px-3">
                  <div className="w-full h-24 md:h-32 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="mt-3 text-[14px] md:text-[16px] font-bold text-gray-700 hover:text-[#6E00E0] transition-colors text-center">
                    {dest.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
