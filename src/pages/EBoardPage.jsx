import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import img3 from "../assets/img3.jpg";
import ContactStrip from "../components/ContactStrip";

export default function EBoardPage() {
  const [expanded, setExpanded] = useState(0);

  const teams = [
    {
      name: "President & Vice President",
      type: "executive",
      members: [
        { name: "President Name", role: "President" },
        { name: "Vice President Name", role: "Vice President" },
      ],
    },
    { name: "Tech Team", type: "department", description: "Building and maintaining our digital presence." },
    { name: "Finance Team", type: "department", description: "Managing budgets and financial operations." },
    { name: "Content Team", type: "department", description: "Creating engaging content and communications." },
    { name: "Events Team", type: "department", description: "Planning and executing memorable experiences." },
    { name: "Relations Team", type: "department", description: "Building community and external partnerships." },
    { name: "Sponsorship Team", type: "department", description: "Securing partnerships and funding." },
  ];

  return (
    <main className="pt-24 pb-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 font-light">Leadership</div>
          <h1 className="text-5xl font-light">Executive Board 2025</h1>
        </div>

        <div className="mb-16">
          <div className="aspect-[21/9] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center rounded">
            <div className="text-center px-8 text-gray-500">
                                <img src={img3}   />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {teams.map((team, i) => (
            <div key={i} className="border-t border-gray-200 pt-6">
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h3 className="text-3xl font-light">{team.name}</h3>
                <ChevronDown
                  size={24}
                  className={`text-gray-400 transition-transform ${expanded === i ? "rotate-180" : ""}`}
                />
              </button>

              {expanded === i && (
                <div className="animate-fadeIn">
                  {team.type === "executive" ? (
                    <div>
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {team.members.map((m, k) => (
                          <div key={k} className="text-center">
                            <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 mb-4 flex items-center justify-center mx-auto max-w-xs rounded">
                              <div className="text-center px-6 text-gray-500">
                                <div className="text-sm mb-1">📸 INSERT IMAGE HERE</div>
                                <div className="text-xs">{m.role} Portrait (600×800)</div>
                              </div>
                            </div>
                            <h4 className="text-xl font-light mb-1">{m.name}</h4>
                            <p className="text-sm text-gray-500 font-light">{m.role}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <div className="text-xs tracking-wider uppercase text-gray-500 mb-4 font-light">President Team</div>
                        <div className="aspect-[16/9] bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center rounded">
                          <div className="text-center px-8 text-gray-600">
                            <div className="text-sm mb-1">📸 INSERT IMAGE HERE</div>
                            <div className="text-xs">President Team Group Photo (1600×900)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 font-light mb-6">{team.description}</p>
                      <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded">
                        <div className="text-center px-8 text-gray-600">
                          <div className="text-sm mb-1">📸 INSERT IMAGE HERE</div>
                          <div className="text-xs">{team.name} Group Photo (1600×900)</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
