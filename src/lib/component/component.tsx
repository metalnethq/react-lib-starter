import classes from "./component.module.css";

export function Test({ children }: { children?: React.ReactNode }) {
  return <div className={classes.wrapper}>{children}</div>;
}
