import { SYSTEM_NAME, PRODUCT_TITLE } from '../config/constants'





const Product = () => {
  // Set title
  document.title = PRODUCT_TITLE + ' | ' + SYSTEM_NAME

  return (
      <>
          <h1>Product</h1>
      </>
    )
  }
  
  export default Product
