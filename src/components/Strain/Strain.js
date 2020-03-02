import React from 'react';
import { connect } from 'react-redux';
import './Strain.scss';
import { Link } from 'react-router-dom';
import { setUniqueStrain } from '../../actions';

export const Strain = ({
  setUniqueStrain,
  strains,
  category,
  myStrains,
  notForMe,
  uniqueEffect,
  uniqueStrain
}) => {
  const getUniqueStrain = strain => {
    setUniqueStrain(strain);
  };

  let area = 'All Strains';

  const strainsToDisplay = () => {
    const strainNames = Object.keys(strains);
    let allStrains = strainNames.reduce((acc, name) => {
      acc.push({
        name,
        ...strains[name]
      });
      return acc;
    }, []);
    if (typeof uniqueStrain === 'string') {
      allStrains = allStrains.filter(strain => strain.name === uniqueStrain);
      area = uniqueStrain;
    }
    if (category) {
      area = category;
      switch (category) {
        case 'favorites':
          return myStrains;
        case 'dislikes':
          return notForMe;
        default:
          allStrains = allStrains.filter(strain => strain.race === category);
      }
    }
    if (uniqueEffect) {
      const splitEffect = uniqueEffect.split('_');
      const effectType = splitEffect[0];
      const effectName = splitEffect[1];
      area = effectName;
      allStrains = allStrains.filter(strain =>
        strain.effects[effectType].includes(effectName)
      );
    }
    return allStrains;
  };

  const cards = strainsToDisplay().map(strain => {
    return (
      <Link
        key={strain.id}
        onClick={() => getUniqueStrain(strain)}
        to={`/strain-details/${strain.name}`}
        className="strain-card"
      >
        <p className="strain-name">{strain.name}</p>
      </Link>
    );
  });

  return (
    <section>
      <h2 className="area">{area}</h2>
      <section className="strain-container">{cards}</section>
    </section>
  );
};

export const mapStateToProps = state => ({
  strains: state.strains,
  category: state.category,
  uniqueStrain: state.uniqueStrain,
  myStrains: state.myStrains,
  notForMe: state.notForMe,
  uniqueEffect: state.uniqueEffect
});

export const mapDispatchToProps = dispatch => ({
  setUniqueStrain: name => {
    dispatch(setUniqueStrain(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Strain);
