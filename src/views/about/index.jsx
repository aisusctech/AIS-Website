import React, { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseConfig";
import { Card, Spinner } from "react-bootstrap";
import FrontImage from "../../assets/diwali-1.png";
import LinkImage from "../../assets/link.png";
import "./about.css";

const About = () => {
  const [teamMembers, setTeamMembers] = useState({});
  const [specialSection, setSpecialSection] = useState({ topRow: [], secondRow: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      setError(null);

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
        let department = member.department.replace(" (Director)", "").trim();

        if (["AIS Vice President", "AIS President"].includes(member.department)) {
          acc["special"] = acc["special"] || { topRow: [], secondRow: [] };
          acc["special"].topRow.push({ name: member.name, profile: profileImage });
        } else if (member.department === "President") {
          acc["special"] = acc["special"] || { topRow: [], secondRow: [] };
          acc["special"].secondRow.push({ name: member.name, profile: profileImage });
        } else {
          if (!acc[department]) acc[department] = { directors: [], members: [] };

          if (member.department.includes("(Director)")) {
            acc[department].directors.push({
              name: member.name.includes("(Director)") ? member.name : `${member.name} (Director)`,
              profile: profileImage,
            });
          } else {
            acc[department].members.push({ name: member.name, profile: profileImage });
          }
        }

        return acc;
      }, {});

      Object.keys(groupedMembers).forEach((dept) => {
        if (dept !== "special") {
          groupedMembers[dept].directors.sort((a, b) => a.name.localeCompare(b.name));
          groupedMembers[dept].members.sort((a, b) => a.name.localeCompare(b.name));
        }
      });

      setSpecialSection(groupedMembers["special"] || { topRow: [], secondRow: [] });
      delete groupedMembers["special"];

      setTeamMembers(groupedMembers);
      setLoading(false);
    };

    fetchTeamMembers();
  }, []);

  const renderTeamSection = (department, { directors, members }) => (
    <div
      key={department}
      className='card-sections'
    >
      <div className='title'>
        <h1>{department} Team</h1>
      </div>
      <div className='row'>
        {[...directors, ...members].map((member, index) => (
          <div
            key={index}
            className='card-wrapper'
          >
            <Card>
              <Card.Img
                variant='top'
                src={member.profile}
                alt={member.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
            </Card>
            <h5>{member.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div
        className='loading-container d-flex justify-content-center align-items-center'
        style={{ minHeight: "50vh" }}
      >
        <Spinner
          animation='border'
          variant='light'
        />
      </div>
    );
  }

  if (error) return <p className='error'>{error}</p>;

  return (
    <div className='about'>
      <img
        src={FrontImage}
        className='front-image'
      />
      <div className='title'>
        <h1>Mission and Vision</h1>
      </div>
      <div className='content'>
        <p>
          You bring with you everything that makes India so uniquely Indian: the rich culture, the
          poetic art, the aromatic food, and the engaging people. You bring with you the power of
          meditation, the Yoga and the Ayurveda, the Taj Mahal and the Gateway of Indiaa, Bollywood
          films and the Bachchans, the Ambassadors and AutoRickshaws, the IPL and the Tendulkar, the
          Akbar and the Birbal, the Sitar and the Tabla. You bring with you Raaga, Nritya, Natya,
          the politics, the weddings, one thousand dialects, 300 different ways of cooking the
          potato, and yet you bring with you the power of a single identity. We at Association of
          Indian Students indulge in everything Indian you bring, and locate amidst our diversities
          what we all have in common. We dance away to desi beats, splash colors on our faces, gulp
          those gol gappas off a saucer, sing the national anthem, and watch with bated breath as
          Dhoni smashes that last ball into the stands. And until the summons from home becomes too
          loud to ignore, we keep you connected to your roots. Come, let us recapture that thrill
          that runs through each of us when we think of home. Welcome to the Association of Indian
          Students at the University of Southern California.
        </p>
        <p>
          We at Association of Indian Students indulge in everything Indian you bring, and locate
          amidst our diversities what we all have in common. We dance away to desi beats, splash
          colors on our faces, gulp those gol gappas off a saucer, sing the national anthem, and
          watch with bated breath as Dhoni smashes that last ball into the stands. And until the
          summons from home becomes too loud to ignore, we keep you connected to your roots.
        </p>

        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Come, let us recapture that thrill that runs through each of us when we think of home.
        </p>

        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Welcome to the Association of Indian Students at the University of Southern California.
        </p>
      </div>
      <div className='title'>
        <h1>e-Board Spring 2025</h1>
      </div>

      {/* Special Section for AIS Vice President, AIS President, and President team */}
      {specialSection.topRow.length > 0 || specialSection.secondRow.length > 0 ? (
        <div className='card-sections'>
          <div className='row'>
            {specialSection.topRow.map((member, index) => (
              <div
                key={index}
                className='card-wrapper'
              >
                <Card>
                  <Card.Img
                    variant='top'
                    src={member.profile}
                    alt={member.name}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  />
                </Card>
                <h5>{member.name}</h5>
              </div>
            ))}
          </div>
          <div className='row'>
            {specialSection.secondRow.map((member, index) => (
              <div
                key={index}
                className='card-wrapper'
              >
                <Card>
                  <Card.Img
                    variant='top'
                    src={member.profile}
                    alt={member.name}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  />
                </Card>
                <h5>{member.name}</h5>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Render teams in specific order */}
      {["Tech", "Finance", "Content", "Events", "Sponsorship", "Hospitality", "Relations"].map(
        (department) =>
          teamMembers[department] ? renderTeamSection(department, teamMembers[department]) : null
      )}

      <div className='ais-alumni'>
        Look Up AIS’ Alumni
        <img src={LinkImage} />
      </div>
    </div>
  );
};

export default About;
