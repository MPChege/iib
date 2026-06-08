const footerLinks = {
  Solutions: ["Acumatica Cloud ERP", "AcuRental", "AcuBoost", "Sage 100", "Custom Developments"],
  Industries: ["Equipment Rental", "Event Rental", "Scaffolding", "AV & Production Rental", "Specialty Rental", "Distribution"],
  Resources: ["About", "Success Stories", "Product Videos", "Webinars", "Blog"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              {[
                { letter: "i", bg: "#1B3A6B" },
                { letter: "i", bg: "#E8773A" },
                { letter: "g", bg: "#1B3A6B" },
              ].map((item, i) => (
                <div key={i} className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: item.bg }}>
                  <span className="text-white font-bold text-sm">{item.letter}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Helping rental businesses streamline operations, improve visibility, and grow faster with Acumatica Cloud ERP solutions.
            </p>
            <p className="text-gray-500 text-xs">
              Founded in 1992, IIG combines deep industry expertise with modern technology to help organizations operate at their peak.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-sm mb-4">{heading}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (818) 900-1764
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@iigservices.com
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>457 Palm Dr, Suite 210<br />Glendale, Los Angeles<br />CA 91202</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Monday – Friday<br />8:00 AM – 5:30 PM PST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© 2024 Information Integration Group (IIG). All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Accessibility Menu</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
