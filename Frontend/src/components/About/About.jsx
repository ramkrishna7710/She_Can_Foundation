function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">About Us</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            She Can Foundation is committed to empowering women and supporting
            children through education, skill development, healthcare
            initiatives, and community support programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="
            bg-pink-50
            rounded-xl
            p-8
            shadow
            hover:shadow-lg
            transition
            "
          >
            <div className="text-5xl mb-5">🎓</div>

            <h3 className="text-2xl font-bold">Education</h3>

            <p className="mt-4 text-gray-600">
              Providing learning opportunities and educational resources.
            </p>
          </div>

          <div
            className="
            bg-blue-50
            rounded-xl
            p-8
            shadow
            hover:shadow-lg
            transition
            "
          >
            <div className="text-5xl mb-5">❤️</div>

            <h3 className="text-2xl font-bold">Healthcare</h3>

            <p className="mt-4 text-gray-600">
              Supporting communities through healthcare awareness programs.
            </p>
          </div>

          <div
            className="
            bg-yellow-50
            rounded-xl
            p-8
            shadow
            hover:shadow-lg
            transition
            "
          >
            <div className="text-5xl mb-5">🤝</div>

            <h3 className="text-2xl font-bold">Support</h3>

            <p className="mt-4 text-gray-600">
              Building stronger communities through social initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
