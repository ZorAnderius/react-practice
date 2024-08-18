import { useEffect, useState } from "react";
import { fetchProducts } from "../../APi/fetchAPI";
import ProductList from "../../components/ProductList/ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProducts();
          setProducts(data.products);
        }

        getProduct();
    },[])
  return (
    <div>
      <h1>Products page</h1>
      <ProductList products={products}/>
    </div>
  )
}

export default Products