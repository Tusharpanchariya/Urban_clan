// src/components/ServicesSection.tsx

const services = [
  { name: 'Electricians', icon: '⚡' },
  { name: 'Plumbers', icon: '🚿' },
  { name: 'Salon at Home', icon: '💇‍♀️' },
  { name: 'AC Repair', icon: '❄️' },
  { name: 'Cleaning', icon: '🧹' },
  { name: 'Carpenters', icon: '🪚' },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <p className="font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
