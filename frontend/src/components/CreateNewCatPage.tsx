import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router';

export function CreateNewCatPage() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      this is the create new cat page !!!

      <button onClick={() => navigate("/")}>
        back to all cats
      </button>
    </div>
  );
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