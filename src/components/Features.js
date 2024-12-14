export default function Features() {
  return (
    <section id="features" className="text-center py-16 px-8 bg-light">
      <h2 className="text-4xl font-bold text-primary mb-12">
        Why Choose Tranxity?
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white border border-primary rounded-lg p-8 shadow-lg hover:shadow-3xl transition transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 bg-primary text-light rounded-full mx-auto mb-4">
            <span className="text-2xl font-bold">💸</span>
          </div>
          <h3 className="text-2xl font-semibold text-dark mb-3">
            Affordable Rates
          </h3>
          <p className="text-gray-600">
            Enjoy flexible pricing plans tailored to your budget.
          </p>
        </div>
        <div className="bg-white border border-primary rounded-lg p-8 shadow-lg hover:shadow-3xl transition transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 bg-primary text-light rounded-full mx-auto mb-4">
            <span className="text-2xl font-bold">🌱</span>
          </div>
          <h3 className="text-2xl font-semibold text-dark mb-3">
            Eco-Friendly
          </h3>
          <p className="text-gray-600">
            Reduce your carbon footprint while commuting.
          </p>
        </div>
        <div className="bg-white border border-primary rounded-lg p-8 shadow-lg hover:shadow-3xl transition transform hover:-translate-y-1">
          <div className="flex items-center justify-center w-16 h-16 bg-primary text-light rounded-full mx-auto mb-4">
            <span className="text-2xl font-bold">📍</span>
          </div>
          <h3 className="text-2xl font-semibold text-dark mb-3">
            Convenient Locations
          </h3>
          <p className="text-gray-600">
            Pick up and drop off bikes at multiple spots in your city.
          </p>
        </div>
      </div>
    </section>
  );
}
