import { createUseStyles } from 'react-jss';
import { Cat } from '../types/cat';
import { CatCard } from './CatCard';

export function CatsList({ cats }: { cats: Cat[] }) {
  const classes = useStyles();

  return (
    <div className={classes.cardsContainer}>
      {cats.map((cat, index) => (
        <CatCard key={index} cat={cat} />
      ))}
    </div>
  )
}

export function CatsListEmpty() {
  return (
    <div>
      emptyyyyy
    </div>
  )
}

const useStyles = createUseStyles({
  cardsContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 32,
    padding: 16,

    "@media screen and (orientation: portrait)": {
      gap: 16,
      padding: 16,
    }
  }
});