import React from "react";
import img3 from "../assets/img3.jpg";
import teamPres from "../assets/team-pres.jpeg";
import teamTech from "../assets/team-tech.jpeg";
import teamFinance from "../assets/team-finance.jpeg";
import teamContent from "../assets/team-content.jpeg";
import teamEvents from "../assets/team-events.jpeg";
import teamRelations from "../assets/team-relation.jpeg";
import teamSponsorship from "../assets/team-sponsor.jpeg";
import teamHospi from "../assets/team-hospi.jpeg";

export default function EBoardPage() {
  const teams = [
    { 
      name: "President Team", 
      description: "Leading the organization's vision and strategy.",
      image: teamPres
    },
    { 
      name: "Finance Team", 
      description: "Managing budgets and financial operations.",
      image: teamFinance
    },
    { 
      name: "Tech Team", 
      description: "Building and maintaining our digital presence.",
      image: teamTech
    },
    { 
      name: "Content Team", 
      description: "Creating engaging content and communications.",
      image: teamContent
    },
    { 
      name: "Events Team", 
      description: "Planning and executing memorable experiences.",
      image: teamEvents
    },
    { 
      name: "Relations Team", 
      description: "Building community and external partnerships.",
      image: teamRelations
    },
    { 
      name: "Sponsorship Team", 
      description: "Securing partnerships and funding.",
      image: teamSponsorship
    },
    { 
      name: "Hospitality Team", 
      description: "Ensuring comfort and care for all participants.",
      image: teamHospi
    },
  ];

  return (
    <main className="pt-24 pb-10 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs tracking-wider uppercase text-gray-500 mb-3 font-light">Leadership</div>
          <h1 className="text-5xl font-light">Executive Board 2025</h1>
        </div>

        <div className="mb-12">
          <div className="aspect-[2.5/1] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center rounded overflow-hidden">
            <img src={img3} className="w-full h-full object-cover" alt="Executive Board" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teams.map((team, i) => (
            <div key={i} className="group">
              {/* <h3 className="text-xl font-light mb-2">{team.name}</h3> */}
              {/* <p className="text-sm text-gray-600 font-light mb-4">{team.description}</p> */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded overflow-hidden transition-opacity hover:opacity-90">
                <img 
                  src={team.image} 
                  className="w-full h-full object-cover" 
                  alt={`${team.name} Photo`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}