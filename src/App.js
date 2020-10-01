import React, { useState, useEffect } from 'react';
import './App.css';
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Header from './Header'

function App() {
  const [countries, setCountires] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

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

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
      })
  };

  console.log('Country Info >>>>>>', countryInfo)
  return (
    <div>
      <Header />
      <div className="app">

        <div className="app_left">
          <div className="app_header">

            {/* Header */}
            <h1>COVID-19 TRACKER</h1>

            {/* Title + Select input dropdown field */}
            <FormControl className="app_dropdown">
              <Select variant="outlined" onChange={onCountryChange} value={country}>
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* InfoBoxes */}
          {/* InfoBoxes */}
          {/* InfoBoxes */}
          <div className="app_stats">
            <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={2000} />
            <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={2000} />
            <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={2000} />
          </div>

          {/* Map */}
          <Map />

        </div>
        <Card className="app_right">
          <CardContent>
            <h3>Live Cases by Country</h3>
            {/* Table */}
            <h3>Worldwide new cases</h3>
            {/* Graph */}
          </CardContent>


        </Card>


      </div>
    </div>
  );
}

export default App;
