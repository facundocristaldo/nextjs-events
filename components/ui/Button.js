import Link from "next/link";
import classes from "./Button.module.css";

const Button = ({ link,onClick, ...props }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return(
    <button onClick={onClick} className={classes.btn}>{props.children}</button>
  )
};

export default Button;
