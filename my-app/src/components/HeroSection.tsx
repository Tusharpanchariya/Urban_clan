// src/components/HeroSection.tsx

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Trusted Professionals Near You</h1>
        <p className="text-lg mb-8">Book electricians, cleaners, makeup artists and more — all from one platform.</p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
