import React from 'react';
import { connect } from 'react-redux';
import './Strain.scss';

const Strain = ({ strains }) => {
  const strainNames = Object.keys(strains);
  const cards = strainNames.map(strain => {
    return (
      <article className="strain-card">
        <p>{strain}</p>
      </article>
    );
  });
  return <section className="strain-container">{cards}</section>;
};

const mapStateToProps = state => ({
  strains: state.strains
});

export default connect(mapStateToProps)(Strain);
