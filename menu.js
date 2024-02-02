import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./css/style.css";
import ChatPage from '../../ai-challenge/src/components/ChatPage';
import LearnMorePage from '../../ai-challenge/src/components/LearnMorePage' ;

const Menu = () => {
  return (
    <Router>
      <div className="Menu">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Neucha&display=swap" rel="stylesheet" />
        </Helmet>

        <div className="main">
          <div className="welcome">
            Welcome <br/>
            To Our ChatTherapy
          </div>
          <div className="motivate">
            <h3>We are here to support you in any situation. Life can present us with different challenges and it is important to know that you are not alone. If you have difficulties, stress or just feel the need to talk to someone, we are ready to listen and provide you with moral support.</h3>
          </div>
          <div className="more">
            <div className="chatNow">
              <button className="button" onClick={() => window.location.href='/chat'}>Chat Now</button>
            </div>
            <div className="learnmore">
              <button className="button" onClick={() => window.location.href='/learnmore'}>Learn More</button>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/learnmore" element={<LearnMorePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Menu;
