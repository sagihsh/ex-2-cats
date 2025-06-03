import { useQuery } from '@tanstack/react-query';
import { getAllCats } from '../../services/catsService';
import { CatsList, CatsListEmpty, CatsListLoader } from '../CatsList';
import { useMemo, useState } from 'react';
import { Cat } from '../../types/cat';
import { CatsSearchBar } from '../CatsSearchBar';
import { FloatingIconButton } from '../FloatingIconButton/FloatingIconButton';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useStyles } from './styles';

export function CatsPage() {
  const cats = useQuery({ queryKey: ['cats'], queryFn: getAllCats });
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCats = useMemo(() => filterCats(cats.data, searchQuery), [cats, searchQuery]);

  const classes = useStyles();
  const navigate = useNavigate();

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

              <FloatingIconButton 
                onClick={() => navigate("/new-cat")}
              >
                <FaPlus size={24} />
              </FloatingIconButton>
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
