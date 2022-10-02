// firebase stuff
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getDatabase, ref, child, get, push, remove, set } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js'

const firebaseConfig = {
  apiKey: "AIzaSyDv83pED-6O5_FTzewJ_9MeaMREO2I3CwU",
  authDomain: "esp32-firebase-48b88.firebaseapp.com",
  databaseURL: "https://esp32-firebase-48b88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-firebase-48b88",
  storageBucket: "esp32-firebase-48b88.appspot.com",
  messagingSenderId: "414288100642",
  appId: "1:414288100642:web:1b80bca52d40b6c59a797b"
};

const app = initializeApp(firebaseConfig); 
const database = "???"; // TODO

const chart_backgroundColor = 'rgb(255, 99, 132)';
const chart_borderColor = 'rgb(255, 99, 132)';
var current_chart_data = [];

// TODO
// chart_data will look like
// [50, 100, 200, 300]
// where the numbers are the battery voltages
// each second (50 is 3 seconds before,
// 100 is 2 seconds before, etc.)
//
// The number of labels should be equal to the
// number of voltages in chart_data. The first
// label will label the first data point (50) etc.
function updateChart(chart_data) {
  // TODO
  const labels = [ 5, 4, 3, 2, 1, "now", "???" ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Battery voltage (V)',
      backgroundColor: chart_backgroundColor,
      borderColor: chart_borderColor,
      data: chart_data,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

// TODO
// add a callback function for when a value in 
// the firebase realtime database is updated
//
// this function will be called like
// database.on('value', processNewValue);
//
// this function will take the current voltage
// and make the new voltage show up on the chart
// along with the past voltages
function processNewValue(snapshot) {
  let current_voltage = snapshot.val();  


  
  updateChart([5, 4, 3, 2, 1]);
}
 
// TODO
// code to listen when a value in the firebase realtime database
// changes and use the function processNewValue() as a callback 
// when the value changes
//YOUR CODE HERE















// so the flow of function call should look like this:
//
// 1. data in firebase changes
// 2. firebase tells your code that the data has been changed
// 3. callback function to process the new data is called
// 4. callback function calls updateChart() with the
//    new chart data
// 5. updateChart() updates the chart on the page

 
// this is code to render the chart to get you started
// const labels = [ 5, 4, 3, 2, 1, "now", "???" ];
updateChart([7, 6, 5, 4, 3, 2, 1]);
