import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setStrains,
  setCategory,
  setEffects,
  setUniqueEffect,
  setUniqueStrain,
  setSearchStrain
} from '../../actions';
import './CardContainer.scss';
import Strain from '../Strain/Strain';
import { func, object, string } from 'prop-types';

export class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  componentDidMount() {
    this.getStrainInfo();
  }

  getStrainInfo = () => {
    fetch(
      `https://strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/strains/search/all`
    )
      .then(response => response.json())
      .then(strains => this.props.setStrains(strains))
      .catch(error => console.log(error));
    fetch(
      `https://strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/searchdata/effects`
    )
      .then(response => response.json())
      .then(effects => this.props.setEffects(effects))
      .catch(error => console.log(error));
  };

  selectCategory = category => {
    this.props.setCategory(category);
  };

  sendUniqueEffect = event => {
    this.props.setUniqueEffect(event.target.value);
  };

  getSearchStrain = () => {
    this.props.setSearchStrain(this.state.search);
    this.props.setUniqueEffect('');
    this.props.setCategory('');
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    if (this.props.effects.positive) {
      const positives = this.props.effects.positive.map(effect => (
        <option key={effect} value={`positive_${effect}`}>
          {effect}
        </option>
      ));
      const negatives = this.props.effects.negative.map(effect => (
        <option key={effect} value={`negative_${effect}`}>
          {effect}
        </option>
      ));
      const medical = this.props.effects.medical.map(effect => (
        <option key={effect} value={`medical_${effect}`}>
          {effect}
        </option>
      ));

      return (
        <main>
          <form className="strain-selection_form">
            <section className="types-section">
              <label>Search By Name:</label>
              <div className="search-container">
                <input
                  onChange={this.handleChange}
                  className="search-input"
                  placeholder="Strain Name..."
                ></input>
                <button
                  disabled={!this.state.search}
                  onClick={this.getSearchStrain}
                  className="search-button"
                  type="button"
                >
                  Search
                </button>
              </div>
              <label className="type-label">Select a type:</label>
              <div className="type-buttons_div">
                <button
                  onClick={() => this.selectCategory('sativa')}
                  type="button"
                  className="type-button"
                >
                  SATIVA
                </button>
                <button
                  onClick={() => this.selectCategory('hybrid')}
                  type="button"
                  className="type-button"
                >
                  HYBRID
                </button>
                <button
                  onClick={() => this.selectCategory('indica')}
                  type="button"
                  className="type-button"
                >
                  INDICA
                </button>
              </div>
            </section>
            <label className="trait-label">Select a trait:</label>
            <section className="effects-section">
              <div className="effect-dropdown_div">
                <label htmlFor="positives">Positives</label>
                <select
                  className="trait-dropdown"
                  name="positives"
                  onChange={this.sendUniqueEffect}
                >
                  <option disabled selected value="">
                    select a trait
                  </option>
                  {positives}
                </select>
              </div>
              <div className="effect-dropdown_div">
                <label htmlFor="negatives">Negatives</label>
                <select
                  className="trait-dropdown"
                  name="negatives"
                  onChange={this.sendUniqueEffect}
                >
                  <option disabled selected value="">
                    select a trait
                  </option>
                  {negatives}
                </select>
              </div>
              <div className="effect-dropdown_div">
                <label htmlFor="medical">Helps With</label>
                <select
                  className="trait-dropdown"
                  name="medical"
                  onChange={this.sendUniqueEffect}
                >
                  <option disabled selected value="">
                    select a trait
                  </option>
                  {medical}
                </select>
              </div>
            </section>
          </form>
          <Strain />
        </main>
      );
    }
    return <h2 className="loading-message">Loading...</h2>;
  }
}

export const mapDispatchToProps = dispatch => ({
  setStrains: strains => {
    dispatch(setStrains(strains));
  },
  setCategory: category => {
    dispatch(setCategory(category));
  },
  setEffects: effects => {
    dispatch(setEffects(effects));
  },
  setUniqueEffect: effect => {
    dispatch(setUniqueEffect(effect));
  },
  setUniqueStrain: strain => {
    dispatch(setUniqueStrain(strain));
  },
  setSearchStrain: strain => {
    dispatch(setSearchStrain(strain));
  }
});

export const mapStateToProps = state => ({
  strains: state.strains,
  effects: state.effects,
  category: state.category
});

CardContainer.propTypes = {
  setSearchStrain: func,
  getStrainInfo: func,
  selectCategory: func,
  sendUniqueEffect: func,
  handleChange: func,
  strains: object,
  effects: object,
  category: string,
  setUniqueStrain: func,
  setUniqueEffect: func,
  setEffects: func,
  setCategory: func,
  setStrains: func
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
