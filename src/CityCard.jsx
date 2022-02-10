import styles from './CityCard.module.css';

const CityCard = (props) => {
debugger
   // const { name, temperature, details, feels, img } = props.city;
   return (
      // <div className='w-1/4 bg-ivory hover:bg-pewter rounded-lg p-4 shrink-1'>
      <div className='sm:grow md:basis-1/3 lg:basis-1/4 xl:basis-1/8 bg-primary-300 hover:bg-primary-400 rounded-lg p-5'>
         <div className='text-2xl'>{ props.cityName }</div>
         <div className='flex items-center font-body'>
            <div className={ `${ styles.my_flex } text-5xl after:content-['\\00B0']` }>{ 'temperature' }</div>
            <div className={ `${ styles.my_flex } flex-col text-center`}>
               <div className='text-xl'>{ 'details' }</div>
               <div className='mt-3 text-sm'>
                  Feels like
                  <div className="after:content-['\00B0']">{ 'feels' }</div>
               </div>
            </div>
            <div className={styles.my_flex}>
               <img src={'img'} className='object-none' alt={'details'} />
            </div>
            
         </div>
      </div>
   );
}

export default CityCard;
