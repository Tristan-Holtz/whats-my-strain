import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStrains, setCategory } from '../../actions';
import './CardContainer.scss';
import { Link } from 'react-router-dom';

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
  };

  selectCategory = category => {
    this.props.setCategory(category);
  };

  render() {
    return (
      <form className="strain-selection_form">
        <section className="types-section">
          <label>Select a type:</label>
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
          <Link to="/strains">See Strains</Link>
        </section>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setStrains: strains => {
    dispatch(setStrains(strains));
  },
  setCategory: category => {
    dispatch(setCategory(category));
  }
});

export const mapStateToProps = state => ({
  strains: state.strains
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
