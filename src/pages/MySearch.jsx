import SearchBar from '../components/SearchBar/jsx';

function MySearch() {
  // eslint-disable-next-line no-undef
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div>
      <SearchBar value={searchValue} onChange={setSearchValue} />
    </div>
  );
}

export default MySearch;