function Mission() {
  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold">Our Mission</h2>

          <p className="mt-8 text-gray-600 leading-8">
            Our mission is to empower women and children by creating
            opportunities that improve education, health, economic independence,
            and social wellbeing. We believe sustainable change begins with
            empowering communities and providing equal opportunities.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">✓</div>

              <p>Promote women's empowerment</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">✓</div>

              <p>Support child education initiatives</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">✓</div>

              <p>Develop sustainable communities</p>
            </div>
          </div>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            shadow-lg
            p-10
            "
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-5xl font-bold text-pink-600">10K+</h1>

              <p className="mt-3">Lives Impacted</p>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-pink-600">500+</h1>

              <p className="mt-3">Volunteers</p>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-pink-600">100+</h1>

              <p className="mt-3">Programs</p>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-pink-600">50+</h1>

              <p className="mt-3">Communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
