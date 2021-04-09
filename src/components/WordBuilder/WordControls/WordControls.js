import { useState } from "react";

import classes from "./WordControls.module.css";

const WordControls = () => {
  const [output,setOutput] = useState("") ;
  const buttons = (
    <div className={classes.Keyboard}>
      <button
        onClick={() => setOutput(output + "A")}
        className={classes.letter}
      >
        A
      </button>
      <button
        onClick={() => setOutput(output + "B")}
        className={classes.letter}
      >
        B
      </button>
      <button className={classes.letter}>C</button>
      <button className={classes.letter}>D</button>
      <button className={classes.letter}>E</button>
      <button className={classes.letter}>F</button>
      <button className={classes.letter}>G</button>
      <button className={classes.letter}>H</button>
      <button className={classes.letter}>I</button>
      <button className={classes.letter}>J</button>
      <button className={classes.letter}>K</button>
      <button className={classes.letter}>L</button>
      <button className={classes.letter}>M</button>
      <button className={classes.letter}>N</button>
      <button className={classes.letter}>O</button>
      <button className={classes.letter}>P</button>
      <button className={classes.letter}>Q</button>
      <button className={classes.letter}>R</button>
      <button className={classes.letter}>S</button>
      <button className={classes.letter}>T</button>
      <button className={classes.letter}>U</button>
      <button className={classes.letter}>V</button>
      <button className={classes.letter}>W</button>
      <button className={classes.letter}>X</button>
      <button className={classes.letter}>Y</button>
      <button className={classes.letter}>Z</button>
      <button className={classes.symbol}>,</button>
      <button className={classes.symbol}>.</button>
      <button className={classes.letter}>@</button>
      <button className={classes.symbol}>:</button>

      <button className={classes.number}>0</button>
      <button className={classes.number}>1</button>
      <button className={classes.number}>2</button>
      <button className={classes.number}>3</button>
      <button className={classes.number}>4</button>
      <button className={classes.number}>5</button>
      <button className={classes.number}>6</button>
      <button className={classes.number}>7</button>
      <button className={classes.number}>8</button>
      <button className={classes.number}>9</button>
      <button>_</button>
      <button>del</button>
    </div>
  );
  
  
  
  
  
  
  
  return (
    <div className={classes.WordControls}>
      {buttons}
      
      
    </div>
  );
}
 
export default WordControls;