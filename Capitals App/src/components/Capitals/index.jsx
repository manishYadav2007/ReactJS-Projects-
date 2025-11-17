import { Component } from "react";
import "./index.css";

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

class Capitals extends Component {
  state = {
    activeCapitalIds: countryAndCapitalsList[0].id,
  };

  onChangeCountryCapitalInput = (event) => {
    this.setState({
      activeCapitalIds: event.target.value,
    })
  };

  
  getCountry = (activeCapitalIds) => {
    const country = countryAndCapitalsList.find(
      (country) => country.id === activeCapitalIds
    );
    return country.country;
  }

  render() {
    const { activeCapitalIds } = this.state;

    const country = this.getCountry(activeCapitalIds);

    
    return (
      <div className="bg">
        <div className="capital-container">
          <div className="card-body">
            <div className="capital-container">
              <h1 className="card-title">Countries And Capitals</h1>
              <select
                name="capital-option"
                className="capital-dropdown"
                id="capital-option"
                value={activeCapitalIds}
                onChange={this.onChangeCountryCapitalInput}
              >
                {countryAndCapitalsList.map((eachCountryState) => (
                  <option
                    value={eachCountryState.id}
                    key={eachCountryState.id}
                  >
                    {eachCountryState.capitalDisplayText}
                  </option>
                ))}
              </select>
              <label className="country-title" id="capital-option">
                is capital of which country?
              </label>
              <p className="selected-country">{country}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Capitals;
