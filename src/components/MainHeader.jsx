import {MdPostAdd} from 'react-icons/md';
import classes from './MainHeader.module.css';
import {Link} from "react-router-dom";
import {BsBodyText, BsFillFilePostFill} from "react-icons/bs";

const MainHeader = () =>
{
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <BsBodyText size={50} />
                Neon-Style Poem Poster
            </h1>
            <p>
                <Link to={"create-poem"} className={classes.button} >
                    <BsFillFilePostFill size={18}/>
                    New Poem
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;