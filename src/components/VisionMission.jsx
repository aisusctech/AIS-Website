import React, { forwardRef } from "react";

const VisionMission = forwardRef(function VisionMission(_, ref) {
  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
              Our Vision
            </div>
            <h2 className="text-3xl font-semibold text-gray-900">
              A Connected Community
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To serve as the cornerstone platform for Indian students at USC,
              cultivating cultural pride, academic excellence, and enduring
              relationships that transcend boundaries and generations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
              Our Mission
            </div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Purpose Driven Impact
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To create an inclusive, vibrant community that honors Indian
              heritage while supporting student success and bridging cultures
              through thoughtfully curated events, mentorship programs, and
              meaningful initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default VisionMission;