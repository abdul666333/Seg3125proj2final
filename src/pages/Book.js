import React from "react";
import { Link } from "react-router-dom";
import "../styles/Book.css";
import training from "../assets/trainingsession.png";
import tour from "../assets/tour.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Book() {
    return (
    <div className="Bookpage">
      <div className="sessions">
        <h1 className="sessionsheader">Explore Our Sessions</h1>
  
        <div className="cards">
          <img src={training} className="cardsimg" />
          <h2>
            <FontAwesomeIcon icon={faDollarSign} /> Practice Session
          </h2>
          <p>
          Experience our top-notch facilities with a practice session, perfect for players of all levels.
          </p>
          <p>
          Location: Stadium A
          
          </p>

          <p>
          Who: Anyone is welcome, those younger than 16 must be accompiened with parent
            
          </p>
        </div>
  
        <div className="cards">
          <img src={tour} className="cardsimg" />
          <h2>Club Tour</h2>
          <p>
            Take a guided tour of our club to see all that we have to offer. During the tour, you'll get to explore our state-of-the-art facilities, meet our friendly staff, and learn about the various programs and services available at our club.
          </p>
          <p>
          Location: Stadium B
          
          </p>

          <p>
          Who: Anyone is welcome
          </p>
        </div>
  
        <Link to="/book1">
          <button className="bookbutton">Book Your Session Now</button>
        </Link>
      </div>
      </div>
    );
  }
  
  export default Book;
  