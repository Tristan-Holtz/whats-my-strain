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
  notForMe
}) => {
  const getUniqueStrain = strain => {
    setUniqueStrain(strain);
  };
  let cards;
  switch (category) {
    case 'favorites':
      cards = myStrains.map(strain => {
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
      return <section className="strain-container">{cards}</section>;
    case 'dislikes':
      cards = notForMe.map(strain => {
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
      return <section className="strain-container">{cards}</section>;
    default:
      const strainNames = Object.keys(strains);
      const uniqueStrains = strainNames.reduce((acc, name) => {
        if (strains[name].race === category) {
          acc.push({
            name: name,
            ...strains[name]
          });
        }
        return acc;
      }, []);

      cards = uniqueStrains.map(strain => {
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

      return <section className="strain-container">{cards}</section>;
  }
};

export const mapStateToProps = state => ({
  strains: state.strains,
  category: state.category,
  uniqueStrain: state.uniqueStrain,
  myStrains: state.myStrains,
  notForMe: state.notForMe
});

export const mapDispatchToProps = dispatch => ({
  setUniqueStrain: name => {
    dispatch(setUniqueStrain(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Strain);
