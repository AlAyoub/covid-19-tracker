import React, { useState, useEffect } from 'react';
import './App.css';
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Header from './Header';
import Table from './Table';
import { sortData, prettyPrintStat } from './utils';
import LineGraph from './LineGraph';

function App() {
  const [countries, setCountires] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountiresData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountires(countries);
        });
    };

    getCountiresData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;


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
            <InfoBox title="Coronavirus Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)} />
            <InfoBox title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)} />
            <InfoBox title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)} />
          </div>

          {/* Map */}
          <Map />

        </div>
        <Card className="app_right">
          <CardContent>
            <div className="app_titleAndLogo">
              <h3>Most Cases</h3>
              <img
                className="app_liveLogo"
                src="https://w4university.files.wordpress.com/2020/01/giphy-1.gif"
                alt="Live Now Animation"
              />
            </div>

            {/* Table */}
            <Table countries={tableData} />
            <h3>New Cases (Worldwide)</h3>
            <LineGraph />
            {/* Graph */}
          </CardContent>


        </Card>


      </div>
    </div>
  );
}

export default App;
