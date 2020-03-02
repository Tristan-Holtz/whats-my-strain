import React from 'react';
import { connect } from 'react-redux';
import './Strain.scss';
import { Link } from 'react-router-dom';
import { setUniqueStrain } from '../../actions';

const Strain = ({
  setUniqueStrain,
  strains,
  category,
  myStrains,
  notForMe,
  effects,
  uniqueEffect
}) => {
  const getUniqueStrain = strain => {
    setUniqueStrain(strain);
  };

  const strainsToDisplay = () => {
    const strainNames = Object.keys(strains);
    let allStrains = strainNames.reduce((acc, name) => {
      acc.push({
        name,
        ...strains[name]
      });
      return acc;
    }, []);
    if (category) {
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
      allStrains = allStrains.filter(strain =>
        strain.effects[effectType].includes(effectName)
      );
    }
    return allStrains;
  };

  const cards = strainsToDisplay().map(strain => {
    return (
      <Link
        onClick={() => getUniqueStrain(strain)}
        to={`/strain-details/${strain.name}`}
        className="strain-card"
      >
        <p className="strain-name">{strain.name}</p>
      </Link>
    );
  });

  return (
    <section className="strain-container">
      {/* <h2>{}</h2> */}
      {cards}
    </section>
  );
};

export const mapStateToProps = state => ({
  strains: state.strains,
  category: state.category,
  uniqueStrain: state.uniqueStrain,
  myStrains: state.myStrains,
  notForMe: state.notForMe,
  effects: state.effects,
  uniqueEffect: state.uniqueEffect
});

export const mapDispatchToProps = dispatch => ({
  setUniqueStrain: name => {
    dispatch(setUniqueStrain(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Strain);
