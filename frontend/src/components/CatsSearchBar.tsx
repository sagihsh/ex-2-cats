import { createUseStyles } from 'react-jss';

export const CatsSearchBar = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) => {
  const classes = useStyles();

  return (
    <input
      type="text"
      className={classes.searchBar}
      placeholder=" 🔍  Search for a cat"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event?.target.value)}
    />
  );
};

const useStyles = createUseStyles({
  searchBar: {
    padding: 10,
    width: 'calc(100% - 64px)',
    boxSizing: "border-box",
    margin: 32,
    marginBottom: 0,
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    '&:focus': {
      borderColor: '#007bff',
    },
  },
  catList: {
    listStyleType: 'none',
    padding: 0,
  },
  catItem: {
    padding: '8px',
    margin: '5px 0',
    borderBottom: '1px solid #ddd',
  },
});