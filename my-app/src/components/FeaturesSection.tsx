// src/components/FeaturesSection.tsx

const features = [
  { title: 'Verified Experts', desc: 'All service partners are background checked and certified.' },
  { title: 'Easy Booking', desc: 'Book services with just a few clicks and real-time availability.' },
  { title: 'Transparent Pricing', desc: 'No hidden charges. Clear pricing and payment system.' },
  { title: 'Customer Support', desc: '24x7 dedicated support to help you anytime.' },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((feature, i) => (
            <div key={i} className="p-6 border rounded-lg hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
