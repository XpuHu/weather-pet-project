import CityCardGrid from "./CityCardGrid";

const CityList = (props) => {

   const cities = props.cities.map((city, index) => {
      return <CityCardGrid city={city} key={index} getWeather={props.getWeather} />
   });

   return (
      <div className='grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
         {cities}
      </div>
   );
}

export default CityList;
