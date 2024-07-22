import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Soccerhome from '../assets/soccer_home.png';
import kids from '../assets/kids.png';
import adults from '../assets/adults.png';
import training from '../assets/training.png';
import goalkeeper from '../assets/goalkeeper.png';
import '../styles/Home.css';
import translations from '../Translations/Data.json';

function Home() {
  const [language, setlanguage] = useState('english');
  const [content, setcontent] = useState(translations[language]);

  useEffect(() => {
    setcontent(translations[language]);
  }, [language]);

  return (
    <div className="home" style={{ backgroundImage: `url(${Soccerhome})` }}>
      <div className="header">
        <select value={language} onChange={(e) => setlanguage(e.target.value)}>
          <option value="english">English</option>
          <option value="french">French</option>
        </select>
        <h1 className="Title1">{content.title}</h1>
        <Link to="/book">
          <button className="bookbutton">{content.book_button}</button>
        </Link>
      </div>
      <div className="articlespart">
        <h2>{content.club_news}</h2>
        <div className="articles">
          <div>
            <h4>{content.news_1}</h4>
            <Link className="news" to="/news">{content.read_more}</Link>
          </div>
        </div>
      </div>
      <div className="programspart">
        <div className="gettingstarted">
          <h2 className="startheader">{content.getting_started}</h2>
          <h4 className="helpheader">{content.help_header}</h4>
          <br />
          <h4>
            {content.faq_link} <Link to="/faq">here</Link>
          </h4>
        </div>
        <h2 className="programsheader">{content.popular_programs}</h2>
        <div className="articles">
          <div className="program">
            <img src={kids} className="card-img" alt="Kids" />
            <h3>{content.beginners_u8_12}</h3>
          </div>
          <div className="program">
            <img src={adults} className="card-img" alt="Adults" />
            <h3>{content.professional_u16_u19}</h3>
          </div>
          <div className="program">
            <img src={goalkeeper} className="card-img" alt="Goalkeeper" />
            <h3>{content.goalkeeper_training}</h3>
          </div>
          <div className="program">
            <img src={training} className="card-img" alt="Training" />
            <h3>{content.all_age_training}</h3>
          </div>
        </div>
      </div>
      <div className="events">
        <div className="eventheader">
          <h2>{content.upcoming_events}</h2>
        </div>
        <div className="eventspart">
          <div className="event">
            <div className="date">{content.event_date} July 14</div>
            <div className="details">
              <h3>{content.away_red_dragons}</h3>
              <p>{content.time} 3:00 PM</p>
              <p>{content.location} Canadian Tire Centre</p>
            </div>
          </div>
          <div className="event">
            <div className="date">{content.event_date} July 18</div>
            <div className="details">
              <h3>{content.adult_night}</h3>
              <p>{content.time} 4:30 PM</p>
              <p>{content.location} Tunner's Field</p>
            </div>
          </div>
          <div className="event">
            <div className="date">{content.event_date} July 20</div>
            <div className="details">
              <h3>{content.sundae_sunday}</h3>
              <p>{content.time} 3:00 PM</p>
              <p>{content.location} Our Stadium</p>
            </div>
          </div>
          <div className="event">
            <div className="date">{content.event_date} July 28</div>
            <div className="details">
              <h3>{content.home_purple_midgets}</h3>
              <p>{content.time} 6:00 PM</p>
              <p>{content.location} Our Stadium</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
