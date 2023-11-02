import styles from './SignIn.module.css';
function SignUp() {

    const changeEmailHandler = () => {

    }

    const changePasswordHandler = () => {

    }

    return (
        <>
            <h1 className={styles.signInHeader}>Sign Up</h1>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form className={styles.signInForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input type="text" id="email" className={styles.input} onChange={changeEmailHandler} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.label}>
                                Password
                            </label>
                            <input type="password" id="password" className={styles.input} onChange={changePasswordHandler} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password" className={styles.label}>
                                Confirm Password
                            </label>
                            <input type="password" id="password" className={styles.input} />
                        </div>
                        <button className={styles.submitButton}>Submit</button>
                    </form>
                </div>
                <div className={styles.imageContainer}>
                    <img src="sign.jpg" alt="" className={styles.image} />
                </div>
            </div>
        </>
    )
}

export default SignUp
