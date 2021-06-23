import { useFormik } from 'formik'
import styles from './style.module.css'

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
  })

  return (
    <section className={styles.AuthContainer}>
      <header className={styles.Header}>
        <h1>Login</h1>
      </header>
      <div className={styles.Content}>
        <div className={styles.Image}>
          <img src="/images/auth.svg" alt="Authentication" />
        </div>
        <form
          className={styles.Form}
          onSubmit={e => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
          <div className={styles.FormGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username && (
              <div className={styles.ErrorMessage}>
                {formik.errors.username}
              </div>
            )}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className={styles.ErrorMessage}>
                {formik.errors.password}
              </div>
            )}
          </div>

          <div className={styles.FormGroup}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}

const validate = values => {
  const errors = {}

  // User Name
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 4) {
    errors.username = 'Must be 5 characters or more'
  }

  // Password
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 9 characters or more'
  }

  return errors
}
