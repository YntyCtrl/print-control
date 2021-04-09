import { useState } from "react";
import WordControls from "../WordControls/WordControls";
import classes from "./WordPreview.module.css";

const WordPreview = ({ output }) => {
const [result, setResult] = useState("Hello World");

return <div className={classes.WordPreview}>{result}</div>;
};
 
export default WordPreview;