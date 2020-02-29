import React from 'react';
import './StrainDetails.scss';
import { connect } from 'react-redux';

const StrainDetails = ({ strains, uniqueStrain }) => {
  const strainNames = Object.keys(strains);

  const traits = strainNames.reduce((acc, name) => {
    if (name === uniqueStrain) {
      acc = strains[name];
      acc.name = name;
    }
    return acc;
  }, {});

  const flavors = traits.flavors.map(flavor => `${flavor}  `);
  console.log(traits);
  const positives = traits.effects.positive.map(effect => `${effect}  `);
  const negatives = traits.effects.negative.map(effect => `${effect}  `);
  const medical = traits.effects.medical.map(effect => `${effect}  `);

  return (
    <section className="strain-details_section">
      <h2>{traits.name}</h2>
      <div className="strain-info_card">
        <div className="strain-pic">IMG</div>
        <article className="strain-info_container">
          <div className="trait-container">
            <label>Type:</label>
            <p>{traits.race}</p>
          </div>
          <div className="trait-container">
            <label>Flavors:</label>
            <p>{flavors}</p>
          </div>
          <label>Effects:</label>
          <div className="trait-container">
            <label>Positive-</label>
            <p>{positives}</p>
          </div>
          <div className="trait-container">
            <label>Negative-</label>
            <p>{negatives}</p>
          </div>
          <div className="trait-container">
            <label>Helps With-</label>
            <p>{medical}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export const mapStateToProps = state => ({
  uniqueStrain: state.uniqueStrain,
  strains: state.strains
});

export default connect(mapStateToProps)(StrainDetails);
