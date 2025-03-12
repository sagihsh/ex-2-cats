import { useQuery } from '@tanstack/react-query';
import { getAllCats } from '../services/catsService';
import { CatsList, CatsListEmpty, CatsListLoader } from './CatsList';
import { createUseStyles } from 'react-jss';
import { useMemo, useState } from 'react';
import { Cat } from '../types/cat';
import { CatsSearchBar } from './CatsSearchBar';

export function CatsPage() {
  const cats = useQuery({ queryKey: ['cats'], queryFn: getAllCats });
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCats = useMemo(() => filterCats(cats.data, searchQuery), [cats, searchQuery]);

  const classes = useStyles();

  return (
    <div className={classes.page}>
      { cats.isLoading ? (
        <CatsListLoader />
      ) : (
        <>
          { !filteredCats ? (
            <CatsListEmpty />
          ) : (
            <>
              <CatsSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <CatsList cats={filteredCats} />
            </>
          )}
        </>
      )}
    </div>
  );
}

const stringifyCat = (cat: Cat) => {
  const catMiceNames = cat.mice.map(mouse => mouse.name).join(" ");
  return [cat.name, catMiceNames].join(" ").toLowerCase();
}

const filterCats = (cats: Cat[] | undefined, searchQuery: string) => {
  return cats?.filter(cat => {
    const stringifiedCat = stringifyCat(cat);
    const searchWords = searchQuery.toLowerCase().split(" ");

    for (const word of searchWords) {
      if (!stringifiedCat.includes(word)) {
        return false;
      }
    }

    return true;
  });
}

const useStyles = createUseStyles({
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});