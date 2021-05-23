import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://disease.sh/v3/covid-19/nyt/usa');

      // var updated_data = [];
      // var i = data.length -14;

      // for (i; i < data.length; i++){
      //   var date_info = data[i].date;
      //   var cases_info = data[i].cases;


      //   var data_dict = {};
      //   data_dict['date'] = date_info;
      //   data_dict['cases'] = cases_info;

      //   updated_data.push(data_dict);

      // }
      return data;
      // return updated_data;
    } catch (error) {
      return error;
    }
  };

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }

};

export const fetchData_Table = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country.name}`;
  }

  try {
    // const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
    const { data } = await axios.get(changeableUrl);

    return { data };
    // return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
export const fetchCountries_Table = async () => {
  try {
    // const { data: { countries } } = await axios.get(`${url}/countries`);
    const {  data: {countries}  } = await axios.get(`${url}/countries`);

    // console.log({countries});
    // return countries.map((country) => country.name);
    return countries;
  } catch (error) {
    return error;
  }

};
