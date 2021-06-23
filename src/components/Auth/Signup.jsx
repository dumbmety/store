import { useFormik } from 'formik'
import styles from './style.module.css'

const validate = values => {
  const errors = {}

  // User Name
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 4) {
    errors.username = 'Must be 5 characters or more'
  }

  // Email
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // Password
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Must be 9 characters or more'
  }

  return errors
}

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
  })

  return (
    <section className={styles.AuthContainer}>
      <header className={styles.Header}>
        <h1>SignUp</h1>
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
              name="username"
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div className={styles.ErrorMessage}>{formik.errors.email}</div>
            )}
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <div className={styles.ErrorMessage}>
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className={styles.FormGroup}>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </section>
  )
}
