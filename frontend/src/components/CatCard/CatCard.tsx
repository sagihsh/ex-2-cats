import { Cat } from "../../types/cat";
import { CollapsibleMiceList } from "../CollapsibleMiceList";
import { useStyles } from "./styles";

export const CatCard = ({ cat }: { cat: Cat }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={cat.image} alt={cat.name} className={classes.image} />
      <div className={classes.name}>{cat.name}</div>
      <div className={classes.description}>{cat.description}</div>
      
      <CollapsibleMiceList mice={cat.mice} />
    </div>
  );
};
