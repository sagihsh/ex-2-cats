import { createUseStyles } from "react-jss";
import { Cat } from "../types/cat";
import { CollapsibleMiceList } from "./CollapsibleMiceList";

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

const useStyles = createUseStyles({
    card: {
      border: "1px solid #ddd",
      borderRadius: 8,
      padding: 16,
      minWidth: 300,
      maxWidth: 300,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      textAlign: "center",
      margin: "10px",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: 8,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      margin: "10px 0",
    },
    description: {
      fontSize: 14,
      color: "#555",
      marginBottom: 10,
    },
    miceList: {
      listStyleType: "none",
      padding: 0,
      marginTop: 10,
    },
    miceItem: {
      fontSize: 14,
      backgroundColor: "#f5f5f5",
      padding: "5px 10px",
      borderRadius: 4,
      margin: "5px 0",
    },
  });