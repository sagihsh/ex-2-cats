import { createUseStyles } from 'react-jss';
import { Cat } from '../types/cat';
import { CatCard } from './CatCard';
import noCatsFound from '../assets/no_cats_found.png';

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
  const classes = useStyles();

  return (
    <div>
      <img src={noCatsFound} className={classes.emptyImage} />
    </div>
  )
}

export const CatsListLoader = () => {
  const classes = useStyles();
  
  return (
    <video id="banner-video" autoPlay playsInline muted loop className={classes.loader}>
      <source src="src/assets/cat_loader.webm" type="video/webm" />
    </video>
  );
}

const useStyles = createUseStyles({
  cardsContainer: {
    maxWidth: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    boxSizing: "border-box",
    gap: 32,
    padding: 32,

    "@media screen and (orientation: portrait)": {
      gap: 16,
      padding: 16,
    }
  },
  emptyImage: {
    width: "50%",
    height: "auto",
  },
  loader: {
    width: 150,
    height: 150,
  }
});