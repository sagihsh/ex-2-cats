import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Mouse } from "../types/mouse";

export const CollapsibleMiceList = ({ mice }: { mice: Mouse[] }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={classes.container} onClick={() => setExpanded(!expanded)}>
      <div className={classes.title}>
        {mice.length} mice &nbsp;
        <span className={`${classes.arrow} ${expanded ? classes.rotated : ""}`}>
          ▶
        </span>
      </div>
      <ul className={`${classes.list} ${expanded ? classes.expanded : ""}`}>
        {mice.map((mouse, index) => (
          <li key={index}>{mouse.name}</li>
        ))}
      </ul>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    borderRadius: 12,
    padding: 10,
    boxSizing: "border-box",
    width: "100%",
    cursor: "pointer",
    userSelect: "none",
    transition: "background 0.2s",
    "&:hover": {
      background: "#f9f9f9",
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  },
  expanded: {
    marginTop: 10,
    maxHeight: 100,
    overflow: "auto",
  },
  arrow: {
    transition: "transform 0.3s",
  },
  rotated: {
    transform: "rotate(90deg)",
  },
});