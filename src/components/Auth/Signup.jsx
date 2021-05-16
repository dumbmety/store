import { useFormik } from 'formik'
import classes from './style.module.css'

const validate = values => {
  const errors = {}

  // validate username field
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 4) {
    errors.username = 'Must be 5 characters or more'
  }

  // validate email field
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // validate password field
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 9 characters or more'
  }
  return errors
}

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
  })

  return (
    <section className={classes.AuthContainer}>
      <header className={classes.Header}>
        <h1>SignUp</h1>
      </header>
      <div className={classes.Content}>
        <div className={classes.Image}>
          <img src="/images/auth.svg" alt="Authentication" />
        </div>
        <form
          className={classes.Form}
          onSubmit={e => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
          <div className={classes.FormGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className={classes.ErrorMessage}>
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div className={classes.FormGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={classes.ErrorMessage}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={classes.FormGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={classes.ErrorMessage}>
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className={classes.FormGroup}>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup
