function todayReport(){
    
//Create a div to hold everything

let newForecast = document.getElementById('report');

newForecast.innerHTML = `
        <h4>Today</h4>
        <p>Scattered thunderstorms</p>
        <ul>
            <li>Temp: 29C</li>
            <li>Precipitation: 25%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 16km/h</li>
        </ul>
`;
}

function tomorrowReport(){
    
let reportTomorrow = document.getElementById('report');

   reportTomorrow.innerHTML = `
    <h4>Tomorrow</h4>
        <p>Partly cloudy</p>
        <ul>
            <li>Temp: 27C</li>
            <li>Precipitation: 20%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13km/h</li>
        </ul>
 `;

}
