import React from 'react';
import propTypes from 'prop-types';
import './DashboardCard.css';

const DashboardCard = ({ title, description, onClick }) => (
  <div className="Dashboard-cards">
    <div className="Dashboard-cards__title">
      <h4>{title}</h4>
    </div>
    <div className="Dashboard-cards__description">
      <p>{description}</p>
    </div>
    <div className="Dashboard-cards__cta">
      <button type="button" onClick={() => onClick(title)}>
        Get Started
      </button>
    </div>
  </div>
);

DashboardCard.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default DashboardCard;
