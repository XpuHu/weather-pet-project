
const CityCardGrid = (props) => {

   const { temp, details, feels, img } = props.city.weather;

   const getWeatherHandler = (cityName) => {

      props.getWeather(cityName);
   }

   return (
      <div className='bg-primary-300 hover:bg-primary-400 rounded-lg p-5'>
         <div className='text-2xl'>{ props.city.name }</div>
         { !props.city.showWeather ? <button
               className='inline mt-3 py-1 px-2 border bg-primary-500 hover:bg-secondary-100 border-solid border-2 border-primary-700 rounded-lg text-secondary-100 hover:text-secondary-700'
               onClick={() => getWeatherHandler(props.city.name)}>Show weather!</button>
            : <div
               className='grid grid-flow-col grid-cols-3 grid-rows-2 font-body items-center justify-items-center text-center'>

               <div className='row-span-2 text-5xl md:row-span-1 after:content-["\00B0"]'>{ temp }</div>
               <div className='text-xl md:row-start-2 md:col-start-2 md:col-span-2'>{ details }</div>
               <div className='md:col-start-1 md:row-start-2 mt-3 text-sm md:m-0'>
                  Feels like
                  <div className="after:content-['\00B0']">{ feels }</div>
               </div>
               <div
                  className='row-span-2 md:row-start-1 md:col-start-2 md:col-span-2 md:self-start md:justify-self-center w-16'>
                  <img src={ img } className='w-full' alt={ details } />
               </div>

            </div>
         }
      </div>
   )
      ;
}

export default CityCardGrid;
