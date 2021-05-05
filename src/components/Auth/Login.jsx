import classes from './style.module.css'

const Login = () => {
  return (
    <section className={classes.AuthContainer}>
      <header className={classes.Header}>
        <h1>Login</h1>
      </header>
      <div className={classes.Content}>
        <div className={classes.Image}>
          <img src="/images/auth.svg" alt="Authentication" />
        </div>
        <form className={classes.Form}>
          <div className={classes.FormGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
          </div>
          <div className={classes.FormGroup}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter password" />
          </div>
          <div className={classes.FormGroup}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
