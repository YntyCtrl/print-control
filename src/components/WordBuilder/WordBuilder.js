import classes from "./WordBuilder.module.css";
import WordControls from "./WordControls/WordControls";
import WordPrewiew from "./WordPreview/WordPreviw";

const WordBuilder = () => {
    return ( 
        <div className={classes.WordBuilder} >
            <WordPrewiew/>
            <WordControls/>
        </div> 
    );
}
 
export default WordBuilder;