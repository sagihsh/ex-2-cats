import { FaSearch } from "react-icons/fa";
import { useStyles } from "./styles";

export const CatsSearchBar = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (value: string) => void }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <FaSearch size={16} className={classes.searchIcon} />
      
      <input
        type="text"
        placeholder="Search for a cat or its mice..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event?.target.value)}
      />
    </div>
  );
};
