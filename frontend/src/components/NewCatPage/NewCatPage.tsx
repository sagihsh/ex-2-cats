import { Link } from 'react-router';
import { NewCatForm } from '../NewCatForm';
import { FaCaretLeft } from "react-icons/fa";
import { useStyles } from './styles';

export function NewCatPage() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Link to="/" className={classes.backLink}>
        <FaCaretLeft fontSize="16" />
        Back To All Cats
      </Link>

      <h1 
        className={classes.title}
      >
        Welcome!
      </h1>
      
      <h2>A New Cat Joins The Family 🥰</h2>

      <NewCatForm />
    </div>
  );
}
