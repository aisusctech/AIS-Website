import React from "react";
import { ExternalLink } from "lucide-react";
import SponsorsGrid from "../components/SponsorsGrid";

export default function ResourcesPage() {
  const faqs = [
    {
      q: "Can AIS help me find permanent accomodation and/or roommates?",
      a: "AIS is a student run organization, and it is not possible for us to make judgement on the various accommodation options available to students. Nor is it within our capacity to link students who we think will have similar interests so that they maybe roommates. Such decisions are best left to your judgement. You may post any queries you have on the Facebook groups and seniors who have an idea about the area, or other people looking for accommodation will be able to help you out.",
    },
    {
      q: "How do I apply for on campus jobs?",
      a: "Job postings are put up on the ConnectSC website. Once you are on campus, you can apply to cafe jobs, or to other departments by approaching them with your resume. Apart from that, if you are looking for something technical, you could also contact your department or check the opportunities available in any of the research labs linked with USC.",
    },
    {
      q: "What is the cost of event tickets?",
      a: "Ticket prices vary by event, typically ranging from $5 to $20 for members. Gate pricing may differ. We strive to keep events accessible to all students.",
    },
    {
      q: "How do I look for apartment?",
      a: "Ask everyone you know. Ask the people you are staying with. Look for 'Now Leasing' banners in front of the apartments. They usually have a number written, which you can call up. (Do not hesitate to call or leave a message)",
    },
    {
      q: "What are some skills that might be helpful in finding a part-time job?",
      a: "Here are some of the software tools, knowledge of which should help you find on-campus jobs- Microsoft Office Suite (Word, Power Point, Excel), Microsoft Access, Microsoft Outlook, Final Cut Pro and Adobe Photoshop. Even if you are not familiar with some of these, look out for tutorials on the internet which will give you a fair idea of how to use them. Almost all non-technical jobs require good communication skills. A resume drafted specially for on-campus jobs is desirable. This resume is totally different from your professional resume. Here, most importantly, add your availability schedule for the current semester. For example – Monday- 7am to 12pm, 4pm-8pm Tuesday- 7am-12pm, 3pm-6pm… Many employers will observe this before looking at the rest of your resume! Next, add the list of software tools which you’re familiar with. Put in some instances of your experience that will highlight your skills as a team player and team leader. You can also include co-curricular extracurricular activities during your undergraduate years. Remember not to make it too technical. You can also create two different resumes for technical and non-technical jobs.",
    }
  ];

  const helpfulLinks = [
    {
      title: "USC Housing- Understanding Safe and Unsafe ares",
      url: "https://www.youtube.com/watch?v=inyAEwT7NDw&list=PLUPfr_t0Pb-TJc08KTsZMqzRuR28ZnlgV&index=1",
      description: "Housing options and resources"
    },
    {
      title: "USC Housing- Oncampus vs Offcampus",
      url: "https://www.youtube.com/watch?v=0BCnyq6EmRE",
      description: "Find accommodation near campus"
    },
    {
      title: "International Student Office",
      url: "https://ois.usc.edu",
      description: "Support and guidance for international students"
    }
  ];

  return (
    <main className="pt-24 bg-white">
      {/* FAQs Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-light">
              Information
            </div>
            <h1 className="text-5xl font-light">Frequently Asked Questions</h1>
          </div>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-light mb-3">{f.q}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-light">
              Student Resources
            </div>
            <h2 className="text-5xl font-light">Helpful Links</h2>
          </div>
          <div className="space-y-8">
            {helpfulLinks.map((link, i) => (
              <div
                key={i}
                onClick={() => window.open(link.url, '_blank')}
                className="cursor-pointer block border-b border-gray-200 pb-8 group"
              >
                <h3 className="text-xl font-light mb-3 flex items-center justify-between text-gray-900">
                  {link.title}
                  <ExternalLink 
                    size={18} 
                    className="text-gray-400 group-hover:text-gray-600 transition-colors" 
                  />
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {link.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorsGrid />
    </main>
  );
}