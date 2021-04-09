

import classes from "./WordPreview.module.css";

const WordPreview = ({ output }) => {
const result = ("Hello World");

return <div className={classes.WordPreview}>{result}</div>;
};
 
export default WordPreview;