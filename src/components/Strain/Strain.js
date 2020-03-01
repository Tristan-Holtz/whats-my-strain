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
  const strainsToDisplay = () => {
    switch (category) {
      case 'favorites':
        return myStrains;
      case 'dislikes':
        return notForMe;
      default:
        const strainNames = Object.keys(strains);
        return strainNames.reduce((acc, name) => {
          if (strains[name].race === category) {
            acc.push({
              name: name,
              ...strains[name]
            });
          }
          return acc;
        }, []);
    }
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

  return <section className="strain-container">{cards}</section>;
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
