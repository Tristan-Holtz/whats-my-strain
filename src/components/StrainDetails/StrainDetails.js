import React from 'react';
import './Strain.scss';

const Strain = () => {
  return (
    <section className="strain-details_section">
      <h2>Strain Name</h2>
      <div className="strain-info_card">
        <div className="strain-pic">IMG</div>
        <article className="strain-info_container">
          <div className="trait-container">
            <label>Type:</label>
            <p>strain.type</p>
          </div>
          <div className="trait-container">
            <label>Flavors:</label>
            <p>strain flavors</p>
          </div>
          <label>Effects:</label>
          <div className="trait-container">
            <label>Positive-</label>
            <p>positive strain traits</p>
          </div>
          <div className="trait-container">
            <label>Negative-</label>
            <p>negative strain traits</p>
          </div>
          <div className="trait-container">
            <label>Helps With-</label>
            <p>medical strain traits</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Strain;
