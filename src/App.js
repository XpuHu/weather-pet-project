import './App.css';
import CityList from "./CityList";
import React from "react";
import SearchBox from "./SearchBox";
import countries from './countries.json';
import axios from "axios";

class App extends React.Component {

   state = {
      cities: [
         {
            name: 'Fuck',
            showWeather: false,
            weather: {
               temp: '-2',
               feels: '-10',
               details: 'shit'
            }
         }
      ],
      searchText: '',
      currentTime: null,
   }

   setSearchText = (text) => {
      this.setState({
         searchText: text
      });
   }

   showTime = () => {
      const checkTime = (time) => {
         return time < 10 ? `0${time}` : time;
      }

      const today = new Date();
      const h = checkTime(today.getHours());
      const m = checkTime(today.getMinutes());
      const s = checkTime(today.getSeconds());

      return `${h}:${m}:${s}`

   }

   componentDidMount() {
      setInterval(() => {
         this.setState({
            currentTime: this.showTime()
         })
      }, 1000);


      countries.filter((country) => country.capital !== '').forEach(country => {
         this.setState((state) => {
            return {
               cities: [...state.cities, {
                  name: country.capital,
                  showWeather: false,
                  weather: {}
               }]
            }
         })
      })
   }

   setWeatherData = (cityName, temp, feels, desc, img) => {

      this.setState((state) => {
         return {
            ...state,
            cities: state.cities.map((city) => city.name === cityName
               ? {
                  ...city,
                  name: cityName,
                  showWeather: true,
                  weather: {
                     temp: Math.round(temp),
                     feels: Math.round(feels),
                     details: desc,
                     img: img
                  }
               }
               : city
            )
         }
      })
   }

   getWeather = (cityName) => {
      const apiKey = '8971b2f5355651012067828868ee7140';
      const units = 'metric';

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&units=${ units }&APPID=${ apiKey }`).then(response => {
         const { temp, feels_like } = response.data.main;
         const desc = response.data.weather[0].description;
         const img = response.data.weather[0].icon;
         const imgLink = `http://openweathermap.org/img/wn/${ img }@2x.png`;
         this.setWeatherData(cityName, temp, feels_like, desc, imgLink);

         console.log(this.state.cities);
      });
   }

   render() {
      const cityList = this.state.cities.filter((city) => city.name.toLowerCase().includes(this.state.searchText.toLowerCase()));

      const dateTime = new Date();
      const date = dateTime.toLocaleDateString();

      return (
         <div className='bg-secondary-500 min-w-full min-h-screen p-5 lg:p-10 font-display'>
            <div className='text-center text-5xl'>{ date }</div>
            <div className='text-center text-xl'>{ this.state.currentTime }</div>
            <SearchBox setSearchText={ this.setSearchText } />
            { this.state.searchText.length >= 2 && <CityList cities={ cityList } getWeather={ this.getWeather } /> }
         </div>
      );
   }
}

export default App;
