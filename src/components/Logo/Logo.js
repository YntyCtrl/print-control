import classes from "./Logo.module.css";
import logo from "../../images/PC.png"

const Logo = () => {
    return (
      <div className={classes.Logo}>
        <img src={logo} alt="Logo of the Print Ctrl" />
        <div>Print Ctrl</div>
      </div>
    );
  }
  
  export default Logo;