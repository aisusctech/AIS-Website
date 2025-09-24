import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import UpComingEvents from "../../components/upComingEvents";
import Sponsor from "../../components/sponsor";
import Testimonials from "../../components/testimonials";
import Spinner from "react-bootstrap/Spinner";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`home-container ${loading ? "no-scroll" : ""}`}>
      <Helmet>
        <title>AIS USC</title>
        <meta name="description" content={`This page is the homepage for AIS USC. AIS is Association of Indian Students and supports Indian students and builds a community of Indian Students in the US.`} />
        <meta property="og:title" content={`AIS USC`} />
        <meta property="og:description" content={`This page is the homepage for AIS USC. AIS is Association of Indian Students and supports Indian students and builds a community of Indian Students in the US.`} />
      </Helmet>
      {loading && (
        <div className="loader">
          <Spinner animation="grow" role="status" />
          <span style={{ marginLeft: "10px" }}>Loading...</span>
        </div>
      )}
      <div className="background-image-div">
        <p>Celebrating Culture, Connecting Communities!</p>
      </div>
      <UpComingEvents />
      <div className="background-image-div1"></div>
      <Sponsor />
      <Testimonials />
    </div>
  );
};

export default Home;
