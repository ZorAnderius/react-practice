import Product from "../Product/Product"

const ProductList = ({ products }) => {
  return products?.length > 0 && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Product product={product}/>
            </li>
          ))}
        </ul>
      )}

export default ProductList