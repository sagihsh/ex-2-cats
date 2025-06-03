import { useState } from "react";
import classNames from 'classnames';
import { Mouse } from "../../types/mouse";
import { useStyles } from "./styles";

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
      <ul className={classNames(classes.list, { [classes.expanded]: expanded , [classes.scrollable]: mice.length > 4 })}>
        {mice.map((mouse, index) => (
          <li key={index}>{mouse.name}</li>
        ))}
      </ul>
    </div>
  );
};
