import React, { useState, useEffect } from 'react';
import './App.css';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import InfoBox from './InfoBox';

function App() {
  const [countries, setCountires] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountiresData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountires(countries);
        });
    };

    getCountiresData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    console.log('Country Code showing is >>>>>> ', countryCode)

    setCountry(countryCode);
  }


  return (
    <div className="app">
      <div className="app_header">

        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map(country =>
                <MenuItem value={country.value}>{country.name}</MenuItem>
              )
            }

          </Select>
        </FormControl>

      </div>

      <div className="app_stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
        <InfoBox title="Recovered" cases={1234} total={2000} />
        <InfoBox title="Deaths" cases={12345} total={2000} />
      </div>


      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
