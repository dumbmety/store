import classes from './style.module.css'

const Order = props => {
  const { image, name, status, category, price } = props
  let statusClasses = [classes.ProductStatus]

  if (status) {
    statusClasses = [classes.ProductStatus, classes.Available]
  } else {
    statusClasses = [classes.ProductStatus, classes.Unavailable]
  }

  return (
    <li className={classes.Order}>
      <div className={classes.LeftSide}>
        <img className={classes.ProductImage} src={`/images/${image}`} alt="" />
        <div className={classes.ProductNameWrapper}>
          <h4 className={classes.ProductName}>{name}</h4>
          <p className={statusClasses.join(' ')}>
            {status ? 'Available' : 'Unavailable'}
          </p>
        </div>
      </div>

      <div className={classes.RightSide}>
        <h4 className={classes.ProductCatefory}>{category}</h4>
        <h4 className={classes.ProductPrice}>${price}</h4>
      </div>
    </li>
  )
}
export default Order
