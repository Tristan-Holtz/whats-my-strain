import React, { Component } from 'react';
import './StrainDetails.scss';
import { connect } from 'react-redux';
import { addToMyStrains, addToNotForMe } from '../../actions';

export class StrainDetails extends Component {
  state = {
    strainInfo: {},
    desc: ''
  };

  getFlavors = exactStrain => {
    fetch(
      `https://strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/strains/data/flavors/${exactStrain.id}`
    )
      .then(response => response.json())
      .then(flavors =>
        this.setState({
          strainInfo: { ...this.state.strainInfo, flavors: flavors }
        })
      )
      .catch(error => console.log(error));
  };

  getEffects = exactStrain => {
    fetch(
      `https://strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/strains/data/effects/${exactStrain.id}`
    )
      .then(response => response.json())
      .then(effects =>
        this.setState({
          strainInfo: { ...this.state.strainInfo, effects: effects }
        })
      )
      .catch(error => console.log(error));
  };

  filterForExactStrain = strains => {
    const { name } = this.props.match.params;
    const exactStrain = strains.filter(strain => strain.name === name)[0];
    this.getFlavors(exactStrain);
    this.getEffects(exactStrain);
    return exactStrain;
  };

  async componentDidMount() {
    if (!this.props.uniqueStrain.name) {
      const { name } = this.props.match.params;
      const getStrain = async () => {
        return await fetch(
          `https://strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/strains/search/name/${name}`
        )
          .then(response => response.json())
          .then(strains => this.filterForExactStrain(strains))
          .catch(error => console.log(error));
      };
      const strainInfo = await getStrain();
      this.setState({ strainInfo });
    }
    fetch(
      `https://strainapi.evanbusse.com/${process.env.REACT_APP_API_KEY}/strains/data/desc/${this.props.uniqueStrain.id}`
    )
      .then(response => response.json())
      .then(desc => this.setState({ desc: desc.desc }))
      .catch(error => console.log(error));
  }

  addToFavorites = strain => {
    if (!this.props.myStrains.includes(strain)) {
      this.props.addToMyStrains(strain);
    }
  };

  addToDislikes = strain => {
    if (!this.props.notForMe.includes(strain)) {
      this.props.addToNotForMe(strain);
    }
  };

  render() {
    const { strainInfo } = this.state;
    const { uniqueStrain } = this.props;

    if (strainInfo.flavors && strainInfo.id && strainInfo.effects) {
      const { name } = this.props.match.params;
      const flavors = strainInfo.flavors.map(flavor => `${flavor}  `);
      const positives = strainInfo.effects.positive.map(
        effect => `${effect}  `
      );
      const negatives = strainInfo.effects.negative.map(
        effect => `${effect}  `
      );
      const medical = strainInfo.effects.medical.map(effect => `${effect}  `);
      const { race } = strainInfo;
      return (
        <section className="strain-details_section">
          <h2>{name}</h2>
          <div className="strain-info_card">
            <div className="strain-pic">IMG</div>
            <article className="strain-info_container">
              <div className="trait-container">
                <label>Type:</label>
                <p>{race}</p>
              </div>
              <div className="trait-container">
                <label>Flavors:</label>
                <p>{flavors}</p>
              </div>
              <label>Effects:</label>
              <div className="trait-container">
                <label>Positive-</label>
                <p>{positives}</p>
              </div>
              <div className="trait-container">
                <label>Negative-</label>
                <p>{negatives}</p>
              </div>
              <div className="trait-container">
                <label>Helps With-</label>
                <p>{medical}</p>
              </div>
            </article>
          </div>
          <p>{strainInfo.desc}</p>
          <div className="likes-container">
            <button
              onClick={() => this.addToFavorites(strainInfo)}
              type="button"
              className="likes-button add-favorite"
            >
              Add To My Strains
            </button>
            <button
              onClick={() => this.addToDislikes(strainInfo)}
              type="button"
              className="likes-button add-dislike"
            >
              Add To Not For Me
            </button>
          </div>
        </section>
      );
    } else if (uniqueStrain.name) {
      const { name, race, effects } = uniqueStrain;
      const flavors = uniqueStrain.flavors.map(flavor => `${flavor}  `);
      const positives = effects.positive.map(effect => `${effect}  `);
      const negatives = effects.negative.map(effect => `${effect}  `);
      const medical = effects.medical.map(effect => `${effect}  `);
      return (
        <section className="strain-details_section">
          <h2>{name}</h2>
          <div className="strain-info_card">
            <div className="strain-pic">IMG</div>
            <article className="strain-info_container">
              <div className="trait-container">
                <label>Type:</label>
                <p>{race}</p>
              </div>
              <div className="trait-container">
                <label>Flavors:</label>
                <p>{flavors}</p>
              </div>
              <label>Effects:</label>
              <div className="trait-container">
                <label>Positive-</label>
                <p>{positives}</p>
              </div>
              <div className="trait-container">
                <label>Negative-</label>
                <p>{negatives}</p>
              </div>
              <div className="trait-container">
                <label>Helps With-</label>
                <p>{medical}</p>
              </div>
            </article>
          </div>
          <p>{this.state.desc}</p>
          <div className="likes-container">
            <button
              onClick={() => this.addToFavorites(uniqueStrain)}
              type="button"
              className="likes-button add-favorite"
            >
              Add To My Strains
            </button>
            <button
              onClick={() => this.addToDislikes(uniqueStrain)}
              type="button"
              className="likes-button add-dislike"
            >
              Add To Not For Me
            </button>
          </div>
        </section>
      );
    }
    return null;
  }
}

export const mapStateToProps = state => ({
  uniqueStrain: state.uniqueStrain,
  strains: state.strains,
  user: state.user,
  myStrains: state.myStrains,
  notForMe: state.notForMe
});

export const mapDispatchToProps = dispatch => ({
  addToMyStrains: strain => {
    dispatch(addToMyStrains(strain));
  },
  addToNotForMe: strain => {
    dispatch(addToNotForMe(strain));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StrainDetails);
