import { useState } from 'react';

import styles from './BaseApparel.module.css';

import logo from '../images/logo.svg';
import arrow from '../images/icon-arrow.svg'
import error from '../images/icon-error.svg';



const BaseApparel = () => {
  const [email, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);



  const checkEmailValidity = (email) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegEx.test(email);
  }

  const emailIsValid = checkEmailValidity(email);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  }

  const handleInputBlur = () => {
    setIsTouched(true);
  }


  const reset = () => {
    if (hasError) {
      setEmail("");
      setIsTouched(false);
    }
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    await setIsTouched(true);
    await setHasError(!emailIsValid && isTouched);
    await reset();
  }


  return (
    <div className={styles.wrapper}>

      <div className={styles.card}>

        <div id={styles["header"]}>
          <img src={logo} alt="logo" />
        </div>

        <div id={styles["content"]}>
          <h1>
            <span>WE'RE</span> COMING SOON
          </h1>

          <p>Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our
            launch deals.
          </p>

          <form onSubmit={formSubmissionHandler}>
            <input type="text" placeholder="Email Address" onChange={handleInputChange} onBlur={handleInputBlur} value={email} />
            {hasError && <img src={error} alt="error" className={styles.error} />}
            <button type="submit" >
              <img src={arrow} alt="arrow" />
            </button>
            {hasError && <div className={styles.errorMessage}>Please provide a valid email</div>}
          </form>
        </div>

        <div id={styles["image"]}></div>
      </div>
    </div>
  )
}

export default BaseApparel;

