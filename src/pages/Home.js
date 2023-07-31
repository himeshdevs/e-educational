import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Home.css';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to SkillMosaic: Unlock Your Full Potential !</h1>
        <h2><i>Embark on a Learning Journey like Never Before!

</i></h2>
        <p>
        Are you ready to unleash your true potential and master a diverse range of skills? SkillMosaic is here to transform your learning experience. Our cutting-edge e-learning platform offers a unique blend of knowledge, interactivity, and convenience, empowering you to build a mosaic of skills that will shape your future success. </p>
        <p>
        Embrace the future of learning with SkillMosaic. Our mission is to empower you to be the architect of your destiny, weaving together a unique mosaic of skills that will set you apart in the ever-evolving world.</p>
        <h2><b>SkillMosaic: Uniting Skills. Building Success.</b></h2>
        <p>Embark on this exciting journey with us. Sign up now and unlock a world of possibilities!</p>
        {user ? (
          <Link to="/dashboard" className="cta-button">
            Go to Dashboard
          </Link>
        ) : (
          <Link to="/login" className="cta-button">
            Discover Courses
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
