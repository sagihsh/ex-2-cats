import { useQuery } from '@tanstack/react-query';
import { getAllCats } from '../services/catsService';
import { CatsList, CatsListEmpty } from './CatsList';
import { createUseStyles } from 'react-jss';

export function CatsPage() {
  const cats = useQuery({ queryKey: ['cats'], queryFn: getAllCats });

  const classes = useStyles();

  return (
    <div className={classes.page}>
      { cats.isLoading || !cats.data ? (
        <CatsListEmpty />
      ) : (
        <CatsList cats={cats.data} />
      )}
    </div>
  )
}

const useStyles = createUseStyles({
  page: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }
});