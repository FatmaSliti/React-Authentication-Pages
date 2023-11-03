import { useState } from "react";
import styles from "./styling.module.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);

    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState(false);

    const [message, setMessage] = useState("");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const changeEmailHandler = (e) => {
        setEnteredEmail(e.target.value);
        // setEmailIsValid(e.target.value.includes('@'));
        setEmailIsValid(emailPattern.test(e.target.value))
    };
    const changePasswordHandler = (e) => {
        setEnteredPassword(e.target.value);
        setPasswordIsValid(e.target.value.length >= 6);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        const emailValid = emailIsValid && enteredEmail.trim() !== "";
        const passwordValid = passwordIsValid && enteredPassword.trim() !== "";

        if (!emailValid || !passwordValid) {
            setMessage("Please fill in all the fields.");
            return;
        } else {
            setMessage("");
        }

        console.log(enteredEmail + enteredPassword);
        setEnteredEmail("");
        setEnteredPassword("");
        navigate("/");
    };

    return (
        <>
            <h1 className={styles.signInHeader}>Sign In</h1>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form className={styles.signInForm} onSubmit={formSubmissionHandler}>
                        <div className={styles.nameInputClasses}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                value={enteredEmail}
                                className={styles.input}
                                onChange={changeEmailHandler}
                            />
                            {emailIsValid || !enteredEmail ? null : (
                                <p className={styles.validate}>Please enter a valid email</p>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.label}>
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                id="password"
                                value={enteredPassword}
                                className={styles.input}
                                onChange={changePasswordHandler}
                            />
                            {passwordIsValid || !enteredPassword ? null : (
                                <p className={styles.validate}>
                                    Please enter a valid password (at least 6 characters)
                                </p>
                            )}
                        </div>
                        {(message && !enteredEmail) ||
                            (!enteredPassword && <p style={{ color: "red" }}>{message}</p>)}
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
