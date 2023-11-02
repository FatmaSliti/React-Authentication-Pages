import { useState } from 'react';
import styles from './SignIn.module.css';

function SignIn() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState(false);
    // const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

    const changeEmailHandler = (e) => {
        setEnteredEmail(e.target.value);

        if (e.target.value.includes('@')) {
            setEmailIsValid(true);
        }
    }

    // const changePasswordHandler = (e) => {
    //     setEnteredPassword(e.target.value);

    //     if (e.target.value.length > 6) {
    //         setPasswordIsValid(true);
    //     }
    // }

    const formSubmissionHandler = e => {
        e.preventDefault();

        setEnteredEmailTouched(true);

        if (!enteredEmail.trim().includes('@')) {
            setEmailIsValid(false)
            return;
        }

        setEmailIsValid(true);

        console.log(enteredEmail);
        setEnteredEmail('');
    }

    const nameInputIsValid = !emailIsValid && enteredEmailTouched

    const nameInputClasses = nameInputIsValid ? 'formGroup invalid' : 'formGroup '

    const validateInput = () => {
        setEnteredEmailTouched(true); 

        if (enteredEmail.trim() === '') {
            setEmailIsValid(false)
        }
    }

    return (
        <>
            <h1 className={styles.signInHeader}>Sign In</h1>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form className={styles.signInForm} onSubmit={formSubmissionHandler} >
                        <div className={styles.nameInputClasses}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input type="text" id="email" className={styles.input} onChange={changeEmailHandler} onBlur={validateInput} />
                            {!emailIsValid && <p>please enter a valid email</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.label}>
                                Password
                            </label>
                            <input type="password" id="password" className={styles.input}  />
                        </div>
                        <button className={styles.submitButton}>Submit</button>
                    </form>
                </div>
                <div className={styles.imageContainer}>
                    <img src="sign.jpg" alt="" className={styles.image} />
                </div>
            </div>
        </>
    );
}

export default SignIn;
