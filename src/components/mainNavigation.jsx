import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                Login Project
            </h1>
            <div className={classes.container}>
                <p>
                    <Link to='/signIn' className={classes.button}>
                        Sign In
                    </Link>
                </p>
                <p>
                    <Link to='/signUp' className={classes.button}>
                        Sign Up
                    </Link>
                </p>
            </div>
            
        </header>
    );
}

export default MainHeader;
