import React, { useState, useEffect } from 'react';
import *as ReactBootStrap from 'react-bootstrap'; 
import { isCompositeComponent } from 'react-dom/test-utils';

import { fetchCountries, fetchData, fetchCountries_Tabl, fetchData_Table } from '../../api';

const Table = ({countries_List, stats , data}) => {

  // Stats show data of all countries
  // if(stats.length){
  //   console.log(stats);
  // }
    const renderCountries = (countries_List, index) =>{
      return (
        <tr key = {index}>
                <td>{countries_List.name}</td>
                {/* <td>Countries data</td> */}
         </tr>
      )
    }

    const country_map = (renderCountries) =>{
      if (countries_List){
        return countries_List.map(renderCountries)
      }
    }

    return(
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>Country</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
           {country_map(renderCountries)}
          </tbody>
        </ReactBootStrap.Table>
    )

}
export default Table;