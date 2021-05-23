import React from 'react';
import *as ReactBootStrap from 'react-bootstrap'; 

import { Cards, CountryPicker, Chart, TimeChart,Table } from './components';
import { fetchData, fetchCountries, fetchData_Table, fetchCountries_Table } from './api/';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    stats : [],
    country_List : [],
    stats : []
  }

  async componentDidMount() {
    const data = await fetchData();

    // const countries_List = await fetchCountries_Table();
    // this.setState({countries_List});

    // this.state.countries_List.forEach( async (country) =>{
    //   const stats = await fetchData_Table(country);
      
    //   // Concatenate every list in to stats
    //   this.setState({
    //     stats: this.state.stats.concat([stats])
    //   })

    // })



    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    if(country === ''){
      this.setState({data, country: 'global'});
    }
    else{
      this.setState({ data, country: country });
    }
  }
  
  render() {
    const { data, country, countries_List, stats } = this.state;
    
    return (
      <div className={styles.container}>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} /> 
        <TimeChart data={data} country={country} /> 

        {/* New stuff */}
        {/* <Table countries_List = {countries_List} stats = {stats} data={data} ></Table> */}

      </div>
    );
  }
}

export default App;