import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Leyout.module.css";

const Leyout = () => {
    return (<div className={classes.Leyout}>
        <Toolbar/>
        <Drawer/>
    </div>);
}

export default Leyout;