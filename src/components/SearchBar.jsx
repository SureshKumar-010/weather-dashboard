import "../styles/SearchBar.css"
const SearchBar = () => {
  return (
    <div className='whole-search'>
      <input type="text" placeholder= ' 🔍︎ Search for a city...' className='search-input'/>
      <button className='search-button'>Search</button>
    </div>
  )
}

export default SearchBar