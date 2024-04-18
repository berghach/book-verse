import React, {useState} from 'react'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', searchValue);
    // You can perform additional actions like fetching data here
  };
  return (
    <>
      <form action="" method="get" onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" placeholder='Search...' value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value);
                // console.log('Input value:', e.target.value); // Add this line
              }}/>
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchBar
