import React, { PropsWithChildren } from "react";
import { useStyles } from "./styles";

type FloatingIconButtonProps = {
  onClick?: () => void;
};

export const FloatingIconButton: React.FC<PropsWithChildren<FloatingIconButtonProps>> = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.fab} onClick={onClick}>
      {children}
    </div>
  );
};
