import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setStrains,
  setCategory,
  setEffects,
  setUniqueEffect
} from '../../actions';
import './CardContainer.scss';
import Strain from '../Strain/Strain';

export class CardContainer extends Component {
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

  handleChange = event => {
    this.props.setUniqueEffect(event.target.value);
  };

  render() {
    if (this.props.effects.positive) {
      const positives = this.props.effects.positive.map(effect => (
        <option value={`positive_${effect}`}>{effect}</option>
      ));
      const negatives = this.props.effects.negative.map(effect => (
        <option value={`negative_${effect}`}>{effect}</option>
      ));
      const medical = this.props.effects.medical.map(effect => (
        <option value={`medical_${effect}`}>{effect}</option>
      ));
      return (
        <main>
          <form className="strain-selection_form">
            <section className="types-section">
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
                  onChange={this.handleChange}
                >
                  <option disabled selected value="">
                    select a trait
                  </option>
                  {positives}
                </select>
              </div>
              <div className="effect-dropdown_div">
                <label htmlFor="negatives">Positives</label>
                <select
                  className="trait-dropdown"
                  name="negatives"
                  onChange={this.handleChange}
                >
                  <option disabled selected value="">
                    select a trait
                  </option>
                  {negatives}
                </select>
              </div>
              <div className="effect-dropdown_div">
                <label htmlFor="medical">Positives</label>
                <select
                  className="trait-dropdown"
                  name="medical"
                  onChange={this.handleChange}
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
    return null;
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
  }
});

export const mapStateToProps = state => ({
  strains: state.strains,
  effects: state.effects,
  category: state.category
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
