import React from 'react';
import { connect } from 'react-redux';
import './Strain.scss';
import { Link } from 'react-router-dom';
import { setUniqueStrain } from '../../actions';

const Strain = ({ setUniqueStrain, strains, category }) => {
  const getUniqueStrain = name => {
    setUniqueStrain(name);
  };

  let strainNames = Object.keys(strains);
  strainNames = strainNames.filter(name => strains[name].race === category);

  const cards = strainNames.map(name => {
    return (
      <Link
        onClick={() => getUniqueStrain(name)}
        to="/strainDetails"
        className="strain-card"
      >
        <p className="strain-name">{name}</p>
      </Link>
    );
  });

  return <section className="strain-container">{cards}</section>;
};

export const mapStateToProps = state => ({
  strains: state.strains,
  category: state.category,
  uniqueStrain: state.uniqueStrain
});

export const mapDispatchToProps = dispatch => ({
  setUniqueStrain: name => {
    dispatch(setUniqueStrain(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Strain);
