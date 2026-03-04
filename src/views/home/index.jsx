import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import UpComingEvents from "../../components/upComingEvents";
import Sponsor from "../../components/sponsor";
import Testimonials from "../../components/testimonials";
import Spinner from "react-bootstrap/Spinner";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const baseUrl = window.location.origin;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className={`home-container ${loading ? "no-scroll" : ""}`}>
      <Helmet>
        <title>AIS USC | Association of Indian Students at USC</title>
        <meta
          name="description"
          content="AIS USC (Association of Indian Students) builds a vibrant community for Indian students at the University of Southern California."
        />
        <meta property="og:title" content={`AIS USC | Association of Indian Students at USC`} />
        <meta
          property="og:description"
          content={`AIS USC (Association of Indian Students) builds a vibrant community for Indian students at the University of Southern California.`}
        />
        <meta property="og:image" content={`https://www.aisusc.com/ais_logo_png.png`} />
        <meta property="og:url" content="https://www.aisusc.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AIS USC | Association of Indian Students"
        />
        <meta
          name="twitter:description"
          content="AIS USC builds a vibrant community for Indian students at the University of Southern California."
        />
        <meta name="twitter:image" content={`https://www.aisusc.com/ais_logo_png.png`} />
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
