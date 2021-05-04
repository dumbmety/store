import classes from '../style.module.css'

const Signup = () => {
  return (
    <section className={classes.AuthContainer}>
      <header className={classes.Header}>
        <h1>SignUp</h1>
      </header>
      <div className={classes.Content}>
        <div className={classes.Image}>
          <img src="/images/auth.svg" alt="" />
        </div>
        <form className={classes.Form}>
          <div className={classes.FormGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter username" />
          </div>
          <div className={classes.FormGroup}>
            <label htmlFor="email">email</label>
            <input type="text" name="email" placeholder="Enter email" />
          </div>
          <div className={classes.FormGroup}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className={classes.FormGroup}>
            <button type="submit" className="btn">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup
