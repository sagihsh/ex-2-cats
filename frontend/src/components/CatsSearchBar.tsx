import { createUseStyles } from 'react-jss';
import { FaSearch } from "react-icons/fa";

export const CatsSearchBar = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <FaSearch size={16} className={classes.searchIcon} />
      
      <input
        type="text"
        placeholder="Search for a cat..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event?.target.value)}
      />
    </div>
  );
};

const useStyles = createUseStyles({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: '1px solid #ccc',
    borderRadius: "16px",
    padding: "5px",
    width: 'calc(100% - 64px)',
    boxSizing: "border-box",
    margin: 32,
    marginBottom: 0,
    "& input": {
      border: "none",
      outline: "none",
      padding: "10px",
      flex: 1,
      fontSize: "16px",
    },
  },
  searchIcon: {
    marginLeft: "10px",
    fontSize: "16px",
    color: "gray",
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