
const SearchBox = (props) => {

   const onChangeHandler = (e) => {
      props.setSearchText(e.target.value);
   }

   return (
      <div className='m-10 text-center'>
         <input
            onChange={onChangeHandler}
            type='search'
            className='p-1 pl-2 rounded-lg'
            placeholder='Enter city name...' />
      </div>
   );
}

export default SearchBox;
