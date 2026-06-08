export default function Testimonial() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#F7F8FA" }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        {/* Left – Trusted heading */}
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1B3A6B" }}>
            Trusted by businesses across industries
          </h2>
        </div>

        {/* Right – Quote card */}
        <div className="md:w-2/3">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative">
            {/* Big quotemark */}
            <div
              className="absolute top-4 left-6 text-6xl font-serif leading-none opacity-20"
              style={{ color: "#1B3A6B" }}
            >
              "
            </div>

            <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 pl-4">
              We stopped reconciling two systems and started trusting one. AcuRental gave us real-time fleet availability inside the same ERP our accountants live in — that alone paid for the project.
            </blockquote>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "#E8773A" }}
              >
                RO
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Rental Operations Director</div>
                <div className="text-gray-500 text-xs">Regional equipment rental company · Acumatica + AcuRental</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
