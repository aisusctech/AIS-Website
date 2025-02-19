// import React from 'react';
// import FrontImage from '../../assets/diwali-1.png';
// import Card from 'react-bootstrap/Card';
// import LinkImage from '../../assets/link.png';

// import './about.css';

// const About = () => {
//     return (
//         <div className='about'>
//             <img src={FrontImage} className='front-image' />
//             <div className="title">
//                 <h1>Mission and Vision</h1>
//             </div>
//             <div className="content">
//                 <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
//                 <p>Some more about History... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>e-Board Fall 2024</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Tech Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Finance Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Content Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Events Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Sponsorship Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Hospitality Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-sections">
//                 <div className="title">
//                     <h1>Relations Team</h1>
//                 </div>
//                 <div className="row">
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                     <div className="card-wrapper">
//                         <Card>
//                             {/* <Card.Img variant="top" src="<Insert Source Here>" /> */}
//                         </Card>
//                         <h3>First Last</h3>
//                     </div>
//                 </div>
//             </div>
//             <div className="ais-alumni">
//                 Look Up AIS’ Alumni
//                 <img src={LinkImage} />
//             </div>
//         </div>
//     )
// }

// export default About;

import React, { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseConfig";
import Card from "react-bootstrap/Card";
import "./about.css";

const About = () => {
  const [teamMembers, setTeamMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      setError(null); // Reset error state

      const { data, error } = await supabase.from("memberDetails").select("*");

      if (error) {
        console.error("Error fetching team members:", error);
        setError("Failed to fetch team members.");
        setLoading(false);
        return;
      }

      console.log("Fetched Data:", data);

      const groupedMembers = data.reduce((acc, member) => {
        const profileImage = member.profile || "https://via.placeholder.com/150"; 

        if (!acc[member.department]) acc[member.department] = [];
        acc[member.department].push({ name: member.name, profile: profileImage });

        return acc;
      }, {});

      setTeamMembers(groupedMembers);
      setLoading(false);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="about">
      <div className="title">
        <h1>Meet the Team</h1>
      </div>

      {loading ? (
        <p>Loading team members...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        Object.entries(teamMembers).map(([department, members]) => (
          <div key={department} className="card-sections">
            <div className="title">
              <h1>{department} Team</h1>
            </div>
            <div className="row">
              {members.map((member, index) => (
                <div key={index} className="card-wrapper">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={member.profile}
                      alt={member.name}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback if image fails
                    />
                  </Card>
                  <h3>{member.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default About;
