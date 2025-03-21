import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import "./resources.css";

const Resources = () => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "Can AIS help me find permanent accomodation and/or roommates?",
      answer:
        "AIS is a student run organization, and it is not possible for us to make judgement on the various accommodation options available to students. Nor is it within our capacity to link students who we think will have similar interests so that they maybe roommates. Such decisions are best left to your judgement. You may post any queries you have on the Facebook groups and seniors who have an idea about the area, or other people looking for accommodation will be able to help you out.",
    },
    {
      question: "How do I apply for on campus jobs?",
      answer:
        "Job postings are put up on the ConnectSC website. Once you are on campus, you can apply to cafe jobs, or to other departments by approaching them with your resume. Apart from that, if you are looking for something technical, you could also contact your department or check the opportunities available in any of the research labs linked with USC.",
    },
    {
      question: "How do I look for apartment?",
      answer:
        "Ask everyone you know. Ask the people you are staying with. Look for 'Now Leasing' banners in front of the apartments. They usually have a number written, which you can call up. (Do not hesitate to call or leave a message)",
    },
    {
      question:
        "What are some skills that might be helpful in finding a part-time job?",
      answer:
        "1. Here are some of the software tools, knowledge of which should help you find on-campus jobs- Microsoft Office Suite (Word, Power Point, Excel), Microsoft Access, Microsoft Outlook, Final Cut Pro and Adobe Photoshop. Even if you are not familiar with some of these, look out for tutorials on the internet which will give you a fair idea of how to use them. 2. Almost all non-technical jobs require good communication skills. 3. A resume drafted specially for on-campus jobs is desirable. This resume is totally different from your professional resume. Here, most importantly, add your availability schedule for the current semester. For example – Monday- 7am to 12pm, 4pm-8pm Tuesday- 7am-12pm, 3pm-6pm… Many employers will observe this before looking at the rest of your resume! Next, add the list of software tools which you’re familiar with. Put in some instances of your experience that will highlight your skills as a team player and team leader. You can also include co-curricular extracurricular activities during your undergraduate years. Remember not to make it too technical. You can also create two different resumes for technical and non-technical jobs.",
    },
  ];

  return (
    <div className={`${loading ? "no-scroll" : ""}`}>
      {loading && (
        <div className="loader">
          <Spinner animation="grow" role="status" />
          <span style={{ marginLeft: "10px" }}>Loading...</span>
        </div>
      )}

      <div className="faq-container">
        <h1 className="faq-title">FAQs</h1>
        {faqData.map((item, index) => (
          <div className="faq-card" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleExpand(index)}
              style={{ cursor: "pointer" }}
            >
              {item.question}
              <span className="faq-icon">
                {expanded[index] ? (
                  <DashCircle size={20} />
                ) : (
                  <PlusCircle size={20} />
                )}
              </span>
            </div>
            {expanded[index] && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="resources-container">
        <h1 className="resources-title">Additional Resources</h1>
        <div className="resources-grid">
          <div className="resource-item">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
          <div className="resource-item">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
          <div className="resource-item">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
          <div className="resource-item">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
          <div className="resource-item">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
          <div className="resource-item">
            <strong>Lorem ipsum</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;