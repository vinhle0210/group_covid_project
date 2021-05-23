import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const TimeChart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
      // console.log(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const lineChart = (
    dailyData[0] ? (
      <Line className={styles.line}
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [
            {
            data: dailyData.map((data) => data.cases),
            label: 'Cases',
            borderColor: '#3333ff',
            fill: true,
            },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      <h3 style={{margin: 'auto'}}>Cases in USA</h3>
      {lineChart}
    </div>
  );
};

export default TimeChart;
