import React, { Component } from 'react';
import Strain from '../Strain/Strain';
import { connect } from 'react-redux';
import { setStrains } from '../../actions';
import { Link } from 'react-router-dom';

export class CardContainer extends Component {
  componentDidMount() {
    this.getStrainInfo();
  }

  getStrainInfo = () => {
    fetch('https://strainapi.evanbusse.com/ZKe6ZXO/strains/search/all')
      .then(response => response.json())
      .then(strains => this.props.setStrains(strains))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <form className="strain-selection_form">
        <section className="types-section">
          <label>Select a type:</label>
          <div className="type-buttons_div">
            <Link className="type-button" to="/strains">
              SATIVA
            </Link>
            <Link className="type-button" to="/strains">
              HYBRID
            </Link>
            <Link className="type-button" to="/strains">
              INDICA
            </Link>
          </div>
        </section>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setStrains: strains => {
    dispatch(setStrains(strains));
  }
});

export const mapStateToProps = state => ({
  strains: state.strains
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
