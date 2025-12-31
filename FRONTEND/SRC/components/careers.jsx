import { useState } from "react";

export default function Careers() {
  const [open, setOpen] = useState(null);

  const handleToggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <section
      id="careers"
      className="bg-gray-50 py-20 text-center px-6 md:px-20"
    >
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Careers</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Join Antravox and be part of a growing technology-driven communication
        company. Explore your path with us — from software development to
        marketing and internship opportunities.
      </p>

      {/* Careers Options */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Developers */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Developers
          </h3>
          <p className="text-gray-500 mb-4">
            Build scalable communication platforms and APIs that power global
            businesses.
          </p>
          <button
            onClick={() => handleToggle("developers")}
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
          >
            View Eligibility
          </button>
          {open === "developers" && (
            <div className="mt-4 text-left bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
              <strong>Eligibility Criteria:</strong>
              <ul className="list-disc list-inside">
                <li>BR, BTECH, MCA, MTECH</li>
                <li>All Computer Branches</li>
              </ul>
            </div>
          )}
        </div>

        {/* Marketing */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Marketing
          </h3>
          <p className="text-gray-500 mb-4">
            Drive business growth with strategic marketing and customer
            engagement initiatives.
          </p>
          <button
            onClick={() => handleToggle("marketing")}
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
          >
            View Eligibility
          </button>
          {open === "marketing" && (
            <div className="mt-4 text-left bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
              <strong>Eligibility Criteria:</strong>
              <ul className="list-disc list-inside">
                <li>MBA Graduates</li>
              </ul>
            </div>
          )}
        </div>

        {/* Internships */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Internships
          </h3>
          <p className="text-gray-500 mb-4">
            Kickstart your career by joining our internship program and gain
            real-world technical experience.
          </p>
          <button
            onClick={() => handleToggle("internships")}
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
          >
            View Eligibility
          </button>
          {open === "internships" && (
            <div className="mt-4 text-left bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
              <strong>Eligibility Criteria:</strong>
              <ul className="list-disc list-inside">
                <li>BR, BTECH, MCA, MTECH, MSC</li>
                <li>All Computer Branches</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}s